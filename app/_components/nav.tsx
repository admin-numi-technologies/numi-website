'use client';

import { RefObject, useEffect, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 760) setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navigate = (next: View) => {
    setMenuOpen(false);
    onNavigate(next);
  };

  const book = () => {
    setMenuOpen(false);
    onBook();
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-60 bg-[#FBF5EF]/92 backdrop-blur-md border-b border-[#EBE1D6]"
      >
        <div
          className="mx-auto px-[22px] py-[14px] hidden min-[761px]:flex items-center gap-4 flex-nowrap"
          style={{
            width: '90vw',
          }}
        >
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

        <div className="flex min-[761px]:hidden items-center justify-between gap-3 px-4 py-[13px]">
          <button
            onClick={() => onNavigate('home')}
            className="bg-transparent border-none p-0 cursor-pointer flex items-center"
          >
            <Image
              src="/numi-logo.svg"
              alt="NUMI"
              height={19}
              width={51}
              className="h-[19px] w-auto block"
              priority
            />
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="bg-transparent border-none p-0 -mr-[10px] w-11 h-11 cursor-pointer flex flex-col items-center justify-center gap-[5px]"
          >
            <span className="block w-[25px] h-[2px] bg-[#241C18] rounded-full" />
            <span className="block w-[25px] h-[2px] bg-[#241C18] rounded-full" />
            <span className="block w-[17px] h-[2px] bg-[#241C18] rounded-full" />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-95 min-[761px]:hidden bg-[#241C18] flex flex-col animate-[numi-in_220ms_ease_both]">
          <div className="flex items-center justify-between gap-3 px-4 py-[13px]">
            <button
              onClick={() => navigate('home')}
              className="bg-transparent border-none p-0 cursor-pointer flex items-center"
            >
              <Image
                src="/numi-logo.svg"
                alt="NUMI"
                height={19}
                width={51}
                className="h-[19px] w-auto block [filter:brightness(0)_invert(1)]"
              />
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="bg-transparent border-none p-0 -mr-[10px] w-11 h-11 flex items-center justify-center cursor-pointer text-[#FBF5EF] text-[28px] leading-none font-light"
            >
              ×
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center gap-1 px-[22px] pb-[60px] items-end">
            {LINKS.map((link) => (
              <button
                key={link.view}
                onClick={() => navigate(link.view)}
                className={`bg-transparent border-none py-[7px] cursor-pointer font-bold text-[34px] tracking-[-0.028em] text-right transition-colors duration-[180ms] ${
                  view === link.view ? 'text-[#F6CB96]' : 'text-[#FBF5EF]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={book}
              className="mt-[26px] bg-[#F6CB96] text-[#241C18] border-none rounded-full px-[26px] py-[15px] font-bold text-[16.5px] cursor-pointer active:translate-y-px"
            >
              Book a Free Discovery Call
            </button>
            <span className="text-[14.5px] text-[#A6968B] mt-2">
              No pitch. No jargon. Just a conversation.
            </span>
          </div>
        </div>
      )}
    </>
  );
}
