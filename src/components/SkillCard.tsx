
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useEffect, useRef, useState } from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  gradient: string;
}

const SkillCard = ({ title, skills, icon, gradient }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const scrollProgress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        setScrollY(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getParallaxStyle = () => ({
    transform: `translateY(${(1 - scrollY) * 20}px) scale(${0.98 + scrollY * 0.02})`,
  });

  const getIconStyle = () => ({
    transform: `rotate(${scrollY * 360}deg) scale(${0.9 + scrollY * 0.1})`,
  });

  return (
    <Card 
      ref={cardRef}
      className="group relative overflow-hidden bg-white dark:bg-gray-700 hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2 hover:translate-x-2 border border-gray-200 dark:border-gray-600"
      style={getParallaxStyle()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <CardContent className="p-8 relative z-10">
        <div 
          className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          style={isHovered ? {} : getIconStyle()}
        >
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={skill} 
              className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300 hover:scale-105 transform animate-fade-in"
              style={{
                animationDelay: `${index * 100 + scrollY * 500}ms`,
                transform: `translateY(${(1 - scrollY) * 10}px)`,
              }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
