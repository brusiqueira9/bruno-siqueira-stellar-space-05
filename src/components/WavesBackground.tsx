import React, { useRef, useEffect } from 'react';

const WavesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const waves = [
      { y: height * 0.6, length: 0.5, amplitude: 40, speed: 0.003, color: 'rgba(0, 176, 255, 0.05)' },
      { y: height * 0.5, length: 0.7, amplitude: 30, speed: 0.004, color: 'rgba(0, 100, 255, 0.03)' },
      { y: height * 0.7, length: 0.3, amplitude: 50, speed: 0.002, color: 'rgba(0, 50, 255, 0.04)' },
    ];

    let animationFrameId: number;
    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      waves.forEach(wave => {
        ctx.fillStyle = wave.color;
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x < width; x++) {
          const dx = x * wave.length * 0.01;
          const y = wave.y + Math.sin(time + dx) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.fill();
        ctx.closePath();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      waves.forEach((wave, index) => {
        wave.y = height * (0.5 + index * 0.1);
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default WavesBackground;