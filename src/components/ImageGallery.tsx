import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Apartment } from '../types/Apartment';

interface ImageGalleryProps {
  apartment: Apartment;
  isOpen: boolean;
  onClose: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ apartment, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % apartment.images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Close button - chỉ sửa button này */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 z-[100] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
        style={{ zIndex: 9999 }}
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Image container */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <img
          src={apartment.images[currentIndex]}
          alt={`${apartment.title} - Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {/* Navigation arrows */}
        {apartment.images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}
      </div>

      {/* Image info */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <h3 className="text-white text-xl font-bold mb-1">{apartment.title}</h3>
        <p className="text-white/80 text-sm mb-2">{apartment.description}</p>
        <div className="flex space-x-2">
          {apartment.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
        <p className="text-white/60 text-xs mt-2">
          {currentIndex + 1} / {apartment.images.length}
        </p>
      </div>
    </div>
  );
};

export default ImageGallery;