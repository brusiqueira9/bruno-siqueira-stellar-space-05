import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  texts,
  className = '',
  typingSpeed = 50,
  deletingSpeed = 30,
  delayBetweenTexts = 1500,
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentFullText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting) {
      if (displayText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText === currentFullText) {
        setIsPaused(true);
      } else {
        const timeout = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [texts, currentTextIndex, displayText, isDeleting, isPaused, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <div className={className}>
      <span className="font-mono">
        {displayText}
        <span className="animate-pulse text-primary ml-1">|</span>
      </span>
    </div>
  );
};

export default TypewriterEffect;