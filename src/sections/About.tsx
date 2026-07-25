function About() {
    const skills = [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "WordPress",
      "Zoho CRM",
      "Google Ads",
      "Meta Ads",
    ];
  
    return (
      <section
        id="about"
        className="bg-[#151515] px-6 py-24 text-white lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <p className="mb-3 font-medium uppercase tracking-widest text-orange-500">
              Get to know me
            </p>
  
            <h2 className="text-4xl font-bold sm:text-5xl">
              About <span className="text-orange-500">Me</span>
            </h2>
  
            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-orange-500" />
          </div>
  
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-lg border-2 border-orange-500" />
  
              <div className="relative overflow-hidden rounded-lg bg-[#1d1d1d]">
                <img
                  src="/images/profile.jpeg"
                  alt="Mark Pobre"
                  className="h-[500px] w-full object-cover object-top grayscale"
                />
              </div>
            </div>
  
            <div>
              <p className="mb-3 text-lg font-medium text-orange-500">
                Frontend Developer and Digital Marketing Specialist
              </p>
  
              <h3 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl">
                I create websites and digital systems that support business
                growth.
              </h3>
  
              <div className="space-y-5 text-lg leading-8 text-slate-400">
                <p>
                  I have experience supporting website management, digital
                  marketing, online advertising, CRM systems, social media and
                  business workflows.
                </p>
  
                <p>
                  I enjoy creating responsive and user-friendly websites that
                  help businesses improve their online presence and make their
                  processes easier to manage.
                </p>
  
                <p>
                  I am continuously improving my skills in React, TypeScript,
                  JavaScript and modern web application development while
                  applying my experience in digital marketing and business
                  systems.
                </p>
              </div>
  
              <div className="mt-8 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-slate-700 bg-[#1d1d1d] px-4 py-2 text-sm text-slate-300 transition hover:border-orange-500 hover:text-orange-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
  
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-md bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-400"
                >
                  View My Work
                </a>
  
                <a
                  href="#contact"
                  className="rounded-md border border-slate-600 px-7 py-3 font-semibold text-slate-300 transition hover:border-orange-500 hover:text-orange-500"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default About;