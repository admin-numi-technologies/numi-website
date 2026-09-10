"use client";

const SKILLS = [
  "Web Applications",
  "Software Development",
  "UX/UI",
  "Integrations",
  "Automation",
  "AI",
  "APIs",
  "Databases",
];

export default function AboutSection({
  onBook,
  onOpenSnap,
}: {
  onBook: () => void;
  onOpenSnap: () => void;
}) {
  return (
    <div className="animate-[numi-in_300ms_ease_both] flex flex-col gap-14 pt-4">
      <section className="grid [grid-template-columns:repeat(auto-fit,minmax(290px,1fr))] gap-[30px] items-start">
        <div className="flex flex-col gap-4 min-w-0">
          <span className="font-extrabold text-xs tracking-[0.2em] uppercase text-[#DE8B67]">
            Who you&apos;d be working with
          </span>
          <h1 className="font-bold text-[clamp(32px,4.8vw,52px)] leading-[1.03] tracking-[-0.028em] m-0">
            Addy Hebou
          </h1>
          <p className="font-serif italic text-[21px] m-0 text-[#C06A43]">Founder &amp; Lead Developer, NUMI</p>
          <p className="text-[18px] leading-[1.7] m-0 max-w-[32em] text-[#4A403A]">
            I build web and mobile products, internal tools, and the systems businesses run on. Before NUMI, I
            spent my time building software used by a lot of people at once — which is mostly where I learned
            to ask what a thing is for before building it.
          </p>
          <p className="text-[16.5px] leading-[1.6] m-0 text-[#5F534B]">
            B.S. Computer Science — New York University, Tandon School of Engineering
          </p>
          <div className="flex flex-wrap gap-2 mt-1.5">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="font-semibold text-sm bg-white border border-[#EBE1D6] rounded-full px-[14px] py-[9px] text-[#4A403A]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[14px] min-w-0">
          <div
            className="border border-[#EBE1D6] rounded-[22px] aspect-[4/5] flex items-end p-[18px]"
            style={{
              background:
                "repeating-linear-gradient(135deg, #F3EBE2 0 10px, #F8F2EA 10px 20px)",
            }}
          >
            <span className="font-mono text-xs text-[#7A6C62] bg-white/85 rounded-full px-3 py-[7px]">
              photo of addy
            </span>
          </div>
          <div className="bg-white border border-[#EBE1D6] rounded-[22px] p-6 flex flex-col gap-4">
            <p className="font-extrabold text-[11.5px] tracking-[0.16em] uppercase text-[#8A7A6E] m-0">
              Previously — employment, not client work
            </p>
            <div>
              <p className="font-bold text-[17.5px] m-0 mb-1">Snap Inc. — Software Engineer</p>
              <p className="text-base leading-[1.6] m-0 text-[#5F534B]">
                Snapchat for Web, My AI, and Snap Ads. Web experiences and shared UI systems.
              </p>
            </div>
            <div>
              <p className="font-bold text-[17.5px] m-0 mb-1">Sandia National Laboratories — Software Engineer</p>
              <p className="text-base leading-[1.6] m-0 text-[#5F534B]">
                Built 200+ internal web pages and raised accessibility compliance from 35% to 95%.
              </p>
            </div>
            <button
              onClick={onOpenSnap}
              className="self-start bg-transparent text-[#241C18] border-[1.5px] border-[#DDD0C3] rounded-full px-[17px] py-[11px] font-semibold text-[14.5px] cursor-pointer transition-all duration-[180ms] hover:bg-[#F5EDE4] hover:-translate-y-0.5"
            >
              What that work involved →
            </button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#241C18] rounded-[26px] p-[clamp(30px,4.6vw,60px)] flex flex-col gap-[18px] items-start">
        <div className="absolute -bottom-[170px] -left-[70px] w-[380px] h-[380px] rounded-full bg-[#2E251F] pointer-events-none" />
        <h2 className="relative font-bold text-[clamp(27px,4vw,44px)] leading-[1.06] tracking-[-0.025em] m-0 max-w-[22em] text-[#FBF5EF]">
          Let&apos;s build something <span className="font-serif italic font-normal text-[#F6CB96]">better.</span>
        </h2>
        <p className="relative text-[18.5px] leading-[1.65] m-0 text-[#D9CDC3] max-w-[32em]">
          Have an idea? Have a business that&apos;s becoming harder to run? Let&apos;s figure out what technology
          can do about it.
        </p>
        <button
          onClick={onBook}
          className="relative bg-[#F6CB96] text-[#241C18] border-none rounded-full px-7 py-4 font-bold text-[17px] cursor-pointer transition-all duration-[180ms] hover:bg-[#FAD8AE] hover:-translate-y-0.5 active:translate-y-px"
        >
          Book a Free Discovery Call
        </button>
        <span className="relative text-[15.5px] text-[#A6968B]">No pitch. No jargon. Just a conversation.</span>
      </section>
    </div>
  );
}
