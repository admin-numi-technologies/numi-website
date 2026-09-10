"use client";

export default function BookingModal({
  calendlySrc,
  onClose,
}: {
  calendlySrc: string;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-90 bg-[rgba(36,28,24,0.46)] backdrop-blur-md p-4 flex items-center justify-center">
      <div className="bg-[#FBF5EF] rounded-[24px] w-full max-w-[980px] h-[min(88vh,860px)] overflow-hidden flex flex-col animate-[numi-sheet_240ms_ease_both] shadow-[0_30px_80px_rgba(36,28,24,0.3)]">
        <div className="flex items-center justify-between gap-[14px] pt-[18px] pr-[18px] pb-[14px] pl-[26px] border-b border-[#EBE1D6]">
          <div className="flex flex-col gap-[3px] min-w-0">
            <p className="font-bold text-[19px] m-0">Free discovery call</p>
            <p className="text-[15px] m-0 text-[#7A6C62]">No pitch. No jargon. Just a conversation.</p>
          </div>
          <button
            onClick={onClose}
            className="bg-transparent border-[1.5px] border-[#DDD0C3] rounded-full w-10 h-10 text-lg cursor-pointer text-[#241C18] shrink-0 transition-colors duration-[180ms] hover:bg-[#F2E9E0]"
          >
            ×
          </button>
        </div>
        <iframe
          src={calendlySrc}
          title="Book a discovery call"
          className="border-none w-full flex-1 bg-[#FBF5EF]"
        />
      </div>
    </div>
  );
}
