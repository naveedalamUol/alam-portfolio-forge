
import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-500/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-500/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute bottom-20 right-32 w-5 h-5 bg-pink-500/20 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rotate-45 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-80 right-1/4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rotate-45 animate-pulse" style={{ animationDelay: '2.5s' }}></div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
    </div>
  );
};

export default FloatingElements;
