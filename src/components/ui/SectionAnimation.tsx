
import { useEffect, useRef } from 'react';

interface SectionAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade' | 'left' | 'right';
}

const SectionAnimation: React.FC<SectionAnimationProps> = ({ 
  children, 
  className = '', 
  animationType = 'fade' 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'left':
        return 'reveal-left';
      case 'right':
        return 'reveal-right';
      default:
        return 'reveal';
    }
  };

  return (
    <div ref={sectionRef} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  );
};

export default SectionAnimation;
