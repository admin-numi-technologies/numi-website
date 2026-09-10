"use client";

const STEPS = [
  { n: "01", title: "Discover", desc: "Understand your business, idea, users, and goals." },
  { n: "02", title: "Define", desc: "Identify requirements and what needs to be built or improved." },
  { n: "03", title: "Design", desc: "Create the experience, workflow, and technical solution." },
  { n: "04", title: "Implement", desc: "Connect, enhance, configure, or build the technology." },
  { n: "05", title: "Launch", desc: "Test, launch, train, and support." },
];

export default function ProcessSection() {
  return (
    <div className="animate-[numi-in_300ms_ease_both] flex flex-col gap-[26px] pt-4">
      <div className="flex flex-col gap-[14px]">
        <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">Process</span>
        <h1 className="font-bold text-[clamp(32px,4.8vw,54px)] leading-[1.03] tracking-[-0.028em] m-0">
          A clear path from problem to solution.
        </h1>
        <p className="text-[18px] leading-[1.7] m-0 max-w-[36em] text-[#5F534B]">
          Nobody starts coding on day one.
        </p>
      </div>
      <div className="flex flex-col border-t border-[#E4D9CD]">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className="grid [grid-template-columns:54px_minmax(0,170px)_minmax(0,1fr)] gap-x-5 gap-y-1 items-baseline px-1 py-5 border-b border-[#E4D9CD] transition-all duration-[180ms] hover:bg-[#F5EDE4] hover:pl-3"
          >
            <span className="font-bold text-[15px] text-[#DE8B67]">{step.n}</span>
            <p className="font-extrabold text-[15px] tracking-[0.13em] uppercase m-0">{step.title}</p>
            <p className="text-[17px] leading-[1.6] m-0 text-[#5F534B]">{step.desc}</p>
          </div>
        ))}
      </div>
      <p className="font-serif italic text-[20px] leading-[1.55] mt-1.5 mb-0 text-[#6B4A2A] max-w-[34em]">
        Not every project needs every step. The method flexes to the solution.
      </p>
    </div>
  );
}
