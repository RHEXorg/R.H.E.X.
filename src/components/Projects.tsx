import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  language: string;
  stargazers_count: number;
  topics: string[];
}

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Qrf2/repos?sort=updated&per_page=6');
        const data = await response.json();
        setRepos(data.filter((repo: Repository) => !repo.name.includes('Qrf2')));
      } catch (error) {
        console.error('Error fetching repositories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-500',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      'C++': 'bg-purple-500',
      Java: 'bg-red-500',
      React: 'bg-cyan-500',
      'React Native': 'bg-cyan-400',
      default: 'bg-gray-500'
    };
    return colors[tech] || colors.default;
  };

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-700 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my latest work in AI automation, mobile development, and innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="glass-card rounded-3xl p-6 hover:glow-primary transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-neon rounded-full"></div>
                  <h3 className="text-xl font-semibold text-white group-hover:gradient-text transition-all duration-300">
                    {repo.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-gray-400">
                  <Star size={16} />
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {repo.description || 'No description available'}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {repo.language && (
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTechColor(repo.language)}`}>
                    {repo.language}
                  </span>
                )}
                {repo.topics.slice(0, 2).map((topic) => (
                  <span key={topic} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-gray-300">
                    {topic}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <motion.a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium text-white hover:glow-neon transition-all duration-300"
                >
                  <Github size={16} />
                  Code
                </motion.a>
                {repo.homepage && (
                  <motion.a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-neon rounded-full text-sm font-medium text-white hover:shadow-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    Live
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Qrf2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 glass rounded-full text-white font-semibold hover:glow-primary transition-all duration-300"
          >
            <Github size={20} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;