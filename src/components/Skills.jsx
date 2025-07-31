import {
  Code2,
  Database,
  BarChart2,
  FileSpreadsheet,
  Cpu,
  LineChart,
  PieChart,
  Brain,
} from "lucide-react";

const skills = [
  { icon: <Code2 size={28} />, name: "Python" },
  { icon: <Database size={28} />, name: "SQL" },
  { icon: <BarChart2 size={28} />, name: "Power BI" },
  { icon: <FileSpreadsheet size={28} />, name: "Excel" },
  { icon: <Cpu size={28} />, name: "NumPy" },
  { icon: <LineChart size={28} />, name: "Pandas" },
  { icon: <PieChart size={28} />, name: "Matplotlib" },
  { icon: <Brain size={28} />, name: "Machine Learning" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#f4f0fe] dark:bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          My technical toolkit for transforming data into actionable insights
        </p>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-14">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 flex flex-col items-center shadow-md hover:shadow-lg transition"
            >
              <div className="bg-purple-100 dark:bg-purple-700 text-purple-600 dark:text-white p-3 rounded-full mb-4">
                {skill.icon}
              </div>
              <p className="font-semibold text-gray-800 dark:text-white">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-indigo-600 mb-2">Programming & Analysis</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Python, SQL, NumPy, Pandas for data manipulation and analysis
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-indigo-600 mb-2">Visualization & BI</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Power BI, Excel, Matplotlib for creating insightful dashboards
            </p>
          </div>
          <div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow text-center">
            <h4 className="font-bold text-indigo-600 mb-2">Machine Learning</h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Developing predictive models for real-world applications
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
