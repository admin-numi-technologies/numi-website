"use client";

const ladderRow =
  "grid [grid-template-columns:minmax(0,200px)_minmax(0,1fr)] gap-x-6 gap-y-1 px-1 py-[18px] border-b border-[#E4D9CD] transition-all duration-[180ms] hover:bg-[#F5EDE4] hover:pl-3";

export default function DoSection({ onBook }: { onBook: () => void }) {
  return (
    <div className="animate-[numi-in_300ms_ease_both] flex flex-col gap-16 pt-4">
      <section className="flex flex-col gap-[18px]">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
          What NUMI does
        </span>
        <h1 className="font-bold text-[clamp(32px,4.8vw,54px)] leading-[1.03] tracking-[-0.028em] m-0">
          Build. Modernize. Grow.
        </h1>
        <div className="flex flex-col gap-3 mt-1.5">
          <div className="bg-[#F6CB96] rounded-[18px] px-7 py-6 grid [grid-template-columns:minmax(0,190px)_minmax(0,1fr)] gap-x-6 gap-y-1.5 items-baseline transition-transform duration-200 hover:translate-x-1">
            <p className="font-extrabold text-[15px] tracking-[0.13em] uppercase m-0 text-[#241C18]">Build</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#4A3626]">
              Turn ideas into digital products and software — from definition and UX through launch.
            </p>
          </div>
          <div className="bg-[#DE8B67] rounded-[18px] px-7 py-6 grid [grid-template-columns:minmax(0,190px)_minmax(0,1fr)] gap-x-6 gap-y-1.5 items-baseline transition-transform duration-200 hover:translate-x-1">
            <p className="font-extrabold text-[15px] tracking-[0.13em] uppercase m-0 text-[#241C18]">
              Modernize
            </p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#3A241A]">
              Improve the workflows, systems, and operations a business already runs on.
            </p>
          </div>
          <div className="bg-[#241C18] rounded-[18px] px-7 py-6 grid [grid-template-columns:minmax(0,190px)_minmax(0,1fr)] gap-x-6 gap-y-1.5 items-baseline transition-transform duration-200 hover:translate-x-1">
            <p className="font-extrabold text-[15px] tracking-[0.13em] uppercase m-0 text-[#F6CB96]">Grow</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#D9CDC3]">
              Add automation, integrations, and infrastructure for whatever comes next.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-[18px]">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
          How we solve it
        </span>
        <h2 className="font-bold text-[clamp(26px,3.4vw,38px)] leading-[1.1] tracking-[-0.022em] m-0 max-w-[26em]">
          The right solution isn&apos;t always a custom app.
        </h2>
        <div className="flex flex-col mt-2 border-t border-[#E4D9CD]">
          <div className={ladderRow}>
            <p className="font-extrabold text-[14.5px] tracking-[0.13em] uppercase m-0">Connect</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#5F534B]">
              Use the tools you already have, wired together properly.
            </p>
          </div>
          <div className={ladderRow}>
            <p className="font-extrabold text-[14.5px] tracking-[0.13em] uppercase m-0">Enhance</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#5F534B]">
              Automate, integrate, and extend what&apos;s already working.
            </p>
          </div>
          <div className={ladderRow}>
            <p className="font-extrabold text-[14.5px] tracking-[0.13em] uppercase m-0">Build</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#5F534B]">
              Create custom software when the right solution doesn&apos;t already exist.
            </p>
          </div>
        </div>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(270px,1fr))] gap-4 mt-[10px]">
          <div className="bg-[#F6CB96] rounded-[18px] px-6 py-[22px] min-w-0">
            <p className="font-extrabold text-[11.5px] tracking-[0.16em] uppercase text-[#6B4A2A] m-0 mb-[10px]">
              A legitimate NUMI solution
            </p>
            <p className="font-bold text-[19px] leading-[1.4] m-0 text-[#241C18]">
              Shopify + Calendly + Stripe + automation
            </p>
          </div>
          <div className="bg-[#241C18] rounded-[18px] px-6 py-[22px] min-w-0">
            <p className="font-extrabold text-[11.5px] tracking-[0.16em] uppercase text-[#DE8B67] m-0 mb-[10px]">
              Also a legitimate NUMI solution
            </p>
            <p className="font-bold text-[19px] leading-[1.4] m-0 text-[#FBF5EF]">
              Custom web application + database + APIs
            </p>
          </div>
        </div>
        <p className="font-serif italic text-[20px] leading-[1.55] mt-3 mb-0 max-w-[34em] text-[#6B4A2A]">
          We choose the technology based on the problem — not the other way around.
        </p>
        <button
          onClick={onBook}
          className="self-start mt-[10px] bg-[#241C18] text-[#FBF5EF] border-none rounded-full px-[25px] py-[15px] font-bold text-[16.5px] cursor-pointer transition-all duration-[180ms] hover:bg-[#3A2C24] hover:-translate-y-0.5"
        >
          Book a Free Discovery Call
        </button>
      </section>
    </div>
  );
}
