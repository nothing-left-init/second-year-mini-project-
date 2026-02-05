import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Users, Briefcase, Star } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';

export default function Market() {
  const skillDemandData = [
    { name: 'JavaScript', demand: 95, growth: 12 },
    { name: 'Python', demand: 88, growth: 18 },
    { name: 'React', demand: 82, growth: 25 },
    { name: 'AWS', demand: 78, growth: 30 },
    { name: 'Docker', demand: 65, growth: 22 },
    { name: 'Machine Learning', demand: 72, growth: 35 }
  ];

  const salaryTrends = [
    { month: 'Jan', frontend: 75000, backend: 82000, fullstack: 88000 },
    { month: 'Feb', frontend: 76000, backend: 83000, fullstack: 89000 },
    { month: 'Mar', frontend: 77000, backend: 84000, fullstack: 90000 },
    { month: 'Apr', frontend: 78000, backend: 85000, fullstack: 91000 },
    { month: 'May', frontend: 79000, backend: 86000, fullstack: 92000 },
    { month: 'Jun', frontend: 80000, backend: 87000, fullstack: 93000 }
  ];

  const jobDistribution = [
    { name: 'Frontend', value: 35, color: '#3B82F6' },
    { name: 'Backend', value: 28, color: '#8B5CF6' },
    { name: 'Full-Stack', value: 22, color: '#10B981' },
    { name: 'DevOps', value: 10, color: '#F59E0B' },
    { name: 'Data Science', value: 5, color: '#EF4444' }
  ];

  const topCompanies = [
    { name: 'Google', openings: 1250, avgSalary: '$145,000', growth: '+15%' },
    { name: 'Microsoft', openings: 980, avgSalary: '$138,000', growth: '+12%' },
    { name: 'Amazon', openings: 1450, avgSalary: '$132,000', growth: '+18%' },
    { name: 'Meta', openings: 750, avgSalary: '$155,000', growth: '+8%' },
    { name: 'Apple', openings: 650, avgSalary: '$148,000', growth: '+10%' }
  ];

  const marketInsights = [
    {
      title: 'AI/ML Skills Surge',
      description: 'Machine Learning and AI-related positions have grown by 35% this quarter',
      trend: 'up',
      impact: 'High'
    },
    {
      title: 'Remote Work Demand',
      description: 'Remote-friendly positions now account for 68% of all tech job postings',
      trend: 'up',
      impact: 'Medium'
    },
    {
      title: 'Cloud Expertise Premium',
      description: 'Cloud-certified professionals earn 25% more than their non-certified peers',
      trend: 'up',
      impact: 'High'
    }
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
              Market <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Intelligence</span>
            </h1>
            <p className="text-muted-foreground">Real-time insights into tech job market trends and opportunities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Total Job Openings</p>
                  <p className="text-2xl font-bold">125,847</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12% this month
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Avg. Salary</p>
                  <p className="text-2xl font-bold">$89,500</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +8% YoY
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Active Companies</p>
                  <p className="text-2xl font-bold">8,450</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +5% this week
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Remote Jobs</p>
                  <p className="text-2xl font-bold">68%</p>
                  <p className="text-sm text-green-500 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +15% this year
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Skill Demand & Growth</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillDemandData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="demand" fill="url(#gradient1)" radius={[4, 4, 0, 0]} />
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </GlassCard>

            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Salary Trends (6 Months)</h2>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salaryTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="frontend" stroke="#3B82F6" strokeWidth={3} />
                  <Line type="monotone" dataKey="backend" stroke="#8B5CF6" strokeWidth={3} />
                  <Line type="monotone" dataKey="fullstack" stroke="#10B981" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </GlassCard>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <GlassCard>
              <h2 className="text-xl font-semibold mb-6">Job Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={jobDistribution}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {jobDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {jobDistribution.map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="lg:col-span-2">
              <GlassCard>
                <h2 className="text-xl font-semibold mb-6">Top Hiring Companies</h2>
                <div className="space-y-4">
                  {topCompanies.map((company, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-accent/50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{company.name[0]}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold">{company.name}</h3>
                          <p className="text-sm text-muted-foreground">{company.openings} openings</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{company.avgSalary}</p>
                        <p className="text-sm text-green-500">{company.growth}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>

          <GlassCard>
            <h2 className="text-xl font-semibold mb-6">Market Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-gradient-to-br from-blue-500/10 to-purple-600/10 border border-blue-500/20 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold">{insight.title}</h3>
                    <div className="flex items-center space-x-1">
                      {insight.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`text-xs px-2 py-1 rounded-full ${insight.impact === 'High'
                          ? 'bg-red-500/20 text-red-600'
                          : 'bg-yellow-500/20 text-yellow-600'
                        }`}>
                        {insight.impact}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{insight.description}</p>
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