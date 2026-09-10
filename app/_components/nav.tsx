'use client';

import { RefObject } from 'react';
import Image from 'next/image';
import type { View } from '@/app/_lib/types';

const LINKS: { view: View; label: string }[] = [
  { view: 'home', label: 'Home' },
  { view: 'do', label: 'What We Do' },
  { view: 'work', label: "What We've Fixed" },
  { view: 'process', label: 'Process' },
  { view: 'about', label: 'About' },
];

export default function Nav({
  navRef,
  view,
  onNavigate,
  onBook,
}: {
  navRef: RefObject<HTMLElement | null>;
  view: View;
  onNavigate: (view: View) => void;
  onBook: () => void;
}) {
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-60 bg-[#FBF5EF]/92 backdrop-blur-md border-b border-[#EBE1D6]"
    >
      <div className="max-w-[1180px] mx-auto px-[22px] py-[14px] flex items-center gap-4 flex-nowrap">
        <button
          onClick={() => onNavigate('home')}
          className="bg-transparent border-none p-0 cursor-pointer flex items-center shrink-0"
        >
          <Image
            src="/numi-logo.svg"
            alt="NUMI"
            height={21}
            width={56}
            className="h-[21px] w-auto block"
            priority
          />
        </button>

        <div className="flex items-center gap-5 flex-1 flex-nowrap min-w-0 overflow-x-auto py-0.5 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
          {LINKS.map((link) => (
            <button
              key={link.view}
              onClick={() => onNavigate(link.view)}
              className={`bg-transparent border-none py-1 cursor-pointer font-semibold text-[14.5px] tracking-[0.01em] whitespace-nowrap shrink-0 border-b-2 transition-colors duration-[180ms] hover:!text-[#2A211C] ${
                view === link.view
                  ? 'text-[#241C18] border-[#DE8B67]'
                  : 'text-[#7A6C62] border-transparent'
              }`}
              style={{
                fontWeight: 'bold',
                borderBlockEnd: view === link.view ? '2px solid #DE8B67' : '',
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={onBook}
          className="bg-[#241C18] text-[#FBF5EF] border-none rounded-full px-[19px] py-[11px] font-bold text-[14.5px] cursor-pointer shrink-0 whitespace-nowrap transition-all duration-[180ms] hover:bg-[#3A2C24] hover:-translate-y-px active:translate-y-px"
        >
          Book a free call
        </button>
      </div>
    </nav>
  );
}
