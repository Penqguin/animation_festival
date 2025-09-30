const WhoWeAre = () => {
  return (
    <div className="flex flex-col gap-16 max-w-4xl mx-auto px-4">
      {/* Who we are (Image Left) */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
        {/* Decorative circle */}
        <span className="absolute left-0 top-0 w-20 h-20 rounded-full bg-purple-100 opacity-40 -z-10"></span>
        <iframe
          className="w-full md:w-1/2 h-50"
          src="https://www.youtube.com/embed/RzuO3gVHGIQ?si=t-r5ogh-Fl7eppAN"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <div className="flex-1 text-black text-left relative">
          <h2 className="relative text-3xl font-bold mb-3">
            <span className="absolute -left-6 -top-10 w-100 h-100 rounded-full bg-pink-100 opacity-50 -z-10"></span>
            Who We Are
          </h2>
          <p className="text-lg">
            We are a passionate team dedicated to fostering creativity and
            innovation through animation. Our festival brings together students,
            educators, and industry professionals to celebrate the art of
            animation and inspire the next generation of creators.
          </p>
        </div>
      </section>
    </div>
  );
}

export default WhoWeAre;