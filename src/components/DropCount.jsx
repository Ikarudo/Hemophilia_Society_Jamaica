import { useEffect, useRef } from 'react';

// Signature moment: a field of 300 droplets, one for each Jamaican living
// with haemophilia, filling in as the section scrolls into view.
const TOTAL = 300;

export default function DropCount() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('counted');
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('counted');
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="drop-count flex flex-wrap gap-[7px] justify-center max-w-2xl mx-auto"
      role="img"
      aria-label="A field of 300 droplets, one for each Jamaican estimated to be living with haemophilia"
    >
      {Array.from({ length: TOTAL }, (_, i) => (
        <span key={i} className="drop-dot" style={{ '--d': `${i * 5}ms` }} />
      ))}
    </div>
  );
}
