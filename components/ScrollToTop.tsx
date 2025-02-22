import { useState, useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { animateScroll as scroll } from 'react-scroll';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(top > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999]">
      <button
        onClick={handleScrollToTop}
        className={`p-3 rounded-full bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800/50 hover:border-violet-500/50 shadow-lg transition-all duration-300 ${
          isVisible
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible translate-y-4'
        }`}
      >
        <AiOutlineArrowUp className="w-5 h-5 text-zinc-400 hover:text-violet-400" />
      </button>
    </div>
  );
}