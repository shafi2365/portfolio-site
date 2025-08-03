import { Github, Rocket } from "lucide-react";

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-[#f4f0fe] dark:bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Featured Project
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Real-world applications of machine learning in healthcare
          </p>
        </div>

        {/* Project Card */}
        <div className="bg-white dark:bg-neutral-800 rounded-3xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
          {/* Left */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex-1 p-10 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-6">💜</div>
            <h3 className="text-2xl font-semibold">Heart Disease Prediction</h3>
            <p className="mt-2 text-sm text-purple-200">
              ML-Powered Healthcare Solution
            </p>
            <div className="h-1 w-10 bg-white mt-3 rounded-full"></div>
          </div>

          {/* Right */}
          <div className="flex-1 p-8 lg:p-10">
            <h4 className="text-xl font-semibold mb-3 text-black dark:text-white">
              💡 Heart Disease Prediction System
            </h4>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              A machine learning web app that predicts the likelihood of heart disease.
              It enables early diagnosis and enhances medical decision-making with real-time data analysis.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-neutral-700 text-center p-4 rounded-xl">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">95%+</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Prediction Accuracy</p>
              </div>
              <div className="bg-gray-100 dark:bg-neutral-700 text-center p-4 rounded-xl">
                <p className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Real-time</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">Risk Assessment</p>
              </div>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h5 className="font-semibold mb-2 text-black dark:text-white">🚀 Key Features:</h5>
              <ul className="list-disc ml-5 text-gray-600 dark:text-gray-300 space-y-1 text-sm">
                <li>Secure login and intuitive patient data entry</li>
                <li>Advanced ML model integration with real-world datasets</li>
                <li>Interactive dashboard with live prediction results</li>
                <li>Responsive UI for mobile and desktop use</li>
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h5 className="font-semibold mb-2 text-black dark:text-white">🧠 Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {["Python", "NumPy", "Pandas", "Matplotlib", "Streamlit", "Scikit-learn"].map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 dark:bg-purple-700 text-purple-700 dark:text-white text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/shafi2365/heart-disease-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                <Github size={16} />
                View Source Code
              </a>
              <a
                href="https://heart-disease-prediction-1-gm2p.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg text-sm hover:bg-red-50 dark:hover:bg-neutral-700 transition"
              >
                <Rocket size={16} />
                Live Demo <span className="text-xs ml-1"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
