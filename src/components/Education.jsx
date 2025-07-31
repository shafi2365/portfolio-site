import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { HiOutlineCalendar } from 'react-icons/hi';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#f4f0fe] dark:bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Building a strong foundation in computer science and mathematics
        </p>

        {/* Education Cards */}
        <div className="flex flex-col gap-6">
          {/* B.Tech */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-left sm:text-left">
              <div className="flex items-start sm:items-center gap-4">
                <div className="text-[#6c55ff] text-2xl mt-1"><FaGraduationCap /></div>
                <div>
                  <h3 className="font-bold text-lg text-[#6c55ff]">B.Tech in Computer Science</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Guru Kashi University, Talwandi, Bathinda, Punjab
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2 mt-4 sm:mt-0">
                <HiOutlineCalendar /> Ongoing
                <span className="ml-2 bg-[#eee6ff] text-[#6c55ff] px-2 py-0.5 rounded-full text-xs">Current</span>
              </div>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">
              Focusing on data analytics, machine learning, and software development.
            </p>
          </div>

          {/* Higher Secondary */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-left sm:text-left">
              <div className="flex items-start sm:items-center gap-4">
                <div className="text-[#6c55ff] text-2xl mt-1"><FaGraduationCap /></div>
                <div>
                  <h3 className="font-bold text-lg text-[#6c55ff]">Higher Secondary School</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    Wagoora Baramulla, Jammu and Kashmir
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-300 flex items-center gap-2 mt-4 sm:mt-0">
                <HiOutlineCalendar /> 2020–2022
                <span className="ml-2 bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs">Completed</span>
              </div>
            </div>
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">
              Strong foundation in mathematics and science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
