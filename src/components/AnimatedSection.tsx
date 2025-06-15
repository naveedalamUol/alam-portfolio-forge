
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in' | 'lift-right';
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-1000 ease-out will-change-transform';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-up':
          return `${baseClass} opacity-0 translate-y-16 scale-95`;
        case 'fade-left':
          return `${baseClass} opacity-0 -translate-x-16 scale-95`;
        case 'fade-right':
          return `${baseClass} opacity-0 translate-x-16 scale-95`;
        case 'scale-up':
          return `${baseClass} opacity-0 scale-90`;
        case 'fade-in':
          return `${baseClass} opacity-0`;
        case 'lift-right':
          return `${baseClass} opacity-0 translate-y-12 -translate-x-8 scale-95`;
        default:
          return `${baseClass} opacity-0 translate-y-16 scale-95`;
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
