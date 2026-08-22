"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import "./Carousel.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  className?: string;
}

export default function Carousel({ children, className = "" }: CarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
  const carousel = carouselRef.current;

  if (!carousel) return;

  const { scrollLeft, scrollWidth, clientWidth } = carousel;

  const maxScroll = scrollWidth - clientWidth;

  const isAtStart = Math.abs(scrollLeft) <= 1;
  const isAtEnd = Math.abs(Math.abs(scrollLeft) - maxScroll) <= 1;

  setCanScrollRight(!isAtStart);
  setCanScrollLeft(!isAtEnd);
};

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    checkScroll();

    carousel.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      carousel.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.8;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`carousel-wrapper ${className}`}>
      <button
        type="button"
        className="carousel-button carousel-button-right"
        onClick={() => scroll("left")}
        disabled={!canScrollLeft}
        aria-label="بعدی"
      >
        <ChevronLeft />
      </button>
      
      <button
        type="button"
        className="carousel-button carousel-button-left"
        onClick={() => scroll("right")}
        aria-label="قبلی"
        disabled={!canScrollRight}
      >
        <ChevronRight />
      </button>

      <div ref={carouselRef} className="carousel">
        {children}
      </div>
    </div>
  );
}
