import { useEffect, useRef } from 'react';

function FluidCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const circlePos = useRef({ x: 0, y: 0 });
  const circleVel = useRef({ x: 0, y: 0 });
  const animationRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const dx = mousePos.current.x - circlePos.current.x;
      const dy = mousePos.current.y - circlePos.current.y;

      circleVel.current.x = dx * 0.15;
      circleVel.current.y = dy * 0.15;

      circlePos.current.x += circleVel.current.x;
      circlePos.current.y += circleVel.current.y;

      cursor.style.transform = `translate(${mousePos.current.x}px, ${mousePos.current.y}px)`;
      trail.style.transform = `translate(${circlePos.current.x}px, ${circlePos.current.y}px)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#D4AF37] rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-8 h-8 bg-[#D4AF37]/30 rounded-full pointer-events-none z-[9998]"
        style={{ transform: 'translate(-50%, -50%)', transition: 'transform 0.1s linear' }}
      />
    </>
  );
}

export default FluidCursor;