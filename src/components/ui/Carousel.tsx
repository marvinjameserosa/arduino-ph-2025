import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  items: CarouselItem[];
  onSlideChange?: (index: number) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ items, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const getVisibleItems = () => {
    const itemCount = items.length;
    const prev = (currentIndex - 1 + itemCount) % itemCount;
    const next = (currentIndex + 1) % itemCount;
    return [prev, currentIndex, next];
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const nextIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(nextIndex);
    onSlideChange?.(nextIndex);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(prevIndex);
    onSlideChange?.(prevIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const visibleItems = getVisibleItems();

  return (
    <div className="relative w-full mx-auto px-4 py-8 ">
      <div className="relative h-[450px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {visibleItems.map((itemIndex, position) => {
            const item = items[itemIndex];
            return (
              <div
                key={itemIndex}
                className={`absolute transition-all duration-300 ease-in-out
                  md:block
                  ${position === 0 ? 'hidden md:-translate-x-full md:opacity-50 md:scale-75' : ''}
                  ${position === 1 ? 'z-20 scale-100' : ''}
                  ${position === 2 ? 'hidden md:block md:translate-x-full md:opacity-50 md:scale-75' : ''}
                `}
              >
                <Image
                    src={item.src}
                    alt={item.alt}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-between">
        <button
          onClick={handlePrev}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors ml-4"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-full bg-white/80 shadow-lg hover:bg-white transition-colors mr-4"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};