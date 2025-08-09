import React, { useState, useEffect } from 'react';

interface SparkleProps {
  color: string;
  size: number;
  style: React.CSSProperties;
}

const generateSparkle = (color: string): SparkleProps => {
  return {
    color,
    size: Math.random() * 10 + 5,
    style: {
      position: 'absolute',
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      zIndex: 2,
      animationDuration: `${Math.random() * 1 + 0.5}s`,
      animationDelay: `${Math.random() * 0.5}s`,
    },
  };
};

const Sparkle: React.FC<SparkleProps> = ({ color, size, style }) => {
  return (
    <span
      className="absolute block animate-sparkle-fade"
      style={style}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-sparkle-spin"
      >
        <path
          d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z"
          fill={color}
        />
      </svg>
    </span>
  );
};

interface SparklesTextProps {
  children: React.ReactNode;
  className?: string;
  sparklesColor?: string;
  sparkleCount?: number;
}

const SparklesText: React.FC<SparklesTextProps> = ({
  children,
  className = '',
  sparklesColor = '#00b0ff',
  sparkleCount = 15,
}) => {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const initialSparkles = Array.from({ length: sparkleCount }).map(() =>
      generateSparkle(sparklesColor)
    );
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles(currentSparkles => {
        const newSparkle = generateSparkle(sparklesColor);
        const nextSparkles = [...currentSparkles.slice(1), newSparkle];
        return nextSparkles;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [sparkleCount, sparklesColor]);

  return (
    <span className={`inline-block relative ${className}`}>
      {sparkles.map((sparkle, i) => (
        <Sparkle key={i} {...sparkle} />
      ))}
      <span className="relative z-1">{children}</span>
    </span>
  );
};

export default SparklesText;