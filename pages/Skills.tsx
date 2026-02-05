import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, TrendingDown, Minus, Star, Target, Award } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';
import ProgressBar from '../src/components/ProgressBar';

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'data', name: 'Data Science' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'devops', name: 'DevOps' }
  ];

  const skills = [
    {
      id: 1,
      name: 'JavaScript',
      category: 'frontend',
      demand: 'high',
      progress: 85,
      marketTrend: 'up',
      description: 'Essential programming language for web development',
      jobs: '50,000+',
      avgSalary: '$75,000'
    },
    {
      id: 2,
      name: 'React',
      category: 'frontend',
      demand: 'high',
      progress: 65,
      marketTrend: 'up',
      description: 'Popular JavaScript library for building user interfaces',
      jobs: '35,000+',
      avgSalary: '$80,000'
    },
    {
      id: 3,
      name: 'Python',
      category: 'backend',
      demand: 'high',
      progress: 70,
      marketTrend: 'up',
      description: 'Versatile programming language for backend and data science',
      jobs: '60,000+',
      avgSalary: '$85,000'
    },
    {
      id: 4,
      name: 'Node.js',
      category: 'backend',
      demand: 'medium',
      progress: 45,
      marketTrend: 'stable',
      description: 'JavaScript runtime for server-side development',
      jobs: '25,000+',
      avgSalary: '$78,000'
    },
    {
      id: 5,
      name: 'Machine Learning',
      category: 'data',
      demand: 'high',
      progress: 30,
      marketTrend: 'up',
      description: 'AI technology for predictive analytics and automation',
      jobs: '40,000+',
      avgSalary: '$95,000'
    },
    {
      id: 6,
      name: 'Docker',
      category: 'devops',
      demand: 'medium',
      progress: 20,
      marketTrend: 'up',
      description: 'Containerization platform for application deployment',
      jobs: '20,000+',
      avgSalary: '$82,000'
    }
  ];

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
      case 'low': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return 'text-gray-500 bg-gray-500/10 border-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-500" />;
      case 'down': return <TrendingDown className="w-4 h-4 text-red-500" />;
      default: return <Minus className="w-4 h-4 text-yellow-500" />;
    }
  };

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span> & Market Analysis
            </h1>
            <p className="text-muted-foreground">Discover in-demand skills and track your progress</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Skills Mastered</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">In Progress</p>
                  <p className="text-2xl font-bold">8</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Achievements</p>
                  <p className="text-2xl font-bold">25</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </div>

          <GlassCard className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 bg-card/30 border border-border/50 rounded-xl hover:bg-card/50 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{skill.description}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTrendIcon(skill.marketTrend)}
                      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${getDemandColor(skill.demand)}`}>
                        {skill.demand} demand
                      </span>
                    </div>
                  </div>

                  <ProgressBar
                    progress={skill.progress}
                    label="Your Progress"
                    className="mb-4"
                  />

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Job Openings</p>
                      <p className="font-semibold">{skill.jobs}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Avg. Salary</p>
                      <p className="font-semibold">{skill.avgSalary}</p>
                    </div>
                  </div>

                  <button className="w-full mt-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                    Start Learning
                  </button>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}