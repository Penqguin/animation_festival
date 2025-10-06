const OurGoals = () => {
  return (
    <>
      {/* Our Goals (Image Right) */}
      <section className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 relative">
        {/* Decorative circle */}
        <span className="absolute right-0 top-4 w-16 h-16 rounded-full bg-yellow-200 opacity-40 -z-10"></span>
        <img
          src={"/assets/react.svg"}
          alt="Our Goals"
          className="w-1/2 rounded-lg object-cover"
        />
        <div className="flex-1 text-white text-left relative">
          <h2 className="relative text-3xl font-bold mb-3">
            <span className="absolute -left-4 -top-2 w-20 h-20 rounded-full bg-blue-100 opacity-40 -z-10"></span>
            Our Goals
          </h2>
          <ul className="list-inside text-lg">
            <li>Encourage creative expression in youth through animation.</li>
            <li>
              Provide educational opportunities and resources for students and
              teachers.
            </li>
            <li>Connect aspiring animators with industry professionals.</li>
            <li>Promote diversity and inclusion in the animation community.</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurGoals;
