/**
 * Simple script to convert HEIC/HEIF files to JPEG inside public/galleries/*
 * and regenerate index.json manifests for each gallery and the root index.json.
 *
 * Usage: node scripts/convert-heic.js
 * (Install dependencies first: npm install)
 */
const fs = require("fs").promises;
const path = require("path");
let sharp;
try {
  sharp = require("sharp");
} catch (e) {
  console.error(
    "Please run `npm install` to install the `sharp` dependency before running this script."
  );
  process.exit(1);
}

const GALLERIES_DIR = path.join(__dirname, "..", "public", "galleries");

async function listDirs() {
  const entries = await fs.readdir(GALLERIES_DIR, { withFileTypes: true });
  return entries.filter((e) => e.isDirectory()).map((d) => d.name);
}

async function convertFolder(folder) {
  const folderPath = path.join(GALLERIES_DIR, folder);
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  const files = entries.filter((e) => e.isFile()).map((e) => e.name);

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === ".heic" || ext === ".heif") {
      const inPath = path.join(folderPath, file);
      const outName = path.basename(file, ext) + ".jpg";
      const outPath = path.join(folderPath, outName);
      if (!(await exists(outPath))) {
        console.log(`Converting ${inPath} -> ${outPath}`);
        try {
          await sharp(inPath).jpeg({ quality: 90 }).toFile(outPath);
        } catch (err) {
          console.warn(`Failed converting ${file}:`, err.message || err);
        }
      }
    }
  }
}

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function writeManifest(folder) {
  const folderPath = path.join(GALLERIES_DIR, folder);
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  const files = entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((n) => n !== "index.json")
    .sort();
  const manifestPath = path.join(folderPath, "index.json");
  await fs.writeFile(manifestPath, JSON.stringify(files, null, 2));
  console.log(`Wrote manifest for ${folder} (${files.length} files)`);
}

async function writeRootIndex(dirs) {
  const data = dirs.map((d) => ({ slug: d, title: d }));
  const pathRoot = path.join(GALLERIES_DIR, "index.json");
  await fs.writeFile(pathRoot, JSON.stringify(data, null, 2));
  console.log("Wrote root galleries/index.json");
}

async function main() {
  try {
    const dirs = await listDirs();
    for (const d of dirs) {
      await convertFolder(d);
      await writeManifest(d);
    }
    await writeRootIndex(dirs);
    console.log("Done.");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main();
