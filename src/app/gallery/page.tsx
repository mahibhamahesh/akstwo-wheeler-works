"use client";
import React, { useState } from 'react';

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

  return (
    <div className="bg-white min-h-screen py-20 px-4 md:px-10">
      <h1 className="text-5xl font-black uppercase text-black text-center mb-16 tracking-tighter">
        Our Work Gallery
      </h1>

      {/* Grid Layout - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((src, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedIdx(idx)}
            className="cursor-pointer overflow-hidden border-b-4 border-black hover:border-yellow-500 transition-all duration-300 shadow-lg"
          >
            <img 
              src={src} 
              alt={`Project ${idx + 1}`} 
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" 
            />
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
            className="absolute left-4 md:left-10 text-yellow-500 text-6xl font-black hover:text-white transition-colors"
          >
            &lt;
          </button>
          
          <img 
            src={galleryImages[selectedIdx]} 
            className="max-h-[85vh] max-w-full border-4 border-yellow-500 shadow-2xl"
            alt="Full view"
          />
          
          <button 
            onClick={nextImage} 
            className="absolute right-4 md:right-10 text-yellow-500 text-6xl font-black hover:text-white transition-colors"
          >
            &gt;
          </button>
          
          {/* Close Button */}
          <button 
            className="absolute top-8 right-8 text-white text-lg uppercase font-bold tracking-widest hover:text-yellow-500"
            onClick={() => setSelectedIdx(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}