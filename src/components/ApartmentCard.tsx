import React from 'react';
import { Apartment } from '../types/apartment';

interface ApartmentCardProps {
  apartment: Apartment;
  onClick: () => void;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({ apartment, onClick }) => {
  return (
    <div 
      className="group relative cursor-pointer transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg border-4 border-white hover:shadow-2xl transition-shadow duration-300">
        <img 
          src={apartment.images[0]} 
          alt={apartment.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-bold text-center drop-shadow-lg">
            {apartment.title}
          </h3>
        </div>
        
        {/* Hover indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApartmentCard;