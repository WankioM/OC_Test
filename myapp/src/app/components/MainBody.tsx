
"use client"; 

import React, { useState, useEffect } from 'react';
import { HiSearch, HiFilter, HiChevronDown } from 'react-icons/hi'; 
export default function Main() {

    const [selectedTag, setSelectedTag] = useState<string>("All Resources");
    const [showDropdown, setShowDropdown] = useState<boolean>(false);

    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
 
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640); 
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        setShowDropdown(false);
      };
  
    const tags = ["All Resources", "Design", "Development", "Marketing", "Branding"]; 
    const cards = [
        {
          imageUrl: '/cs.png',
          title: 'Case Study Template: FlipX, an Investment Attraction Startup',
          tags: ['Design File'],
        },
        {
          imageUrl: '/c2.png',
          title: 'Designing Impression: The Power of First Impressions',
          tags: ['GitHub Resource'],
        },
        {
          imageUrl: '/magnet.png',
          title: 'Fluid Card Animation in After Effects',
          tags: ['Design', 'UI|UX', 'Branding'],
        },
        {
          imageUrl: '/c2.png',
          title: 'Designing Impression: The Power of First Impressions',
          tags: ['Design', 'UI|UX', 'Branding'],
        },
        {
          imageUrl: 'zl.png',
          title: 'Designing Impression: The Power of First Impressions',
          tags: ['Design'],
        },
        {
          imageUrl: '/cs.png',
          title: 'OpenCore Customer Acquisition Strategy',
          tags: ['Marketing PDF'],
        },
      ];

    return (
        <main className="w-full flex flex-col items-center p-4">
        {/* Frame 1 */}
      <div className="w-full max-w-screen-xl text-white flex flex-col gap-4 mb-8 sm:mb-16">
        {/* Search Div */}
        <div className="flex items-center bg-white border border-[#E2E8F0] rounded-xl h-[44px] sm:h-[64px] px-4 py-2 gap-2">
          <HiSearch className="w-6 h-6 text-gray-500" />
          <input
            type="text"
            placeholder="Search for resources and tutorials"
            className="w-full border-none outline-none placeholder-gray-500 text-lg font-sans"
            style={{  fontSize: '16px', fontWeight: 400, lineHeight: '24px' }}
          />
        </div>
        
        {/* Tags Div */}
        <div className='relative'>
        <div className="hidden md:flex overflow-x-auto space-x-2">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded-lg border border-[#E2E8F0] ${
              selectedTag === tag ? 'bg-[#EDF2F5] text-[#294F74]' : 'bg-white text-[#667085]'
            }`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
            
          </button>
        ))}
        {/* Filter Button on Desktop */}
        <div className="hidden md:flex absolute right-14 items-center border border-[#E2E8F0] rounded-lg px-4 py-2 gap-2">
          <HiFilter className="w-3 h-3 text-[#667085]" /> {/* Filter icon */}
          <span className="text-secondary text-sm md:text-base font-medium font-sans">
            Filters
          </span>
        </div>
      </div>
      
      {/* Dropdown on Mobile */}
      <div className="md:hidden relative">
      <button
          className={`py-2 px-4 flex items-center justify-between rounded-lg border border-[#E2E8F0] ${
            showDropdown ? 'bg-[#EDF2F5] text-[#294F74]' : 'bg-white text-[#667085]'
          }`}
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{selectedTag}</span>
          <HiChevronDown className="w-5 h-5 ml-2" />
        </button>
        <button
          
          className="absolute flex items-center border border-[#E2E8F0] rounded-lg px-4 py-2 gap-2 right-0 top-0"
        >
          <HiFilter className="w-3 h-3 text-[#667085]" /> {/* Filter icon */}
          <span className="text-secondary text-sm font-medium font-sans">
            Filters
          </span>
        </button>
        {showDropdown && (
          <div className="absolute left-0 top-full mt-2 bg-white border border-[#E2E8F0] rounded-lg w-48 p-2 space-y-2">
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded-lg border border-[#E2E8F0] ${
                  selectedTag === tag ? 'bg-[#EDF2F5] text-[#294F74]' : 'bg-white text-[#667085]'
                }`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>

      </div>
      </div>

      
  
        {/* Frame 2 */}
        <div className="w-full max-w-screen-xl text-white flex items-center justify-center p-0">
            <div className="w-full sm:w-[100%] h-auto sm:h-[840px] grid grid-cols-1 sm:grid-cols-3 gap-4 p-0">
              {cards.slice(0, isMobile ? 3 : 6).map((card, index) => (
                <div key={index} className="w-full h-full bg-white text-black p-4 rounded-xl">
                    <img
                    src={card.imageUrl}
                    alt={card.title}
                    width={403}
                    height={247}
                    className="w-full h-[247px] sm:h-[247px] object-cover rounded-xl"
                    />
                    <h3 className="mt-4 text-lg sm:text-2xl font-medium">{card.title}</h3>
                    <div className="flex flex-wrap mt-2 gap-2">
                    {card.tags.map((tag, idx) => (
                        <span
                        key={idx}
                        className="px-2 py-1 bg-gray-200 rounded-md text-xs sm:text-sm font-medium"
                        >
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                ))}
            </div>
            </div>
      </main>
    );
  }
  