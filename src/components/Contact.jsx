import {
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f4f0fe] dark:bg-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Contact</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Let's connect and explore opportunities in data analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Get In Touch</h3>

            <div className="space-y-6">
              <ContactCard
                icon={<MapPin className="text-rose-500" size={24} />}
                title="Address"
                value="Baramulla, Jammu And Kashmir, India"
              />
              <ContactCard
                icon={<Phone className="text-green-500" size={24} />}
                title="Contact Number"
                value="+91 705 1477 648"
              />
              <ContactCard
                icon={<Mail className="text-indigo-500" size={24} />}
                title="Email Address"
                value="mohdshafi2373@gmail.com"
              />
              <ContactCard
                icon={<Github className="text-gray-800 dark:text-gray-100" size={24} />}
                title="GitHub"
                value="github.com/shafi2365"
                link="https://github.com/shafi2365"
              />
              <ContactCard
                icon={<Linkedin className="text-blue-600" size={24} />}
                title="LinkedIn"
                value="linkedin.com/in/mohammad-shafi-ganie-bb318b2bb"
                link="https://linkedin.com/in/mohammad-shafi-ganie-bb318b2bb"
              />
            </div>
          </div>

          {/* Right Column (optional content or form) */}
          <div className="hidden md:block">
            {/* You can add a contact form or image later here */}
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable contact card component
function ContactCard({ icon, title, value, link }) {
  return (
    <div className="flex items-center gap-4 p-5 bg-white dark:bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg transition">
      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-700 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{title}</h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {value}
          </a>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">{value}</p>
        )}
      </div>
    </div>
  );
}
