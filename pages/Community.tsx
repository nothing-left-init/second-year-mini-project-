import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Plus, Search, Filter, TrendingUp } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';

export default function Community() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'https://placehold.co/150x400',
      time: '2 hours ago',
      content: 'Just completed my first React project! 🎉 Built a todo app with hooks and context API. The learning curve was steep but totally worth it. Any tips for optimizing performance?',
      likes: 24,
      comments: 8,
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      author: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      time: '5 hours ago',
      content: 'Looking for study buddies for the upcoming AWS certification exam. Anyone interested in forming a study group? We could meet virtually twice a week.',
      likes: 18,
      comments: 12,
      tags: ['AWS', 'Cloud', 'Certification']
    },
    {
      id: 3,
      author: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      time: '1 day ago',
      content: 'Sharing my Python data analysis project on customer behavior patterns. Used pandas, matplotlib, and scikit-learn. Open to feedback and collaboration!',
      likes: 42,
      comments: 15,
      tags: ['Python', 'Data Science', 'Machine Learning']
    }
  ]);

  const [newPost, setNewPost] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        time: 'Just now',
        content: newPost,
        likes: 0,
        comments: 0,
        tags: ['Discussion']
      };
      setPosts([post, ...posts]);
      setNewPost('');
      setShowNewPost(false);
    }
  };

  const trendingTopics = [
    { name: 'React Hooks', posts: 156 },
    { name: 'Machine Learning', posts: 89 },
    { name: 'AWS Certification', posts: 67 },
    { name: 'JavaScript ES6', posts: 45 },
    { name: 'Python Django', posts: 34 }
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
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Community</span> Hub
            </h1>
            <p className="text-muted-foreground">Connect, share, and learn with fellow developers</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <GlassCard className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">Y</span>
                  </div>
                  <button
                    onClick={() => setShowNewPost(!showNewPost)}
                    className="flex-1 px-4 py-2 bg-muted rounded-lg text-left text-muted-foreground hover:bg-accent transition-colors"
                  >
                    What's on your mind?
                  </button>
                  <button
                    onClick={() => setShowNewPost(!showNewPost)}
                    className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>

                {showNewPost && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-border pt-4"
                  >
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Share your thoughts, ask questions, or showcase your projects..."
                      className="w-full p-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={4}
                    />
                    <div className="flex justify-end space-x-2 mt-3">
                      <button
                        onClick={() => setShowNewPost(false)}
                        className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleNewPost}
                        className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200"
                      >
                        Post
                      </button>
                    </div>
                  </motion.div>
                )}
              </GlassCard>

              <div className="space-y-6">
                {posts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <GlassCard>
                      <div className="flex items-start space-x-4">
                        <img
                          src={post.avatar}
                          alt={post.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold">{post.author}</h3>
                            <span className="text-sm text-muted-foreground">{post.time}</span>
                          </div>
                          <p className="text-foreground mb-4">{post.content}</p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="px-2 py-1 bg-blue-500/10 text-blue-600 text-xs font-medium rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center space-x-6 text-muted-foreground">
                            <button
                              onClick={() => handleLike(post.id)}
                              className="flex items-center space-x-2 hover:text-red-500 transition-colors"
                            >
                              <Heart className="w-5 h-5" />
                              <span>{post.likes}</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                              <MessageCircle className="w-5 h-5" />
                              <span>{post.comments}</span>
                            </button>
                            <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                              <Share className="w-5 h-5" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <GlassCard>
                <div className="flex items-center space-x-2 mb-4">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search discussions..."
                    className="flex-1 bg-transparent border-none outline-none"
                  />
                </div>
                <button className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-200">
                  Search
                </button>
              </GlassCard>

              <GlassCard>
                <h3 className="font-semibold mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-orange-500" />
                  Trending Topics
                </h3>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                      <span className="font-medium">#{topic.name}</span>
                      <span className="text-sm text-muted-foreground">{topic.posts} posts</span>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard>
                <h3 className="font-semibold mb-4">Community Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Members</span>
                    <span className="font-semibold">12,847</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Active Today</span>
                    <span className="font-semibold">1,234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Posts This Week</span>
                    <span className="font-semibold">456</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}