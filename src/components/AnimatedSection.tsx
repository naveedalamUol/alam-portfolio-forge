
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in';
  delay?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-12`;
        case 'fade-left':
          return `${baseClass} opacity-0 -translate-x-12`;
        case 'fade-right':
          return `${baseClass} opacity-0 translate-x-12`;
        case 'scale-up':
          return `${baseClass} opacity-0 scale-95`;
        case 'fade-in':
          return `${baseClass} opacity-0`;
        default:
          return `${baseClass} opacity-0 translate-y-12`;
      }
    }
    
    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;
