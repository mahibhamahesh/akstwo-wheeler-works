"use client";
import React, { useState } from 'react';
import Image from 'next/image';

// Mapping your 10 images
const galleryImages = [
  "/gallery/1.webp", "/gallery/2.webp", "/gallery/3.webp", 
  "/gallery/4.webp", "/gallery/5.webp", "/gallery/6.webp", 
  "/gallery/7.webp", "/gallery/8.webp", "/gallery/9.webp", "/gallery/10.webp"
];

export default function GalleryPage() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx + 1) % galleryImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx !== null) setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx !== null) {
        if (e.key === 'ArrowRight') {
          setSelectedIdx((selectedIdx + 1) % galleryImages.length);
        } else if (e.key === 'ArrowLeft') {
          setSelectedIdx((selectedIdx - 1 + galleryImages.length) % galleryImages.length);
        } else if (e.key === 'Escape') {
          setSelectedIdx(null);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="bg-white min-h-screen pt-[60px] sm:pt-[65px] md:pt-[70px] lg:pt-[75px] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-black text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 tracking-tighter">
        Our Work Gallery
      </h1>

      {/* Grid Layout - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-7xl mx-auto">
        {galleryImages.map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedIdx(idx)}
            className="cursor-pointer overflow-hidden border-b-4 border-black hover:border-yellow-500 transition-all duration-300 shadow-md hover:shadow-xl rounded-lg sm:rounded-xl"
          >
            <div className="relative w-full h-48 sm:h-56 md:h-60 lg:h-64">
              <Image
                src={src} 
                alt={`Project ${idx + 1}`} 
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIdx(null)}
        >
          {/* Navigation Buttons */}
          <button 
            onClick={prevImage} 
            className="absolute left-2 sm:left-4 md:left-10 text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-black hover:text-white transition-colors z-10 px-2 sm:px-4"
            aria-label="Previous image"
          >
            &lt;
          </button>
          
          <div className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center">
            <Image
              src={galleryImages[selectedIdx]} 
              alt={`Gallery image ${selectedIdx + 1}`}
              width={1200}
              height={800}
              className="object-contain max-h-[85vh] w-auto border-4 border-yellow-500 shadow-2xl rounded-lg"
              priority
            />
          </div>
          
          <button 
            onClick={nextImage} 
            className="absolute right-2 sm:right-4 md:right-10 text-yellow-500 text-4xl sm:text-5xl md:text-6xl font-black hover:text-white transition-colors z-10 px-2 sm:px-4"
            aria-label="Next image"
          >
            &gt;
          </button>
          
          {/* Close Button */}
          <button 
            className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 text-white text-xs sm:text-sm md:text-base uppercase font-bold tracking-widest hover:text-yellow-500 transition-colors z-10"
            onClick={() => setSelectedIdx(null)}
          >
            ✕ Close
          </button>
        </div>
      )}
    </div>
  );
}