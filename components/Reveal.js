"use client";

/**
 * Ambient, lightweight CSS-only rain overlay. Decorative — aria-hidden.
 * Pass `density` to control number of drops (default tuned for hero use).
 */
export default function RainOverlay({ density = 28, className = "" }) {
  const drops = Array.from({ length: density }, (_, i) => {
    const left = Math.random() * 100;
    const duration = 1.6 + Math.random() * 1.8;
    const delay = Math.random() * 4;
    const height = 40 + Math.random() * 60;
    return { id: i, left, duration, delay, height };
  });

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {drops.map((d) => (
        <span
          key={d.id}
          className="rain-drop"
          style={{
            left: `${d.left}%`,
            height: `${d.height}px`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
          }}
        />
      ))}
    </div>
  );
}