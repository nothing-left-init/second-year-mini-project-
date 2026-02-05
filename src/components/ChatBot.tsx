import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI Career Mentor. I'm optimzed to help you navigate your tech career. Ask me anything about career paths, skills, interviews, or industry trends.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Expanded knowledge base simulating a more advanced AI
  const botKnowledgeBase: Record<string, string[]> = {
    'trends': [
      "Generative AI and LLMs are currently dominating",
      "Cybersecurity demand is at an all-time high",
      "Edge computing is gaining traction",
      "Sustainable/Green tech is becoming a priority",
      "DevOps and Platform Engineering are evolving rapidly"
    ],
    'frontend': [
      "React ecosystem (Next.js, Remix) is standard",
      "TypeScript is essential for modern frontend",
      "Performance optimization (Core Web Vitals) is critical",
      "Accessibility (a11y) is a must-have skill",
      "CSS frameworks like Tailwind are widely adopted"
    ],
    'backend': [
      "Python and Node.js remain top choices",
      "Go and Rust are gaining significant adoption for performance",
      "Microservices architecture knowledge is highly valued",
      "GraphQL vs REST API design patterns",
      "Containerization (Docker/K8s) is expected"
    ],
    'salary': [
      "Salaries vary by location and experience",
      "Remote roles often offer competitive SF/NY based pay",
      "Specialized skills like AI/ML command a premium",
      "Negotiation is key - always research market rates first"
    ]
  };

  const generateResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();

    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello there! Ready to accelerate your career? What's on your mind today?";
    }

    if (lowerQuery.includes('trend')) {
      return `Here are the top trends I'm seeing:\n\n• ${botKnowledgeBase.trends.join('\n• ')}\n\nWhich of these interests you most?`;
    }

    if (lowerQuery.includes('frontend') || lowerQuery.includes('react') || lowerQuery.includes('web')) {
      return `For Frontend development:\n\n• ${botKnowledgeBase.frontend.join('\n• ')}\n\nFocusing on these will make you very hireable!`;
    }

    if (lowerQuery.includes('backend') || lowerQuery.includes('server') || lowerQuery.includes('api')) {
      return `In the Backend space:\n\n• ${botKnowledgeBase.backend.join('\n• ')}\n\nDo you have a preferred language?`;
    }

    if (lowerQuery.includes('salary') || lowerQuery.includes('pay') || lowerQuery.includes('money')) {
      return `Regarding compensation:\n\n• ${botKnowledgeBase.salary.join('\n• ')}\n\nI can help you prepare for salary negotiations if you like.`;
    }

    if (lowerQuery.includes('roadmap')) {
      return "I can generate a personalized roadmap for you. Are you interested in Frontend, Backend, Full Stack, or Data Science?";
    }

    return "That's an interesting topic. To give you the best advice, could you clarify your specific goal or question? I can help with roadmaps, skill analysis, interview prep, and more.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate variable processing time for "thinking" effect
    const processingTime = Math.random() * 1000 + 1000;

    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, processingTime);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="flex flex-col h-[600px] w-full bg-card/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border/50 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-md">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-lg">AI Career Mentor</h3>
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs text-muted-foreground font-medium">Online & Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-2`}>

                {/* Avatar */}
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${message.sender === 'user'
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-md'
                    : 'bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md'
                  }`}>
                  {message.sender === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div className={`px-5 py-3 rounded-2xl shadow-sm text-sm leading-relaxed whitespace-pre-line ${message.sender === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-br-none'
                    : 'bg-muted/80 backdrop-blur-sm border border-border/50 text-foreground rounded-bl-none'
                  }`}>
                  {message.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start items-center space-x-2 pl-10"
          >
            <div className="bg-muted/50 px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1.5 items-center border border-border/30">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
              <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></span>
            </div>
            <span className="text-xs text-muted-foreground animate-pulse">Thinking...</span>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-background/50 backdrop-blur-md border-t border-border/50">
        <div className="flex items-center space-x-2 bg-muted/50 border border-border/50 rounded-xl p-2 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all shadow-inner">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about your tech career..."
            className="flex-1 bg-transparent px-3 py-2 focus:outline-none text-foreground placeholder:text-muted-foreground/70"
            autoComplete="off"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="p-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center mt-2">
          <p className="text-[10px] text-muted-foreground">AI can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;