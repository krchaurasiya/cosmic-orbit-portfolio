import { useEffect, useRef } from 'react';

export default function StarCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;
    let W, H;

    const STAR_COUNT = 260;
    const NEBULA_COUNT = 5;

    const stars = [];
    const nebulas = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function initStars() {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.8 + 0.2,
          alpha: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.08 + 0.01,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: ['#00d4ff', '#ffd700', '#ffffff', '#b0d0ff', '#39ff14'][Math.floor(Math.random() * 5)],
        });
      }

      nebulas.length = 0;
      for (let i = 0; i < NEBULA_COUNT; i++) {
        nebulas.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 200 + 80,
          color: ['rgba(0,212,255,0.04)', 'rgba(255,215,0,0.03)', 'rgba(57,255,20,0.03)', 'rgba(100,0,200,0.04)'][Math.floor(Math.random() * 4)],
          drift: Math.random() * 0.2 - 0.1,
        });
      }
    }

    let t = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Draw nebulas
      nebulas.forEach(n => {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, n.color);
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        n.x += n.drift;
        if (n.x < -n.r) n.x = W + n.r;
        if (n.x > W + n.r) n.x = -n.r;
      });

      // Draw stars
      t += 0.016;
      stars.forEach(s => {
        s.twinklePhase += s.twinkleSpeed;
        const alpha = s.alpha * (0.5 + 0.5 * Math.sin(s.twinklePhase));

        // Glow
        const grd = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        grd.addColorStop(0, s.color.replace(')', `,${alpha})`).replace('rgb', 'rgba').replace('#', 'rgba(').replace('rgba(', '#'));
        grd.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,212,255,${alpha * 0.08})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();

        s.y -= s.speed;
        if (s.y < -4) {
          s.y = H + 4;
          s.x = Math.random() * W;
        }
      });

      animId = requestAnimationFrame(draw);
    }

    resize();
    initStars();
    draw();

    window.addEventListener('resize', () => { resize(); initStars(); });
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="star-canvas" ref={canvasRef} />;
}
