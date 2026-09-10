'use client';

import Image from 'next/image';
import type { Situation, View } from '@/app/_lib/types';

const bookBtn =
  'bg-[#F6CB96] text-[#241C18] border-none rounded-full px-7 py-4 font-bold text-[17px] cursor-pointer transition-all duration-[180ms] hover:bg-[#FAD8AE] hover:-translate-y-0.5 active:translate-y-px';

export default function HomeSection({
  situation,
  onPickNew,
  onPickExisting,
  onBook,
  onOpenPitch,
  onOpenClinic,
  onNavigate,
}: {
  situation: Situation;
  onPickNew: () => void;
  onPickExisting: () => void;
  onBook: () => void;
  onOpenPitch: (e: React.MouseEvent) => void;
  onOpenClinic: (e: React.MouseEvent) => void;
  onNavigate: (view: View) => void;
}) {
  const isNew = situation === 'new';
  const notNew = situation !== 'new';
  const isExisting = situation === 'existing';
  const notExisting = situation !== 'existing';

  return (
    <div className="animate-[numi-in_300ms_ease_both] flex flex-col gap-[76px]">
      <section className="relative overflow-hidden bg-[#241C18] rounded-[26px] p-[clamp(30px,5vw,68px)] grid [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-10 items-center mt-3">
        <div className="absolute -top-[140px] -right-[90px] w-[420px] h-[420px] rounded-full bg-[#2E251F] pointer-events-none" />
        <div className="relative flex flex-col gap-5 min-w-0">
          <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
            Build · Improve · Grow
          </span>
          <h1 className="font-bold text-[clamp(36px,5.6vw,62px)] leading-[1.04] tracking-[-0.025em] m-0 text-[#FBF5EF] text-pretty">
            Build. Improve. Grow.
            <br />
            <span className="font-serif italic font-normal text-[#F6CB96] tracking-[-0.01em]">
              Through technology.
            </span>
          </h1>
          <p className="text-[clamp(16.5px,1.6vw,19px)] leading-[1.6] m-0 max-w-[27em] text-[#D9CDC3]">
            NUMI helps businesses turn ideas into products — and makes existing
            businesses easier to run.
          </p>
          <div className="flex flex-col gap-[11px] items-start mt-2">
            <button
              onClick={onBook}
              className={bookBtn}
              style={{ fontWeight: 'bold' }}
            >
              Book a Free Discovery Call
            </button>
            <span className="text-[15px] text-[#A6968B]">
              No pitch. No jargon. Just a conversation.
            </span>
          </div>
        </div>
        <div className="relative flex justify-center min-w-0">
          <Image
            src="/numi-logo.svg"
            alt="NUMI"
            width={340}
            height={127}
            className="w-full max-w-[340px] h-auto animate-[numi-float_7s_ease-in-out_infinite]"
            priority
          />
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
          Two starting points
        </span>
        <h2 className="font-bold text-[clamp(27px,3.6vw,40px)] leading-[1.1] tracking-[-0.022em] m-0">
          Wherever you are, technology can help.
        </h2>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[18px] mt-1.5">
          <div
            onClick={onPickNew}
            className="bg-[#F6CB96] rounded-[22px] p-[30px] cursor-pointer flex flex-col gap-[15px] min-w-0 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(90,60,40,0.13)]"
          >
            <p className="font-extrabold text-[13px] tracking-[0.14em] uppercase m-0 text-[#4A3626] leading-[1.5]">
              Starting
              <br />
              something new
            </p>
            <div className="w-[44px] h-[3px] bg-[#241C18] rounded-full" />
            <p className="font-bold text-[clamp(20px,2.2vw,25px)] leading-[1.25] tracking-[-0.015em] m-0 text-[#241C18]">
              “I have an idea, and I don&apos;t know what it takes to build it.”
            </p>
            <p className="text-base leading-[1.7] m-0 text-[#5A4227]">
              “I need an MVP.”
              <br />
              “I have designs, but not a developer.”
              <br />
              “I don&apos;t know what to build first.”
            </p>
            {isNew && (
              <div className="flex flex-col gap-[14px] border-t border-[rgba(36,28,24,0.16)] pt-[18px] animate-[numi-in_240ms_ease_both]">
                <p className="text-[16.5px] leading-[1.65] m-0 text-[#33261C]">
                  We start by turning what&apos;s in your head into a plan: who
                  it&apos;s for, what it does, and what has to exist in version
                  one. Then we design it, build it, and launch it.
                </p>
                <p className="font-serif italic text-[18px] leading-[1.5] m-0 text-[#6B4A2A]">
                  Problem → Users → Journeys → Features → Scope → MVP
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  <button
                    onClick={onBook}
                    className="bg-[#241C18] text-[#FBF5EF] border-none rounded-full px-[21px] py-[13px] font-bold text-[15px] cursor-pointer transition-transform duration-[180ms] hover:-translate-y-0.5"
                  >
                    Book a Free Discovery Call
                  </button>
                  <button
                    onClick={onOpenPitch}
                    className="bg-transparent text-[#241C18] border-[1.5px] border-[rgba(36,28,24,0.3)] rounded-full px-[21px] py-[13px] font-semibold text-[15px] cursor-pointer transition-colors duration-[180ms] hover:bg-[rgba(255,255,255,0.45)]"
                  >
                    See a product we built →
                  </button>
                </div>
              </div>
            )}
            {notNew && (
              <span className="font-bold text-[15px] text-[#8A5A2E]">
                That&apos;s me →
              </span>
            )}
          </div>

          <div
            onClick={onPickExisting}
            className="bg-[#241C18] rounded-[22px] p-[30px] cursor-pointer flex flex-col gap-[15px] min-w-0 transition-all duration-200 hover:-translate-y-[3px] hover:shadow-[0_14px_30px_rgba(36,28,24,0.22)]"
          >
            <p className="font-extrabold text-[13px] tracking-[0.14em] uppercase m-0 text-[#F6CB96] leading-[1.5]">
              Running
              <br />
              something existing
            </p>
            <div className="w-[44px] h-[3px] bg-[#DE8B67] rounded-full" />
            <p className="font-bold text-[clamp(20px,2.2vw,25px)] leading-[1.25] tracking-[-0.015em] m-0 text-[#FBF5EF]">
              “It works, but the way it works is costing me time.”
            </p>
            <p className="text-base leading-[1.7] m-0 text-[#C6B8AD]">
              “We&apos;re doing too much manually.”
              <br />
              “Our systems don&apos;t talk to each other.”
              <br />
              “Everything depends on me.”
            </p>
            {isExisting && (
              <div className="flex flex-col gap-[14px] border-t border-[rgba(251,245,239,0.18)] pt-[18px] animate-[numi-in_240ms_ease_both]">
                <p className="text-[16.5px] leading-[1.65] m-0 text-[#E6DCD4]">
                  We walk your process end to end and find the seams — the
                  double entry, the copy-paste, the thing only you can do. Then
                  we connect, automate, or build, in that order.
                </p>
                <p className="font-serif italic text-[18px] leading-[1.5] m-0 text-[#F6CB96]">
                  Your business shouldn&apos;t need five tabs and a spreadsheet
                  to get one thing done.
                </p>
                <div className="flex flex-wrap gap-[10px]">
                  <button
                    onClick={onBook}
                    className="bg-[#F6CB96] text-[#241C18] border-none rounded-full px-[21px] py-[13px] font-bold text-[15px] cursor-pointer transition-transform duration-[180ms] hover:-translate-y-0.5"
                  >
                    Book a Free Discovery Call
                  </button>
                  <button
                    onClick={onOpenClinic}
                    className="bg-transparent text-[#FBF5EF] border-[1.5px] border-[rgba(251,245,239,0.35)] rounded-full px-[21px] py-[13px] font-semibold text-[15px] cursor-pointer transition-colors duration-[180ms] hover:bg-[rgba(251,245,239,0.1)]"
                  >
                    See a workflow we simplified →
                  </button>
                </div>
              </div>
            )}
            {notExisting && (
              <span className="font-bold text-[15px] text-[#DE8B67]">
                That&apos;s me →
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[18px]">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
          Our approach
        </span>
        <h2 className="font-bold text-[clamp(27px,3.6vw,40px)] leading-[1.1] tracking-[-0.022em] m-0">
          We don&apos;t start with technology.
          <br />
          <span className="font-serif italic font-normal text-[#C06A43]">
            We start with the problem.
          </span>
        </h2>
        <p className="text-[18px] leading-[1.7] m-0 max-w-[42em] text-[#5F534B]">
          Whether you&apos;re launching something new or improving something
          that already exists, NUMI first understands what you&apos;re trying to
          accomplish. Then we determine the right technology solution.
        </p>
        <div className="flex flex-wrap gap-[10px] items-center mt-1.5">
          <span className="bg-[#241C18] text-[#FBF5EF] rounded-full px-5 py-3 font-bold text-[15.5px] transition-transform duration-[180ms] hover:-translate-y-0.5">
            Your goal
          </span>
          <span className="text-[#C06A43] text-[17px]">→</span>
          <span className="bg-[#F6CB96] text-[#241C18] rounded-full px-5 py-3 font-bold text-[15.5px] transition-transform duration-[180ms] hover:-translate-y-0.5">
            What&apos;s in the way
          </span>
          <span className="text-[#C06A43] text-[17px]">→</span>
          <span className="bg-[#EDE6DE] text-[#2A211C] rounded-full px-5 py-3 font-bold text-[15.5px] transition-transform duration-[180ms] hover:-translate-y-0.5">
            The right build
          </span>
        </div>
        <button
          onClick={() => onNavigate('do')}
          className="self-start mt-[14px] bg-transparent text-[#241C18] border-[1.5px] border-[#DDD0C3] rounded-full px-[21px] py-[13px] font-semibold text-[15.5px] cursor-pointer transition-all duration-[180ms] hover:bg-[#F2E9E0] hover:-translate-y-0.5"
        >
          How we decide →
        </button>
      </section>
    </div>
  );
}
