import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  FileEdit,
  BarChart,
  MessageSquare,
  Target,
  CheckCircle2,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Clock,
  Calendar
} from 'lucide-react';
import ContactForm from './components/ContactForm';
import { initEmailJS } from './config/emailjs';

const services = [
  {
    icon: <FileEdit className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Developing comprehensive content strategies that align with business goals. Achieved 150% increase in organic traffic through strategic content planning.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Content Creation",
    description: "Creating engaging, SEO-optimized content that resonates with target audiences. Produced viral content reaching 1M+ views across platforms.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Digital Marketing & SEO",
    description: "Implementing data-driven SEO strategies that boost visibility. Achieved 200% increase in search rankings for key terms.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Project Management",
    description: "Managing content teams and projects from conception to delivery. Successfully led 50+ content campaigns for major brands.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
  }
];

function App() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    initEmailJS();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y,
            backgroundImage: "url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.3)"
          }}
        />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Elevating Brands Through
              <span className="text-gradient"> Strategic Content</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Content strategist and digital storyteller helping businesses connect with their audience through compelling narratives and data-driven strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-colors"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive content management solutions that drive engagement and deliver results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {[1, 2, 3].map((_, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2" />
                        Key achievement or feature
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-500 opacity-[0.03] pointer-events-none" />
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Left Column - 40% */}
            <div className="md:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-display font-bold mb-4">
                  Let's Create <span className="text-gradient">Together</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Transform your digital presence with strategic content that engages, converts, and drives results. Let's bring your vision to life.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-700">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <a href="mailto:hello@example.com" className="hover:text-primary-600 transition-colors">
                      hello@example.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-700">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <span>New York, NY</span>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-gray-700">
                    <Clock className="h-5 w-5 text-primary-600" />
                    <span>EST (UTC-5)</span>
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => window.open('https://calendly.com')}
                    className="inline-flex items-center px-6 py-3 bg-white border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-colors"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-gray-600 mb-4">Connect with me</p>
                  <div className="flex space-x-6">
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-primary-600 transition-colors transform hover:scale-110"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Column - 60% */}
            <div className="md:col-span-7 bg-white rounded-2xl shadow-lg p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Your Content Pro. All rights reserved.
            </div>
            <div className="flex justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;