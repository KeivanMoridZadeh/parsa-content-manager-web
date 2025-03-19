import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-6 h-6" />,
    value: "50+",
    label: "Happy Clients",
    description: "Delivering results that matter",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    value: "3+",
    label: "Years Experience",
    description: "Growing expertise in content creation",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -ml-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative -ml-2"
          >
            <div className="w-full max-w-md mx-auto">
              <img
                src="/assets/about.jpg"
                alt="Professional workspace"
                className="w-full h-auto rounded-full"
              />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-blue-500">Me</span>
              </h2>
              <p className="text-xl text-gray-600">
                A passionate content creator specializing in script writing,
                video editing, and social media management.
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg text-gray-600">
                I specialize in developing engaging content that connects with
                audiences and delivers impactful results. My approach combines
                creative storytelling with technical expertise to bring your
                vision to life.
              </p>
              <p className="text-lg text-gray-600">
                From script writing to final delivery, I ensure every project
                receives the attention to detail it deserves, creating content
                that stands out in today's digital landscape.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-lg mb-3">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
