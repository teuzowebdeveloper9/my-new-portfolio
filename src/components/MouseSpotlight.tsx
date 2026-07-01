import { useEffect, useRef } from "react";

function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;

    if (!spotlight) {
      return;
    }

    const pointerQuery = window.matchMedia("(pointer: fine)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!pointerQuery.matches || motionQuery.matches) {
      spotlight.style.display = "none";
      return;
    }

    let animationFrame = 0;
    let latestX = window.innerWidth / 2;
    let latestY = window.innerHeight / 2;

    function moveSpotlight() {
      spotlight.style.transform = `translate3d(${latestX - 180}px, ${latestY - 180}px, 0)`;
      animationFrame = 0;
    }

    function handlePointerMove(event: PointerEvent) {
      latestX = event.clientX;
      latestY = event.clientY;
      spotlight.style.opacity = "1";

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(moveSpotlight);
      }
    }

    function handlePointerLeave() {
      spotlight.style.opacity = "0";
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return <div ref={spotlightRef} className="mouse-spotlight" aria-hidden="true" />;
}

export default MouseSpotlight;
