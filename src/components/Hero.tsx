import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [currentService, setCurrentService] = useState(0);
  const services = ['AI Tools', 'React Native Apps', 'IoT Solutions', 'Web Development'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <ParticleBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="gradient-text">Devscope</span>
              <br />
              <span className="text-white">AI & App Development</span>
              <br />
              <span className="text-gray-400 text-3xl md:text-4xl">Studio</span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-gray-300 h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.span
                key={currentService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="gradient-text font-semibold"
              >
                {services[currentService]}
              </motion.span>
            </motion.div>

            <motion.p
              className="text-lg text-gray-400 max-w-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Transforming ideas into intelligent, user-centric applications. 
              I bridge the gap between powerful AI and intuitive interfaces.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary to-neon rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 glass rounded-full text-white font-semibold flex items-center justify-center gap-2 hover:glow-primary transition-all duration-300"
              >
                <Play size={20} />
                Hire Me
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Gradient Mesh */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary via-neon to-magenta rounded-full opacity-20 blur-3xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-4 bg-gradient-to-l from-magenta via-primary to-neon rounded-full opacity-30 blur-2xl"
              />
              <motion.div
                animate={{
                  y: [-20, 20, -20],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-8 glass rounded-3xl flex items-center justify-center"
              >
                <div className="text-6xl gradient-text font-bold">AI</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;