'use client';

import { useState, useEffect } from 'react';
import { X, Smartphone } from 'lucide-react';

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const bannerClosed = sessionStorage.getItem('popupBannerClosed');
    if (!bannerClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('popupBannerClosed', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="bg-gradient-to-r from-[#5C1F68] via-[#7c3aed] to-[#e054f1] px-4 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">

          {/* Left icon */}
          <div className="flex-shrink-0 hidden sm:flex items-center justify-center h-8 w-8 rounded-full bg-white/20">
            <Smartphone className="h-4 w-4 text-white" />
          </div>

          {/* Message */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
              🚀 App Launch Coming Soon
            </span>
            <span className="hidden sm:block text-white text-xs">•</span>
            <span className="text-xs text-white">
              Sign up to be notified when we launch the LeSgo mobile app!
            </span>
            <a
              href="#download"
              onClick={handleClose}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white text-[#5C1F68] text-xs font-bold hover:bg-white/90 transition-all whitespace-nowrap"
            >
              Notify Me →
            </a>
          </div>

          {/* Close */}
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1.5 hover:bg-white/20 rounded-md transition-all"
            aria-label="Close banner"
          >
            <X size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

