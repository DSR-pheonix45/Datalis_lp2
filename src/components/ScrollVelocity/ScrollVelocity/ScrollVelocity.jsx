import { useEffect, useRef } from "react";

export const ScrollVelocity = ({
  texts = [],
  speed = "normal",
  direction = "left",
  className = "",
}) => {
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  const addAnimation = () => {
    if (!scrollerRef.current || !scrollerInnerRef.current) return;

    scrollerRef.current.setAttribute("data-animated", "true");

    // Create a second set of items for seamless scrolling
    const scrollerContent = Array.from(scrollerInnerRef.current.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInnerRef.current.appendChild(duplicatedItem);
    });
  };

  const scrollerStyles = {
    "--scroll-duration": speed === "fast" ? "20s" : speed === "slow" ? "60s" : "40s",
  };

  // Create double the items for seamless infinite scroll
  const doubledTexts = [...texts, ...texts];

  return (
    <div
      ref={scrollerRef}
      className="w-full relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[20%] before:h-full before:bg-gradient-to-r before:from-[#070B14] before:to-transparent before:z-10 after:content-[''] after:absolute after:top-0 after:right-0 after:w-[20%] after:h-full after:bg-gradient-to-l after:from-[#070B14] after:to-transparent after:z-10"
      style={scrollerStyles}
      data-speed={speed}
      data-direction={direction}
    >
      <div
        ref={scrollerInnerRef}
        className={`py-8 flex flex-nowrap gap-20 animate-scroll ${className}`}
        style={{
          width: "max-content"
        }}
      >
        {doubledTexts.map((text, index) => (
          <span 
            key={index} 
            className="whitespace-nowrap text-lg font-semibold tracking-tight text-gray-200 uppercase"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollVelocity;
