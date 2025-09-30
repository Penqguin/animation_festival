const Impact = () => {
  return (
    <>
      {/* Impact (Image Left) */}
      <section className="flex flex-col md:flex-row items-center md:items-start gap-8 relative">
        {/* Decorative circle */}
        <span className="absolute left-10 bottom-0 w-14 h-14 rounded-full bg-green-100 opacity-40 -z-10"></span>
        <img
          src={"/assets/react.svg"}
          alt="Impact"
          className="w-1/2 rounded-lg object-cover"
        />
        <div className="flex-1 text-black text-left relative">
          <h2 className="relative text-3xl font-bold mb-3">
            <span className="absolute -left-4 -top-2 w-8 h-8 rounded-full bg-yellow-100 opacity-40 -z-10"></span>
            Impact
          </h2>
          <p className="text-lg">
            Our programs have reached hundreds of students across the region,
            empowering them with new skills and confidence. Many participants
            have gone on to pursue further studies and careers in animation and
            digital media.
          </p>
        </div>
      </section>
    </>
  );
}

export default Impact;