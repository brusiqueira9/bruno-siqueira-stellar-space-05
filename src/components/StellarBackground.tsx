import { useRef, useEffect } from 'react';

const STAR_COUNT = 150; // Aumentei a quantidade de estrelas
const STAR_COLOR = 'rgba(0,176,255,0.85)'; // Mudei para azul neon
const STAR_MIN_RADIUS = 0.5;
const STAR_MAX_RADIUS = 1.8;

function randomBetween(a: number, b: number) {
  return a + Math.random() * (b - a);
}

const StellarBackground = () => {
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

    // Star object
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randomBetween(STAR_MIN_RADIUS, STAR_MAX_RADIUS),
      speed: randomBetween(0.05, 0.25),
      twinkle: Math.random() * Math.PI * 2,
    }));

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      stars.forEach(star => {
        // Twinkle effect
        const alpha = 0.7 + 0.3 * Math.sin(star.twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,176,255,${alpha})`; // Azul neon
        ctx.shadowColor = STAR_COLOR;
        ctx.shadowBlur = 12; // Aumentei o brilho
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      stars.forEach(star => {
        star.y += star.speed;
        star.twinkle += 0.05;
        if (star.y > height) {
          star.x = Math.random() * width;
          star.y = 0;
        }
      });
      drawStars();
      requestAnimationFrame(animate);
    }

    animate();

    // Responsivo
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ position: 'absolute', top: 0, left: 0 }}
    />
  );
};

export default StellarBackground;