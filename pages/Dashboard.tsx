import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Users, TrendingUp, Brain, Gamepad2, Star, Clock } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';
import ProgressBar from '../src/components/ProgressBar';
import ChatBot from '../src/components/ChatBot';

export default function Dashboard() {
  const [userName, setUserName] = useState('Student');

  useEffect(() => {
    const name = localStorage.getItem('userName') || 'Student';
    setUserName(name);
  }, []);

  const stats = [
    { icon: Trophy, label: 'Career Score', value: '78%', color: 'from-yellow-500 to-orange-500' },
    { icon: Target, label: 'Skills Mastered', value: '12/20', color: 'from-blue-500 to-purple-600' },
    { icon: Users, label: 'Community Rank', value: '#247', color: 'from-green-500 to-teal-500' },
    { icon: TrendingUp, label: 'Weekly Progress', value: '+15%', color: 'from-pink-500 to-rose-500' }
  ];

  const recentActivities = [
    { icon: Brain, title: 'Completed JavaScript Fundamentals', time: '2 hours ago', type: 'skill' },
    { icon: Gamepad2, title: 'Achieved Level 5 in Coding Arena', time: '1 day ago', type: 'game' },
    { icon: Users, title: 'Joined React Developers Community', time: '2 days ago', type: 'community' },
    { icon: Target, title: 'Updated Career Roadmap', time: '3 days ago', type: 'roadmap' }
  ];

  const skillProgress = [
    { name: 'JavaScript', progress: 85 },
    { name: 'React', progress: 65 },
    { name: 'Node.js', progress: 45 },
    { name: 'Python', progress: 70 }
  ];

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
              Welcome back, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{userName}</span>! 👋
            </h1>
            <p className="text-muted-foreground">Here's your career development progress</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-blue-500" />
                  Skill Progress
                </h2>
                <div className="space-y-6">
                  {skillProgress.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ProgressBar
                        progress={skill.progress}
                        label={skill.name}
                      />
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>

            <div>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-purple-500" />
                  Recent Activity
                </h2>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-accent/50 transition-colors"
                    >
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <activity.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-yellow-500" />
                  Quick Actions
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-all duration-200 text-left">
                    <Brain className="w-6 h-6 text-blue-500 mb-2" />
                    <p className="font-medium">Take Assessment</p>
                    <p className="text-xs text-muted-foreground">Analyze your skills</p>
                  </button>
                  <button className="p-4 bg-gradient-to-br from-purple-500/10 to-pink-600/10 border border-purple-500/20 rounded-lg hover:bg-purple-500/20 transition-all duration-200 text-left">
                    <Gamepad2 className="w-6 h-6 text-purple-500 mb-2" />
                    <p className="font-medium">Play Arcade</p>
                    <p className="text-xs text-muted-foreground">Learn through gaming</p>
                  </button>
                  <button className="p-4 bg-gradient-to-br from-green-500/10 to-teal-600/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-all duration-200 text-left">
                    <Target className="w-6 h-6 text-green-500 mb-2" />
                    <p className="font-medium">View Roadmap</p>
                    <p className="text-xs text-muted-foreground">Track your progress</p>
                  </button>
                  <button className="p-4 bg-gradient-to-br from-orange-500/10 to-red-600/10 border border-orange-500/20 rounded-lg hover:bg-orange-500/20 transition-all duration-200 text-left">
                    <Users className="w-6 h-6 text-orange-500 mb-2" />
                    <p className="font-medium">Join Community</p>
                    <p className="text-xs text-muted-foreground">Connect with peers</p>
                  </button>
                </div>
              </GlassCard>
            </div>

            <div>
              <ChatBot />
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}