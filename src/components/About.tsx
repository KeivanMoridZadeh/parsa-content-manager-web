import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Zap } from 'lucide-react';

const stats = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: "500+",
    label: "Articles Written",
    description: "Creating engaging content that resonates"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "50+",
    label: "Happy Clients",
    description: "Delivering results that matter"
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "15+",
    label: "Industry Awards",
    description: "Recognized excellence in content"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    value: "8+",
    label: "Years Experience",
    description: "Deep industry expertise"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
                alt="Professional headshot"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-500 rounded-full opacity-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full opacity-10" />
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-blue-500">Me</span>
              </h2>
              <p className="text-xl text-gray-600">
                A passionate content strategist with 8+ years of experience in crafting compelling narratives and driving business growth through strategic content.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                I specialize in developing comprehensive content strategies that align with business objectives and resonate with target audiences. My approach combines data-driven insights with creative storytelling to deliver measurable results.
              </p>
              <p className="text-gray-600">
                Having worked with startups and established brands across various industries, I bring a wealth of experience in content creation, SEO optimization, and digital marketing strategies.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
