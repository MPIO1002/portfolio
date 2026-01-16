'use client';

import { useEffect } from 'react';
import TextType from './TextType';

interface LetterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LetterPopup({ isOpen, onClose }: LetterPopupProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl animate-[slideUp_0.5s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Letter Paper */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg shadow-2xl p-8 sm:p-12 relative animate-[letterUnfold_0.6s_ease-out]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200/50 transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Letter Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 head-font mb-8">
              My Philosophy
            </h2>
            
            <div className="text-lg sm:text-xl text-gray-700 leading-relaxed whitespace-pre-line">
              <TextType 
                text={["As a frontend developer, I believe that creating an interface is not just about making it work.\n\nIt must be beautiful and optimized.\n\nEvery pixel matters, and every millisecond counts in delivering exceptional user experiences."]}
                typingSpeed={30}
                pauseDuration={0}
                showCursor={false}
                cursorCharacter="|"
                loop={false}
              />
            </div>

            {/* Signature */}
            <div className="mt-12 flex flex-col items-end">
              <p className="text-2xl sm:text-3xl head-font text-gray-800 mb-2">
                Sincerely,
              </p>
              <p className="text-3xl sm:text-4xl head-font text-blue-700 italic">
                Phuc
              </p>
              <div className="w-32 h-0.5 bg-gray-400 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
