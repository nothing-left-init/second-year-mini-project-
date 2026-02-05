import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Trophy, Star, Zap, Target, Clock, Award, Gamepad2 } from 'lucide-react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import GlassCard from '../src/components/GlassCard';

export default function Arcade() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [gameState, setGameState] = useState<'menu' | 'playing' | 'completed'>('menu');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const levels = [
    { id: 1, name: 'JavaScript Basics', difficulty: 'Easy', questions: 5, points: 100, unlocked: true },
    { id: 2, name: 'React Fundamentals', difficulty: 'Medium', questions: 7, points: 200, unlocked: true },
    { id: 3, name: 'Node.js Mastery', difficulty: 'Hard', questions: 10, points: 300, unlocked: false },
    { id: 4, name: 'Algorithm Challenge', difficulty: 'Expert', questions: 12, points: 500, unlocked: false }
  ];

  const questions = [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var myVar = 5;", "variable myVar = 5;", "v myVar = 5;", "declare myVar = 5;"],
      correct: 0,
      explanation: "The 'var' keyword is used to declare variables in JavaScript."
    },
    {
      question: "Which method is used to add an element to the end of an array?",
      options: ["append()", "push()", "add()", "insert()"],
      correct: 1,
      explanation: "The push() method adds one or more elements to the end of an array."
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Data Object Management", "Dynamic Object Method", "Document Oriented Model"],
      correct: 0,
      explanation: "DOM stands for Document Object Model, representing the structure of HTML documents."
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'from-green-500 to-emerald-500';
      case 'Medium': return 'from-yellow-500 to-orange-500';
      case 'Hard': return 'from-red-500 to-pink-500';
      case 'Expert': return 'from-purple-500 to-indigo-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const startGame = (levelId: number) => {
    setSelectedLevel(levelId);
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);

    setTimeout(() => {
      if (answerIndex === questions[currentQuestion].correct) {
        setScore(prev => prev + 100);
      }

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setTimeLeft(30);
      } else {
        setGameState('completed');
      }
    }, 1500);
  };

  const resetGame = () => {
    setGameState('menu');
    setSelectedLevel(null);
    setCurrentQuestion(0);
    setScore(0);
    setTimeLeft(30);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      handleAnswer(-1); // Time's up
    }
    return () => clearTimeout(timer);
  }, [gameState, timeLeft]);

  if (gameState === 'playing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-white">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span className="font-bold">{score} pts</span>
                </div>
                <div className="flex items-center space-x-2 text-white">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span>{currentQuestion + 1}/{questions.length}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5 text-red-400" />
                <span className="font-bold text-xl">{timeLeft}s</span>
              </div>
            </div>

            <div className="w-full bg-white/20 rounded-full h-2 mb-8">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              />
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-8 text-center">
                {questions[currentQuestion].question}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(index)}
                    disabled={selectedAnswer !== null}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${selectedAnswer === null
                        ? 'border-white/30 hover:border-white/50 hover:bg-white/10'
                        : selectedAnswer === index
                          ? index === questions[currentQuestion].correct
                            ? 'border-green-400 bg-green-400/20'
                            : 'border-red-400 bg-red-400/20'
                          : index === questions[currentQuestion].correct
                            ? 'border-green-400 bg-green-400/20'
                            : 'border-white/20 opacity-50'
                      }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-left">{option}</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg"
                >
                  <p className="text-blue-200">{questions[currentQuestion].explanation}</p>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    );
  }

  if (gameState === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-white">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Trophy className="w-12 h-12 text-white" />
              </motion.div>

              <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
              <p className="text-xl mb-8">You've completed the challenge!</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{score}</p>
                  <p className="text-sm opacity-80">Total Score</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">{Math.round((score / (questions.length * 100)) * 100)}%</p>
                  <p className="text-sm opacity-80">Accuracy</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-2xl font-bold">+50</p>
                  <p className="text-sm opacity-80">XP Earned</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetGame}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200"
                >
                  Play Again
                </button>
                <button
                  onClick={resetGame}
                  className="px-8 py-3 bg-white/20 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all duration-200"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Gamepad2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Arcade</span> Learning Zone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Master programming concepts through interactive challenges and unlock your potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold mb-1">1,250</p>
                <p className="text-sm text-muted-foreground">Total Points</p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold mb-1">Level 8</p>
                <p className="text-sm text-muted-foreground">Current Level</p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold mb-1">15</p>
                <p className="text-sm text-muted-foreground">Challenges Won</p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <p className="text-2xl font-bold mb-1">7</p>
                <p className="text-sm text-muted-foreground">Day Streak</p>
              </div>
            </GlassCard>
          </div>

          <GlassCard>
            <h2 className="text-2xl font-bold mb-6 text-center">Choose Your Challenge</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {levels.map((level, index) => (
                <motion.div
                  key={level.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative overflow-hidden rounded-2xl ${level.unlocked ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
                    }`}
                  onClick={() => level.unlocked && startGame(level.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(level.difficulty)} opacity-20`} />
                  <div className="relative p-6 bg-card/50 backdrop-blur-lg border border-border/50 hover:bg-card/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{level.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{level.questions} Questions</span>
                          <span>{level.points} Points</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(level.difficulty)} text-white text-sm font-medium rounded-full`}>
                        {level.difficulty}
                      </div>
                    </div>

                    {level.unlocked ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200 flex items-center justify-center"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Start Challenge
                      </motion.button>
                    ) : (
                      <div className="w-full py-3 bg-muted text-muted-foreground font-semibold rounded-xl text-center">
                        🔒 Complete previous levels to unlock
                      </div>
                    )}
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