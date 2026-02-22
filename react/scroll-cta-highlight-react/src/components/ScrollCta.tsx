import { useEffect, useState } from 'react';

interface ScrollCtaProps {
  threshold?: number;
  defaultClass?: string;
  highlightClass?: string;
  label?: string;
  onClick?: () => void; // Add onClick prop
}

export default function ScrollCta({
  threshold = 500,
  defaultClass = 'default-style',
  highlightClass = 'highlight-style',
  label = 'Sign Up',
  onClick
}: ScrollCtaProps) {
  const [isHighlighted, setIsHighlighted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsHighlighted(window.scrollY > threshold);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return (
    <button
      className={isHighlighted ? highlightClass : defaultClass}
      aria-label={label}
      onClick={onClick} // Attach the click handler
    >
      {label}
    </button>
  );
}