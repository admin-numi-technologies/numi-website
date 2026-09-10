"use client";

import type { Study } from "@/app/_lib/studies";

export default function WorkSection({
  studies,
  onOpenStudy,
}: {
  studies: Study[];
  onOpenStudy: (id: string) => void;
}) {
  return (
    <div className="animate-[numi-in_300ms_ease_both] flex flex-col gap-[30px] pt-4">
      <div className="flex flex-col gap-[14px]">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
          What we&apos;ve fixed
        </span>
        <h1 className="font-bold text-[clamp(32px,4.8vw,54px)] leading-[1.03] tracking-[-0.028em] m-0">
          Problems, and what changed.
        </h1>
        <p className="text-[18px] leading-[1.7] m-0 max-w-[38em] text-[#5F534B]">
          Every project starts as a business problem. Here&apos;s what was in the way, and what happened next.
        </p>
      </div>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(330px,1fr))] gap-[18px]">
        {studies.map((s) => (
          <div
            key={s.id}
            onClick={() => onOpenStudy(s.id)}
            className="bg-white border border-[#EBE1D6] rounded-[22px] p-7 cursor-pointer flex flex-col gap-[14px] min-w-0 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(90,60,40,0.1)] hover:border-[#DDCBB8]"
          >
            <div className="flex flex-wrap gap-2">
              <span className="font-extrabold text-[11px] tracking-[0.14em] uppercase bg-[#F3EBE2] text-[#6F6158] rounded-full px-3 py-[7px]">
                {s.kind}
              </span>
              <span className="font-extrabold text-[11px] tracking-[0.14em] uppercase bg-[#F9DFC4] text-[#8A5A2E] rounded-full px-3 py-[7px]">
                {s.tag}
              </span>
            </div>
            <p className="font-bold text-[clamp(19px,2vw,24px)] leading-[1.28] tracking-[-0.018em] m-0">
              {s.headline}
            </p>
            <p className="text-[16.5px] leading-[1.65] m-0 text-[#5F534B]">{s.teaser}</p>
            <div className="flex items-center justify-between gap-3 border-t border-[#EFE6DC] pt-[14px] mt-0.5">
              <span className="font-bold text-[14.5px] text-[#2A211C]">{s.name}</span>
              <span className="font-bold text-[14.5px] text-[#C06A43] whitespace-nowrap">Read the story →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
