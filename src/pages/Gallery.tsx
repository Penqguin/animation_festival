import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

type GalleryMeta = { slug: string; title: string; preview?: string };
const PREFERRED = [".jpg", ".jpeg", ".png", ".webp"];
const prefixPath = (g: string, p: string) =>
  p.startsWith("/") || p.startsWith("http") ? p : `/galleries/${g}/${p}`;

const pickPreferred = (paths: string[]) => {
  const byBase = paths.reduce((m, p) => {
    const name = p.split("/").pop() || p;
    const dot = name.lastIndexOf(".");
    const base = (dot > 0 ? name.slice(0, dot) : name).toLowerCase();
    (m.get(base) || m.set(base, []).get(base))!.push(p);
    return m;
  }, new Map<string, string[]>());
  const out: string[] = [];
  for (const variants of byBase.values()) {
    let choice = variants.find((c) =>
      PREFERRED.includes(c.slice(c.lastIndexOf(".")).toLowerCase())
    );
    if (!choice)
      choice = variants.find(
        (c) =>
          !c.toLowerCase().endsWith(".heic") &&
          !c.toLowerCase().endsWith(".heif")
      );
    out.push(choice || variants[0]);
  }
  return out;
};

export default function Gallery() {
  const [galleries, setGalleries] = useState<GalleryMeta[]>([]);
  const [imageList, setImageList] = useState<string[]>([]);
  const [imgSizes, setImgSizes] = useState<
    { src: string; w: number; h: number; ratio: number }[]
  >([]);
  const [rows, setRows] = useState<
    { src: string; width: number; height: number }[][]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { slug } = useParams<{ slug?: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/galleries/index.json");
        const list = res.ok ? ((await res.json()) as GalleryMeta[]) : [];
        if (!list.length) return setGalleries([]);
        const enhanced = await Promise.all(
          list.map(async (g) => {
            try {
              const r = await fetch(`/galleries/${g.slug}/index.json`);
              if (!r.ok) return g;
              const files = (await r.json()) as string[];
              const normalized = files.map((p) => prefixPath(g.slug, p));
              return {
                ...g,
                preview: pickPreferred(normalized)[0] || normalized[0],
              };
            } catch {
              return g;
            }
          })
        );
        if (!cancelled) setGalleries(enhanced);
      } catch {
        /* ignore */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!slug) return setImageList([]);
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/galleries/${slug}/index.json`);
        if (!res.ok) throw new Error();
        const files = (await res.json()) as string[];
        const normalized = files.map((p) => prefixPath(slug, p));
        if (!cancelled) setImageList(pickPreferred(normalized));
      } catch {
        if (!cancelled) {
          setImageList([]);
          setError("No images found for this gallery.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    let cancelled = false;
    if (!imageList.length) {
      setImgSizes([]);
      setRows([]);
      return;
    }
    (async () => {
      const loaded: typeof imgSizes = [];
      await Promise.all(
        imageList.map(
          (src) =>
            new Promise<void>((res) => {
              const img = new Image();
              img.src = src;
              img.onload = () => {
                if (!cancelled)
                  loaded.push({
                    src,
                    w: img.naturalWidth,
                    h: img.naturalHeight,
                    ratio: img.naturalWidth / img.naturalHeight,
                  });
                res();
              };
              img.onerror = () => {
                if (!cancelled) loaded.push({ src, w: 1, h: 1, ratio: 1 });
                res();
              };
            })
        )
      );
      if (!cancelled) setImgSizes(loaded);
    })();
    return () => {
      cancelled = true;
    };
  }, [imageList]);

  useEffect(() => {
    if (!imgSizes.length) return setRows([]);
    const compute = () => {
      const container = document.querySelector(
        ".gallery-justified"
      ) as HTMLElement | null;
      const cw = container ? Math.max(320, container.clientWidth) : 1000;
      const target = 260,
        gap = 8;
      const out: typeof rows = [];
      let row: typeof imgSizes = [],
        wAtTarget = 0;
      for (const im of imgSizes) {
        const w = im.ratio * target;
        row.push(im);
        wAtTarget += w;
        if (wAtTarget + gap * (row.length - 1) >= cw) {
          const scale = (cw - gap * (row.length - 1)) / wAtTarget;
          const h = Math.max(100, Math.round(target * scale));
          out.push(
            row.map((r) => ({
              src: r.src,
              width: Math.round(r.ratio * h),
              height: h,
            }))
          );
          row = [];
          wAtTarget = 0;
        }
      }
      if (row.length) {
        const h = Math.min(
          target,
          Math.round(
            ((cw - gap * (row.length - 1)) / Math.max(1, wAtTarget)) * target
          )
        );
        out.push(
          row.map((r) => ({
            src: r.src,
            width: Math.round(r.ratio * h),
            height: h,
          }))
        );
      }
      setRows(out);
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [imgSizes]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight")
        setLightboxIndex((i) => (i + 1) % imageList.length);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i - 1 + imageList.length) % imageList.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, imageList.length]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="min-h-screen max-w-screen p-6">
        <div className="flex flex-wrap gap-3 justify-center mb-6">
          {galleries.map((g) => (
            <Link
              key={g.slug}
              to={`/gallery/${g.slug}`}
              className="block min-w-100 w-1/3 h-1/3 overflow-hidden border border-transparent hover:border-white"
            >
              {g.preview ? (
                <div className="relative w-full h-full">
                  <img
                    src={g.preview}
                    alt={g.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute left-0 right-0 bottom-0 bg-black/60 text-3xl text-white p-2">
                    {g.title}
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-sm text-gray-400">
                  {g.title}
                </div>
              )}
            </Link>
          ))}
        </div>

        {slug ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">{slug}</h2>
            {loading && <p className="text-gray-300">Loading images…</p>}
            {error && <p className="text-yellow-300">{error}</p>}
            {!loading && !error && imageList.length === 0 && (
              <p className="text-gray-400">No images available.</p>
            )}

            <div className="gallery-justified">
              {rows.map((r, i) => (
                <div
                  key={i}
                  className="flex gap-2 mb-2"
                  style={{ alignItems: "stretch" }}
                >
                  {r.map((item) => (
                    <button
                      key={item.src}
                      onClick={() => {
                        setLightboxIndex(
                          imgSizes.findIndex((s) => s.src === item.src)
                        );
                        setLightboxOpen(true);
                      }}
                      className="overflow-hidden bg-gray-800/40 p-0 border-0"
                      style={{ width: item.width, height: item.height }}
                      aria-label="Open image"
                    >
                      <img
                        src={item.src}
                        alt=""
                        style={{
                          width: item.width,
                          height: item.height,
                          objectFit: "cover",
                        }}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-gray-400" />
        )}
      </main>
      <Footer />

      {lightboxOpen && imageList.length > 0 && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white text-2xl"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
          <button
            className="absolute left-4 text-white text-3xl p-2"
            onClick={() =>
              setLightboxIndex(
                (i) => (i - 1 + imageList.length) % imageList.length
              )
            }
            aria-label="Previous"
          >
            ‹
          </button>
          <div className="max-w-[90vw] max-h-[90vh]">
            <img
              src={imageList[lightboxIndex]}
              alt={`Photo ${lightboxIndex + 1}`}
              className="w-full h-auto max-h-[90vh] object-contain rounded-md shadow-lg"
            />
            <p className="mt-3 text-center text-sm text-gray-300">{`${
              lightboxIndex + 1
            } / ${imageList.length}`}</p>
          </div>
          <button
            className="absolute right-4 text-white text-3xl p-2"
            onClick={() => setLightboxIndex((i) => (i + 1) % imageList.length)}
            aria-label="Next"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
