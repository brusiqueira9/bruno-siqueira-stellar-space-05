import { useRef, useEffect } from 'react';

const STAR_COUNT = 200; // Aumentei a quantidade de estrelas
const STAR_COLOR = 'rgba(0,176,255,0.85)';
const STAR_MIN_RADIUS = 0.5;
const STAR_MAX_RADIUS = 2.0;

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
      // Adicionando cores variadas para algumas estrelas
      color: Math.random() > 0.9 ? 
        `rgba(${Math.floor(randomBetween(100, 255))},${Math.floor(randomBetween(100, 255))},255,${randomBetween(0.7, 0.9)})` : 
        STAR_COLOR,
    }));

    // Adicionar algumas estrelas maiores para destaque
    const bigStars = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: randomBetween(2.5, 4),
      speed: randomBetween(0.02, 0.1),
      twinkle: Math.random() * Math.PI * 2,
      color: 'rgba(255,255,255,0.9)',
    }));

    function drawStars() {
      ctx.clearRect(0, 0, width, height);
      
      // Desenhar estrelas normais
      stars.forEach(star => {
        // Twinkle effect
        const alpha = 0.7 + 0.3 * Math.sin(star.twinkle);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color.replace(/[\d\.]+\)$/, `${alpha})`);
        ctx.shadowColor = star.color;
        ctx.shadowBlur = 15; // Aumentei o brilho
        ctx.fill();
        ctx.closePath();
        ctx.shadowBlur = 0;
      });
      
      // Desenhar estrelas grandes com efeito de brilho extra
      bigStars.forEach(star => {
        const alpha = 0.8 + 0.2 * Math.sin(star.twinkle);
        
        // Glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.radius * 3
        );
        gradient.addColorStop(0, 'rgba(255,255,255,0.8)');
        gradient.addColorStop(0.5, 'rgba(100,200,255,0.3)');
        gradient.addColorStop(1, 'rgba(0,100,255,0)');
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.closePath();
        
        // Star center
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.shadowColor = 'rgba(100,200,255,0.8)';
        ctx.shadowBlur = 20;
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
      
      bigStars.forEach(star => {
        star.y += star.speed;
        star.twinkle += 0.03;
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
      
      // Reposicionar estrelas
      stars.forEach(star => {
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      });
      
      bigStars.forEach(star => {
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