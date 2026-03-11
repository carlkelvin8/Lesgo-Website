'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface Banner {
  id: number;
  title: string;
  message: string;
  bgColor: string;
  textColor: string;
  icon: string;
  ctaText?: string;
  ctaLink?: string;
}

const banners: Banner[] = [
  {
    id: 1,
    title: '🚀 App Launch Coming Soon',
    message: 'Get ready for the LeSgo mobile app! Sign up to be notified when we launch.',
    bgColor: 'bg-gradient-to-r from-[#5a2a8b] to-[#7a4fb5]',
    textColor: 'text-white',
    icon: '📱',
    ctaText: 'Notify Me',
    ctaLink: '#',
  },
  {
    id: 2,
    title: '⚡ Special Offer Inside',
    message: 'Get 20% off your first delivery with code LESGO20. Limited time only!',
    bgColor: 'bg-gradient-to-r from-[#5a2a8b] to-[#8b5fbf]',
    textColor: 'text-white',
    icon: '🎉',
    ctaText: 'Claim Offer',
    ctaLink: '#',
  },
  {
    id: 3,
    title: '🌟 Join Our Community',
    message: 'Be part of the fastest growing courier network. Become a LeSgo partner today.',
    bgColor: 'bg-gradient-to-r from-[#5a2a8b] to-[#6b3fa0]',
    textColor: 'text-white',
    icon: '👥',
    ctaText: 'Learn More',
    ctaLink: '#',
  },
];

export default function PopupBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentBanner, setCurrentBanner] = useState<Banner | null>(null);

  useEffect(() => {
    // Check if banner was already closed in this session
    const bannerClosed = sessionStorage.getItem('popupBannerClosed');
    
    if (!bannerClosed) {
      // Get a random banner
      const randomBanner = banners[Math.floor(Math.random() * banners.length)];
      setCurrentBanner(randomBanner);
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Mark banner as closed for this session
    sessionStorage.setItem('popupBannerClosed', 'true');
  };

  if (!isVisible || !currentBanner) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 animate-in fade-in slide-in-from-top-4 duration-500">
      <div className={`${currentBanner.bgColor} ${currentBanner.textColor} px-4 py-4 sm:px-6 sm:py-5`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-2xl">{currentBanner.icon}</span>
            <div className="flex-1">
              <h3 className="font-bold text-sm sm:text-base">{currentBanner.title}</h3>
              <p className="text-xs sm:text-sm opacity-90">{currentBanner.message}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {currentBanner.ctaText && (
              <a
                href={currentBanner.ctaLink}
                className="px-3 py-1 sm:px-4 sm:py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-md text-xs sm:text-sm font-semibold transition-all whitespace-nowrap"
                style={{ color: "#000000" }}
              >
                {currentBanner.ctaText}
              </a>
            )}
            <button
              onClick={handleClose}
              className="p-1 hover:bg-white hover:bg-opacity-20 rounded-md transition-all"
              aria-label="Close banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
