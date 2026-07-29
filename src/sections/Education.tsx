import { BookOpen, CalendarDays, GraduationCap } from "lucide-react";

const education = [
  {
    school: "Cagayan Valley Computer & Information Technology College",
    course: "Bachelor of Science in Electronics Engineering",
    date: "January 2023 - June 2025",
  },
  {
    school: "Marikina High School",
    course: "Accountancy, Business, and Management",
    date: "June 2019 - July 2021",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-20 overflow-hidden bg-white px-6 py-24 font-sans text-black lg:px-10"
    >
      {/* Monochrome background effects */}
      <div className="pointer-events-none absolute -left-40 top-16 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-black/5 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.025),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-medium uppercase tracking-widest text-black/50">
            My academic background
          </p>

          <h2 className="text-4xl font-bold text-black sm:text-5xl">
            My Education
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-black" />
        </div>

        {/* Education cards */}
        <div className="mx-auto grid max-w-5xl gap-6">
          {education.map((item) => (
            <article
              key={item.school}
              className="group relative overflow-hidden rounded-xl border border-black/15 bg-[#f7f7f7] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-black/40 hover:shadow-xl hover:shadow-black/10"
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-black" />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {/* Education icon */}
                <div className="w-fit rounded-xl border border-black/20 bg-white p-4 text-black transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <GraduationCap size={30} />
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold leading-tight text-black">
                    {item.school}
                  </h3>

                  <div className="mt-4 flex items-start gap-3 text-lg text-black/70">
                    <BookOpen
                      size={20}
                      className="mt-1 shrink-0 text-black"
                    />

                    <span>{item.course}</span>
                  </div>

                  <div className="mt-3 flex items-center gap-3 text-black/50">
                    <CalendarDays
                      size={19}
                      className="shrink-0 text-black"
                    />

                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;