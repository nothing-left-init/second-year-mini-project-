import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Clock, Star, ArrowRight, Target } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';
import ProgressBar from '../src/components/ProgressBar';

export default function Roadmap() {
  const [selectedPath, setSelectedPath] = useState('fullstack');

  const careerPaths = [
    { id: 'fullstack', name: 'Full-Stack Developer', progress: 65 },
    { id: 'frontend', name: 'Frontend Developer', progress: 80 },
    { id: 'backend', name: 'Backend Developer', progress: 45 },
    { id: 'data', name: 'Data Scientist', progress: 30 }
  ];

  const roadmapData = {
    fullstack: {
      title: 'Full-Stack Developer Roadmap',
      description: 'Master both frontend and backend technologies',
      totalSteps: 15,
      completedSteps: 10,
      estimatedTime: '8-12 months',
      stages: [
        {
          id: 1,
          title: 'Foundation',
          status: 'completed',
          duration: '2 months',
          skills: [
            { name: 'HTML & CSS', completed: true },
            { name: 'JavaScript Basics', completed: true },
            { name: 'Git & Version Control', completed: true }
          ]
        },
        {
          id: 2,
          title: 'Frontend Development',
          status: 'completed',
          duration: '3 months',
          skills: [
            { name: 'React.js', completed: true },
            { name: 'State Management', completed: true },
            { name: 'Responsive Design', completed: true }
          ]
        },
        {
          id: 3,
          title: 'Backend Development',
          status: 'current',
          duration: '3 months',
          skills: [
            { name: 'Node.js', completed: true },
            { name: 'Express.js', completed: false },
            { name: 'Database Design', completed: false }
          ]
        },
        {
          id: 4,
          title: 'Advanced Topics',
          status: 'locked',
          duration: '2 months',
          skills: [
            { name: 'Authentication', completed: false },
            { name: 'API Design', completed: false },
            { name: 'Testing', completed: false }
          ]
        },
        {
          id: 5,
          title: 'Deployment & DevOps',
          status: 'locked',
          duration: '2 months',
          skills: [
            { name: 'Cloud Platforms', completed: false },
            { name: 'CI/CD', completed: false },
            { name: 'Monitoring', completed: false }
          ]
        }
      ]
    },
    frontend: {
      title: 'Frontend Developer Roadmap',
      description: 'Master modern user interface development',
      totalSteps: 12,
      completedSteps: 8,
      estimatedTime: '6-8 months',
      stages: [
        {
          id: 1,
          title: 'HTML & CSS Mastery',
          status: 'completed',
          duration: '1.5 months',
          skills: [
            { name: 'Semantic HTML', completed: true },
            { name: 'Advanced CSS/SASS', completed: true },
            { name: 'Responsive Layouts', completed: true }
          ]
        },
        {
          id: 2,
          title: 'JavaScript In-Depth',
          status: 'completed',
          duration: '2 months',
          skills: [
            { name: 'ES6+ Features', completed: true },
            { name: 'Async JS', completed: true },
            { name: 'DOM Manipulation', completed: true }
          ]
        },
        {
          id: 3,
          title: 'Frameworks',
          status: 'current',
          duration: '3 months',
          skills: [
            { name: 'React/Vue', completed: false },
            { name: 'State Management', completed: false },
            { name: 'Build Tools', completed: false }
          ]
        }
      ]
    },
    backend: {
      title: 'Backend Developer Roadmap',
      description: 'Build robust and scalable server-side systems',
      totalSteps: 14,
      completedSteps: 5,
      estimatedTime: '6-9 months',
      stages: [
        {
          id: 1,
          title: 'Server Basics',
          status: 'completed',
          duration: '1 month',
          skills: [
            { name: 'HTTP/HTTPS', completed: true },
            { name: 'Linux Basics', completed: true },
            { name: 'Web Servers', completed: true }
          ]
        },
        {
          id: 2,
          title: 'Language Mastery',
          status: 'current',
          duration: '2 months',
          skills: [
            { name: 'Node.js/Python', completed: true },
            { name: 'Data Structures', completed: false },
            { name: 'Algorithms', completed: false }
          ]
        },
        {
          id: 3,
          title: 'Databases',
          status: 'locked',
          duration: '2 months',
          skills: [
            { name: 'SQL', completed: false },
            { name: 'NoSQL', completed: false },
            { name: 'ORM', completed: false }
          ]
        }
      ]
    },
    data: {
      title: 'Data Scientist Roadmap',
      description: 'Analyze data and build machine learning models',
      totalSteps: 16,
      completedSteps: 4,
      estimatedTime: '10-14 months',
      stages: [
        {
          id: 1,
          title: 'Mathematics & Stats',
          status: 'completed',
          duration: '2 months',
          skills: [
            { name: 'Linear Algebra', completed: true },
            { name: 'Calculus', completed: true },
            { name: 'Statistics', completed: true }
          ]
        },
        {
          id: 2,
          title: 'Programming',
          status: 'current',
          duration: '2 months',
          skills: [
            { name: 'Python', completed: true },
            { name: 'NumPy/Pandas', completed: false },
            { name: 'Data Visualization', completed: false }
          ]
        },
        {
          id: 3,
          title: 'Machine Learning',
          status: 'locked',
          duration: '4 months',
          skills: [
            { name: 'Scikit-learn', completed: false },
            { name: 'Deep Learning', completed: false },
            { name: 'Model Deployment', completed: false }
          ]
        }
      ]
    }
  };

  const currentRoadmap = roadmapData[selectedPath as keyof typeof roadmapData];

  const getStageColor = (status: string) => {
    switch (status) {
      case 'completed': return 'from-green-500 to-emerald-500';
      case 'current': return 'from-blue-500 to-purple-600';
      case 'locked': return 'from-gray-400 to-gray-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getStageIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-6 h-6 text-white" />;
      case 'current': return <Clock className="w-6 h-6 text-white" />;
      case 'locked': return <Circle className="w-6 h-6 text-white" />;
      default: return <Circle className="w-6 h-6 text-white" />;
    }
  };

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
              Career <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Roadmap</span>
            </h1>
            <p className="text-muted-foreground">Your personalized learning path to career success</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            {careerPaths.map((path) => (
              <motion.div
                key={path.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <GlassCard
                  className={`cursor-pointer transition-all duration-200 ${selectedPath === path.id
                    ? 'ring-2 ring-blue-500 bg-blue-500/10'
                    : 'hover:bg-accent/50'
                    }`}
                  onClick={() => setSelectedPath(path.id)}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${selectedPath === path.id ? 'from-blue-500 to-purple-600' : 'from-gray-400 to-gray-500'
                      } rounded-xl flex items-center justify-center`}>
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{path.name}</h3>
                    <ProgressBar progress={path.progress} showLabel={false} className="mb-2" />
                    <p className="text-sm text-muted-foreground">{path.progress}% Complete</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <GlassCard className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">{currentRoadmap.title}</h2>
                <p className="text-muted-foreground">{currentRoadmap.description}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  <span className="font-semibold">{currentRoadmap.completedSteps}/{currentRoadmap.totalSteps} Steps</span>
                </div>
                <p className="text-sm text-muted-foreground">Est. {currentRoadmap.estimatedTime}</p>
              </div>
            </div>

            <ProgressBar
              progress={(currentRoadmap.completedSteps / currentRoadmap.totalSteps) * 100}
              label="Overall Progress"
              className="mb-8"
            />

            <div className="space-y-6">
              {currentRoadmap.stages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < currentRoadmap.stages.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-16 bg-border" />
                  )}

                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getStageColor(stage.status)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {getStageIcon(stage.status)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold">{stage.title}</h3>
                        <span className="text-sm text-muted-foreground">{stage.duration}</span>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {stage.skills.map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className={`p-3 rounded-lg border transition-all duration-200 ${skill.completed
                              ? 'bg-green-500/10 border-green-500/20 text-green-700 dark:text-green-400'
                              : stage.status === 'current'
                                ? 'bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-400'
                                : 'bg-muted border-border text-muted-foreground'
                              }`}
                          >
                            <div className="flex items-center space-x-2">
                              {skill.completed ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : stage.status === 'current' ? (
                                <Clock className="w-4 h-4" />
                              ) : (
                                <Circle className="w-4 h-4" />
                              )}
                              <span className="text-sm font-medium">{skill.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {stage.status === 'current' && (
                        <button className="mt-4 inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                          Continue Learning
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
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