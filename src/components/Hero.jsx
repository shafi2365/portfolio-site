import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaDownload,
} from 'react-icons/fa';
import heroImg from '../assets/profile.jpg'; // Your profile image

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 py-16 bg-[#ede9fe] dark:bg-[#181818]"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Profile Image */}
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-[6px] border-[#a488ff] shadow-xl shrink-0">
          <img src={heroImg} alt="Profile" className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#6c55ff] leading-tight">
            Mohammed <br /> Shafi Ganie
          </h1>
          <h2 className="text-xl md:text-2xl font-bold mt-2 text-black dark:text-white">
            Data Analytics <span className="text-[#6c55ff]">Enthusiast</span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl">
            Passionate Computer Science student transforming raw data into meaningful insights.
            Exploring how data can drive smarter decisions and contribute to innovation across industries.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-4 mt-4 text-sm text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt /> Baramulla, J&K, India
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> +91 7051477648
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> mohdshafi237311@gmail.com
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
            <a
              href="/resume.docx"
              download
              className="bg-[#6c55ff] text-white py-2 px-4 rounded hover:bg-[#5843d2] flex items-center gap-2"
            >
              <FaDownload /> Download Resume
            </a>
            <a
              href="https://github.com/shafi2365"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 py-2 px-4 rounded hover:shadow flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/mohammad-shafi-ganie-bb318b2bb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 py-2 px-4 rounded hover:shadow flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* Enhanced Quote Box */}
        <div className="relative bg-gradient-to-br from-[#f0e9ff] to-[#e9e6ff] dark:from-[#29213f] dark:to-[#1e1b2e] p-6 rounded-2xl shadow-xl max-w-sm text-center mt-10 md:mt-0 border border-purple-300 dark:border-purple-700">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#1e1e1e] border-4 border-purple-400 w-10 h-10 flex items-center justify-center rounded-full shadow-md text-2xl text-purple-600 dark:text-purple-300">
            “
          </div>
          <p className="text-gray-800 dark:text-gray-200 text-sm mt-6 leading-relaxed font-medium">
            Success in data science isn't just about knowing the tools — it's about having the
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> curiosity </span>
            to ask the right questions and the
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold"> courage </span>
            to find the answers.
          </p>
          <div className="w-10 h-1 bg-indigo-500 mt-4 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
