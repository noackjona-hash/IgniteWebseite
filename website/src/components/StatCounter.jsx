import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ value, unit, label, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }

    const startTime = performance.now();
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      
      setCount(Math.floor(eased * numericValue));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(numericValue);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, duration]);

  const prefix = value.startsWith('<') ? '<' : value.startsWith('~') ? '~' : '';
  const suffix = value.endsWith('×') ? '×' : value.endsWith('%') ? '%' : '';
  const displayValue = typeof count === 'string' ? count : `${prefix}${count}${suffix}`;

  return (
    <div className="stat-counter" ref={ref}>
      <div className="stat-counter__value">
        <span className="stat-counter__number">{displayValue}</span>
        {unit && <span className="stat-counter__unit">{unit}</span>}
      </div>
      <p className="stat-counter__label">{label}</p>
    </div>
  );
}
