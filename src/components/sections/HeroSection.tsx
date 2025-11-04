'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImage = {
    src: '/image_4.jpg',
    alt: 'Scales of justice in front of a courtroom'
  };

  const slides = [
    {
      id: 1,
      title: 'Purpose with Precision',
      subtitle:
        "We approach every matter with a clear objective, to deliver legally sound, commercially practical, and outcome-driven solutions that advance our clients’ goals."
    },
    {
      id: 2,
      title: 'Agility in Action',
      subtitle:
        "In a fast-moving legal and business landscape, we respond with agility, adapt to change, and act decisively when it matters most."
    },
    {
      id: 3,
      title: 'Legacy through Learning',
      subtitle:
        "We continuously evolve, absorbing lessons from every project, judgment, and negotiation, to build a legacy of integrity, excellence, and leadership in the real estate and legal ecosystem."
    }
  ];


  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative isolate flex min-h-[calc(100vh-6rem)] items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 via-navy-900/50 to-navy-900/30" />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-all duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-all duration-200 hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-gold-500 z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500 ${
              index === currentSlide 
                ? 'bg-gold-500' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-4xl px-4 text-center text-white">
        {/* Main headline */}
        <h1 className="heading-1 mb-4 animate-fade-in !text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]">
          {slides[currentSlide].title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg font-medium text-white/95 animate-slide-up md:text-xl">
          {slides[currentSlide].subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
