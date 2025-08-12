import { motion } from 'framer-motion';
import { Brain, Smartphone, Cpu, Globe, Zap, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Automation Tools',
      description: 'Custom AI solutions that automate tasks, extract insights, and power intelligent applications using GPT, Claude, and DeepSeek.',
      features: ['LLM Integration', 'Data Processing', 'Prompt Engineering', 'Rapid Prototyping'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'React Native Apps',
      description: 'Modern, production-ready mobile applications for both Android and iOS with seamless user experiences.',
      features: ['Cross-platform', 'Native Performance', 'Modern UI/UX', 'App Store Ready'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Connected device solutions that bridge the physical and digital worlds with smart automation.',
      features: ['Hardware Integration', 'Real-time Data', 'Cloud Connectivity', 'Smart Automation'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'High-performance web applications with modern frameworks and cutting-edge technologies.',
      features: ['React/Next.js', 'Responsive Design', 'SEO Optimized', 'Fast Performance'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Database,
      title: 'Data Processing',
      description: 'Transform raw data into actionable insights with automated processing and intelligent analysis.',
      features: ['PDF Processing', 'Excel Automation', 'Web Scraping', 'Report Generation'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Rapid Prototyping',
      description: 'Quick turnaround from concept to working prototype using modern tools and frameworks.',
      features: ['Fast Development', 'Interactive UIs', 'Streamlit Apps', 'MVP Creation'],
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions from AI automation to mobile development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
              }}
              className="glass-card rounded-3xl p-8 hover:glow-primary transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center gap-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-neon rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
          >
            <Zap size={20} />
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;