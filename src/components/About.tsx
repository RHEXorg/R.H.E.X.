import { motion } from 'framer-motion';
import { Brain, Smartphone, Cpu, Globe, Zap, Code } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React Native', icon: Smartphone, color: 'text-cyan-400' },
    { name: 'Python', icon: Code, color: 'text-green-400' },
    { name: 'JavaScript', icon: Globe, color: 'text-yellow-400' },
    { name: 'AI/ML', icon: Brain, color: 'text-purple-400' },
    { name: 'IoT', icon: Cpu, color: 'text-blue-400' },
    { name: 'C++', icon: Zap, color: 'text-red-400' },
  ];

  const stats = [
    { number: '8+', label: 'AI Tools Built' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Devscope</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm Uzair, the founder of Devscope - an AI and development studio that transforms 
                  complex ideas into intelligent, user-centric applications. My passion lies in 
                  bridging the gap between powerful AI technology and intuitive interfaces.
                </p>
                <p>
                  With expertise spanning AI automation, React Native development, and IoT solutions, 
                  I've built 8+ AI tools in just 7 days and delivered 50+ successful projects. 
                  I specialize in rapid prototyping and turning concepts into production-ready solutions.
                </p>
                <p>
                  Whether you need a custom AI tool, a mobile app, or an innovative IoT solution, 
                  I bring the technical expertise and creative vision to make it happen.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center">Core Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      rotateY: 10,
                    }}
                    className="glass-card rounded-2xl p-6 text-center hover:glow-primary transition-all duration-300 group"
                  >
                    <skill.icon className={`w-12 h-12 mx-auto mb-4 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h4 className="font-semibold text-white group-hover:gradient-text transition-all duration-300">
                      {skill.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-bold gradient-text mb-2">Fun Fact</h4>
              <p className="text-gray-300">
                Built 8+ AI tools in 7 days — and still slept like a baby
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;