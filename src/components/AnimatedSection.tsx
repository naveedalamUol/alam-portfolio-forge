
import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in' | 'lift-right' | 'slide-up' | 'bounce-in' | 'zoom-fade' | 'rotate-in';
  delay?: number;
  threshold?: number;
  duration?: number;
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  duration = 1000
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          
          // Calculate scroll progress for advanced animations
          const rect = entry.boundingClientRect;
          const windowHeight = window.innerHeight;
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
          setScrollProgress(progress);
        }
      },
      { 
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const handleScroll = () => {
      if (ref.current && isVisible) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
        setScrollProgress(progress);
      }
    };

    if (ref.current) {
      observer.observe(ref.current);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [delay, threshold, isVisible]);

  const getAnimationClass = () => {
    const baseDuration = `duration-[${duration}ms]`;
    const baseClass = `transition-all ${baseDuration} ease-out will-change-transform`;
    
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
        case 'slide-up':
          return `${baseClass} opacity-0 translate-y-24`;
        case 'bounce-in':
          return `${baseClass} opacity-0 scale-75 -translate-y-8`;
        case 'zoom-fade':
          return `${baseClass} opacity-0 scale-110 blur-sm`;
        case 'rotate-in':
          return `${baseClass} opacity-0 scale-95 rotate-12`;
        default:
          return `${baseClass} opacity-0 translate-y-16 scale-95`;
      }
    }
    
    // Add subtle scroll-linked movement for enhanced interactivity
    const scrollTransform = `translateY(${(1 - scrollProgress) * 10}px)`;
    
    switch (animation) {
      case 'bounce-in':
        return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 animate-[bounce_0.6s_ease-out]`;
      case 'zoom-fade':
        return `${baseClass} opacity-100 scale-100 blur-none`;
      case 'rotate-in':
        return `${baseClass} opacity-100 scale-100 rotate-0`;
      default:
        return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }
  };

  const getScrollStyle = () => {
    if (isVisible && scrollProgress > 0) {
      return {
        transform: `translateY(${(1 - scrollProgress) * 5}px)`,
      };
    }
    return {};
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${className}`}
      style={getScrollStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
