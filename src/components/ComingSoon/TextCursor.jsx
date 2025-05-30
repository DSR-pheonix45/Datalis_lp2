import { useState, useEffect, useRef, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TextCursor = memo(({
  delay = 0.01,
  spacing = 80,
  followMouseDirection = true,
  randomFloat = true,
  exitDuration = 0.3,
  removalInterval = 20,
  maxPoints = 5, // Reduced from 10 to 5 for better performance
  size = 24, // New prop for cursor size (default 24px)
}) => {
  const [trail, setTrail] = useState([]);
  const containerRef = useRef(null);
  const lastMoveTimeRef = useRef(Date.now());
  const idCounter = useRef(0);
  const throttleRef = useRef(false);

  const handleMouseMove = (e) => {
    if (throttleRef.current) return;
    throttleRef.current = true;

    requestAnimationFrame(() => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      setTrail((prev) => {
        if (prev.length >= maxPoints) {
          return [
            ...prev.slice(1),
            {
              id: idCounter.current++,
              x: mouseX,
              y: mouseY,
              angle: 0,
            },
          ];
        }
        return [
          ...prev,
          {
            id: idCounter.current++,
            x: mouseX,
            y: mouseY,
            angle: 0,
          },
        ];
      });

      lastMoveTimeRef.current = Date.now();
      throttleRef.current = false;
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use document for mouse tracking instead of the container
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastMoveTimeRef.current > 100) {
        setTrail((prev) => prev.slice(1));
      }
    }, removalInterval);
    return () => clearInterval(interval);
  }, [removalInterval]);

  // Calculate offset based on size
  const offset = size / 2;

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {trail.map((item) => (
          <motion.img
            key={item.id}
            src="/dobby.ico"
            alt=""
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.8, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute select-none"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: item.x - offset,
              top: item.y - offset,
              willChange: "transform",
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
});

TextCursor.displayName = "TextCursor";
export default TextCursor;

