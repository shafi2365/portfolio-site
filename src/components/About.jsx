import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 bg-[#f4f0fe] dark:bg-[#1e1e1e] text-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12">
        About Me
        <div className="h-1 w-16 bg-indigo-500 mx-auto mt-2 rounded-full"></div>
      </h2>

      <div className="max-w-5xl mx-auto bg-white dark:bg-[#2b2b2b] shadow-xl rounded-3xl p-10">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="text-indigo-500 text-3xl leading-none">•</span> About Mohammed Shafi Ganie
        </h3>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hi, I’m <span className="font-semibold text-indigo-600 bg-indigo-100 px-1 rounded">Mohammed Shafi Ganie</span> — a passionate and curious B.Tech Computer Science student with a strong foundation in mathematics and programming. I specialize in
          <span className="text-indigo-500 font-medium"> data analytics </span>
          and love transforming raw data into meaningful insights.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          My technical toolkit includes
          <span className="ml-2 inline-flex flex-wrap gap-2">
            {["Python", "SQL", "Excel", "Power BI"].map((tool) => (
              <span
                key={tool}
                className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-0.5 rounded"
              >
                {tool}
              </span>
            ))}
          </span>
          . I’ve used these tools to build dashboards, explore datasets, and develop machine learning models—particularly for real-world applications in healthcare.
        </p>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Beyond coding, I actively follow AI trends, contribute to open-source, and enjoy working on collaborative tech projects. I’m driven by innovation and the opportunity to make a meaningful impact through technology.
        </p>

        <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 text-sm bg-indigo-50 dark:bg-indigo-900 dark:text-indigo-100 rounded-lg mb-6">
          <strong>
            My current focus is on developing a solid foundation in key technologies and actively engaging in learning how to collect, clean, and visualize data.
          </strong>{" "}
          My growing knowledge in this field is driven by a desire to apply analytical thinking and creativity to solve meaningful problems—especially in areas like{" "}
          <span className="font-bold text-indigo-700 dark:text-indigo-300">healthcare and public well-being</span>.
        </blockquote>

        {/* Highlight Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-10">
          <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 p-6 rounded-xl shadow">
            <p className="text-3xl font-bold">3+</p>
            <p className="text-sm mt-1">Years of Learning</p>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 p-6 rounded-xl shadow">
            <p className="text-3xl font-bold">8+</p>
            <p className="text-sm mt-1">Technical Skills</p>
          </div>
          <div className="bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-100 p-6 rounded-xl shadow">
            <p className="text-3xl font-bold">1</p>
            <p className="text-sm mt-1">Major Project</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
