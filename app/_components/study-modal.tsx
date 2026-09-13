'use client';

import type { Study } from '@/app/_lib/studies';

type Layout = 'story' | 'split';

const tabBtn = (active: boolean) =>
  `border-none rounded-full px-[15px] py-[9px] font-semibold text-sm cursor-pointer transition-colors duration-[180ms] ${
    active ? 'bg-white text-[#241C18]' : 'bg-transparent text-[#7A6C62]'
  }`;

const detailRow =
  'grid [grid-template-columns:minmax(0,190px)_minmax(0,1fr)] gap-x-[26px] gap-y-1.5 py-[22px] px-0.5 border-b border-[#E4D9CD]';

export default function StudyModal({
  study,
  layout,
  onClose,
  onLayoutStory,
  onLayoutSplit,
  onBook,
}: {
  study: Study;
  layout: Layout;
  onClose: () => void;
  onLayoutStory: () => void;
  onLayoutSplit: () => void;
  onBook: () => void;
}) {
  const isSplit = layout === 'split' && study.before.length > 0;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-80 bg-[rgba(36,28,24,0.4)] backdrop-blur-[3px] overflow-y-auto p-[18px] flex justify-center items-start"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FBF5EF] rounded-[26px] w-full max-w-[900px] p-[clamp(24px,4vw,46px)] my-[22px] animate-[numi-sheet_260ms_ease_both] shadow-[0_30px_80px_rgba(36,28,24,0.26)]"
      >
        <div className="flex flex-wrap gap-3 justify-between items-center mb-[26px]">
          <button
            onClick={onClose}
            className="bg-transparent border-[1.5px] border-[#DDD0C3] rounded-full px-[17px] py-[10px] font-semibold text-[14.5px] cursor-pointer text-[#241C18] transition-colors duration-[180ms] hover:bg-[#F2E9E0]"
          >
            ← All work
          </button>
          <div className="flex gap-1 bg-[#F1E8DE] rounded-full p-1">
            <button
              onClick={onLayoutStory}
              className={tabBtn(layout === 'story')}
            >
              Story
            </button>
            <button
              onClick={onLayoutSplit}
              className={tabBtn(layout === 'split')}
            >
              Before / After
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            <span className="font-extrabold text-[11px] tracking-[0.14em] uppercase bg-[#F3EBE2] text-[#6F6158] rounded-full px-3 py-[7px]">
              {study.kind}
            </span>
            <span className="font-extrabold text-[11px] tracking-[0.14em] uppercase bg-[#F9DFC4] text-[#8A5A2E] rounded-full px-3 py-[7px]">
              {study.tag}
            </span>
          </div>
          <h2 className="font-bold text-[clamp(26px,4vw,42px)] leading-[1.08] tracking-[-0.026em] m-0">
            {study.headline}
          </h2>
          <p className="font-serif italic text-[19px] m-0 text-[#C06A43]">
            {study.name}
          </p>
        </div>

        {isSplit && (
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-4 mb-8">
            <div className="bg-white border border-[#EBE1D6] rounded-[22px] p-6 min-w-0">
              <p className="font-extrabold text-[11.5px] tracking-[0.16em] uppercase text-[#8A7A6E] m-0 mb-4">
                Before
              </p>
              <div className="flex flex-col gap-2">
                {study.before.map((b, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.55] m-0 text-[#5F534B] bg-[#F7F1EA] rounded-xl px-[14px] py-3"
                  >
                    {b}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-[#241C18] rounded-[22px] p-6 min-w-0">
              <p className="font-extrabold text-[11.5px] tracking-[0.16em] uppercase text-[#DE8B67] m-0 mb-4">
                After
              </p>
              <div className="flex flex-col gap-2">
                {study.after.map((a, i) => (
                  <p
                    key={i}
                    className="text-base leading-[1.55] m-0 text-[#F3E9DF] bg-[#2E251F] rounded-xl px-[14px] py-3"
                  >
                    {a}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col border-t border-[#E4D9CD]">
          <div className={detailRow}>
            <p className="font-extrabold text-xs tracking-[0.16em] uppercase text-[#8A7A6E] m-0 pt-[5px]">
              The problem
            </p>
            <p className="text-[18px] leading-[1.7] m-0">{study.problem}</p>
          </div>
          <div className={detailRow}>
            <p className="font-extrabold text-xs tracking-[0.16em] uppercase text-[#8A7A6E] m-0 pt-[5px]">
              The approach
            </p>
            <p className="text-[18px] leading-[1.7] m-0">{study.approach}</p>
          </div>
          <div className={detailRow}>
            <p className="font-extrabold text-xs tracking-[0.16em] uppercase text-[#8A7A6E] m-0 pt-[5px]">
              What we built
            </p>
            <div className="flex flex-col gap-[10px]">
              {study.solution.map((item, i) => (
                <p key={i} className="text-[17.5px] leading-[1.65] m-0">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className={detailRow}>
            <p className="font-extrabold text-xs tracking-[0.16em] uppercase text-[#8A7A6E] m-0 pt-[5px]">
              What changed
            </p>
            <p className="text-[18px] leading-[1.7] m-0">
              {study.transformation}
            </p>
          </div>
          <div className={detailRow}>
            <p className="font-extrabold text-xs tracking-[0.16em] uppercase text-[#8A7A6E] m-0 pt-[5px]">
              Capabilities
            </p>
            <div className="flex flex-wrap gap-2">
              {study.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="font-semibold text-sm bg-white border border-[#EBE1D6] rounded-full px-[14px] py-[9px] text-[#4A403A]"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>

        {study.note && (
          <p className="text-base leading-[1.65] mt-5 mb-0 text-[#7A6C62] bg-[#F5EDE4] rounded-2xl px-5 py-[18px]">
            {study.note}
          </p>
        )}

        <div className="mt-8 pt-[26px] border-t border-[#E4D9CD] flex flex-wrap gap-4 items-center justify-between">
          <p className="font-bold text-[clamp(19px,2.2vw,25px)] leading-[1.25] tracking-[-0.018em] m-0 max-w-[20em]">
            Have something like this?
          </p>
          <button
            onClick={onBook}
            className="bg-[#241C18] text-[#FBF5EF] border-none rounded-full px-[25px] py-[15px] font-bold text-[16.5px] cursor-pointer transition-all duration-[180ms] hover:bg-[#3A2C24] hover:-translate-y-0.5"
          >
            Book a Free Discovery Call
          </button>
        </div>
      </div>
    </div>
  );
}
