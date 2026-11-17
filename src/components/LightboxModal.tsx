"use client";

import { useEffect, useRef } from "react";
import { listingData as listing } from "@/data/listingData";

type LightboxModalProps = {
  index: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const focusableSelector =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path d="M12 16V3m0 0L7.5 7.5M12 3l4.5 4.5M5 12.5v6A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5v-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg aria-hidden="true" className="size-4" fill="none" viewBox="0 0 24 24">
      <path d="M20.84 8.94c0 5.5-8.84 10.31-8.84 10.31S3.16 14.44 3.16 8.94A4.44 4.44 0 0 1 12 6.6a4.44 4.44 0 0 1 8.84 2.34Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function LightboxModal({ index, onClose, onIndexChange }: LightboxModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const image = listing.images[index];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onIndexChange((index - 1 + listing.images.length) % listing.images.length);
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        onIndexChange((index + 1) % listing.images.length);
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, onClose, onIndexChange]);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#171717] text-white animate-[overlay-in_220ms_ease-out]" ref={dialogRef} role="dialog" aria-label="Photo viewer" aria-modal="true">
      <div className="flex h-20 shrink-0 items-center justify-between px-8">
        <button aria-label="Close photo viewer" className="rounded-full p-3 transition hover:bg-white/10" onClick={onClose} type="button">
          <CloseIcon />
        </button>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 text-sm font-semibold underline underline-offset-2" type="button">
            <ShareIcon />
            Share
          </button>
          <button className="flex items-center gap-2 text-sm font-semibold underline underline-offset-2" type="button">
            <HeartIcon />
            Save
          </button>
        </div>
      </div>
      <div aria-live="polite" className="flex min-h-0 flex-1 items-center justify-center gap-6 px-8 py-4">
        <button aria-label="Previous photo" className="shrink-0 rounded-full border border-white/70 p-3 transition hover:bg-white/10" onClick={() => onIndexChange((index - 1 + listing.images.length) % listing.images.length)} type="button">
          <ArrowIcon direction="left" />
        </button>
        <div className="flex h-full min-h-0 w-full items-center justify-center" key={image.alt}>
          <img alt={image.alt} className="max-h-full max-w-full object-cover animate-[photo-in_220ms_ease-out]" src={image.src} />
        </div>
        <button aria-label="Next photo" className="shrink-0 rounded-full border border-white/70 p-3 transition hover:bg-white/10" onClick={() => onIndexChange((index + 1) % listing.images.length)} type="button">
          <ArrowIcon direction="right" />
        </button>
      </div>
      <p className="pb-8 text-center text-sm" aria-label={`Photo ${index + 1} of ${listing.images.length}`}>
        {index + 1} / {listing.images.length}
      </p>
    </div>
  );
}