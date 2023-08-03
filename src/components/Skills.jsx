import React from "react";

const Skills = () => {
  const skills = [
    {
      logo: "logo-html5",
      level: "Expert",
      count: 87,
    },
    {
      logo: "logo-css3",
      level: "Advance",
      count: 83,
    },
    {
      logo: "logo-javascript",
      level: "Intermediate",
      count: 79,
    },
    {
      logo: "logo-react",
      level: "Expert",
      count: 86,
    },
    {
      logo: "logo-nodejs",
      level: "Intermediate",
      count: 79,
    },
    {
      logo: "logo-vue",
      level: "Beginner",
      count: 57,
    },
    {
      logo: "logo-firebase",
      level: "Beginner",
      count: 54,
    },
    {
      logo: "logo-docker",
      level: "Intermediate",
      count: 62,
    },
    {
      logo: "logo-microsoft",
      level: "Advance",
      count: 74,
    },
    {
      logo: "logo-apple",
      level: "Expect",
      count: 59,
    },
    {
      logo: "cloud-outline",
      level: "Beginner",
      count: 47,
    },
    {
      logo: "logo-github",
      level: "Advance",
      count: 83,
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
      <br/>
        <div className="flex items-center justify-center mt-12 gap-5 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <ion-icon name={skill.logo}></ion-icon>
                </div>
              </div>
              <p className="text-xl mt-3">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
