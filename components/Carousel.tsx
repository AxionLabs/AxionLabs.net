"use client";
import type React from "react";
import { useRef, useEffect, useState, useCallback } from "react";

const Carousel = ({
  items,
}: {
  items: {
    id: string;
    image: string;
    text: string;
    buttonLabel: string;
    buttonLink: string;
  }[];
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    if (carouselRef.current) {
      const scrollAmount = index * carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, []);

  const scrollNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % items.length;
      scrollToIndex(nextIndex);
      return nextIndex;
    });
  }, [items.length, scrollToIndex]);

  useEffect(() => {
    const interval = setInterval(scrollNext, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(interval);
  }, [scrollNext]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        ref={carouselRef}
        className="flex overflow-hidden scroll-smooth w-full"
      >
        {items.map((item, index) => (
          <div
            key={`carousel-item-${item.id}`}
            className="flex-shrink-0 w-full flex flex-col items-center justify-center text-center p-8 bg-neutral-800 text-neutral-100 rounded-lg shadow-lg"
          >
            <img
              src={item.image}
              alt={`Carousel item ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-semibold mb-4">{item.text}</p>
            <a
              href={item.buttonLink}
              className="btn-primary" // Ensure this class is styled in global.css
            >
              {item.buttonLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
