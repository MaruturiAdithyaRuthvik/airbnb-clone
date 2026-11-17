"use client";

import { useEffect, useRef, useState } from "react";
import { listingData as listing } from "@/data/listingData";

type PhotoTourModalProps = { onClose: () => void; onImageClick: (index: number) => void };
const focusableSelector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Icon({ children }: { children: React.ReactNode }) { return <span aria-hidden="true" className="h-5 w-5">{children}</span>; }
function BackIcon() { return <svg fill="none" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /></svg>; }
function ShareIcon() { return <svg fill="none" viewBox="0 0 24 24"><path d="M12 16V3m0 0L7.5 7.5M12 3l4.5 4.5M5 12.5v6A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5v-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }
function HeartIcon() { return <svg fill="none" viewBox="0 0 24 24"><path d="M20.84 8.94c0 5.5-8.84 10.31-8.84 10.31S3.16 14.44 3.16 8.94A4.44 4.44 0 0 1 12 6.6a4.44 4.44 0 0 1 8.84 2.34Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg>; }

export default function PhotoTourModal({ onClose, onImageClick }: PhotoTourModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [activeCategory, setActiveCategory] = useState(listing.photoTourCategories[0].id);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.querySelector<HTMLElement>(focusableSelector)?.focus();
    const scrollElement = scrollRef.current;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveCategory(visible.target.id);
    }, { root: scrollElement, threshold: [0.2, 0.5, 0.8], rootMargin: "-10% 0px -45%" });
    Object.values(sectionRefs.current).forEach((section) => section && observer.observe(section));

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") { onClose(); return; }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = previousOverflow; observer.disconnect(); document.removeEventListener("keydown", handleKeyDown); };
  }, [onClose]);

  const openLightbox = (src: string) => {
    const imageIndex = listing.images.findIndex((image) => image.src.split("?")[0] === src.split("?")[0]);
    onImageClick(imageIndex >= 0 ? imageIndex : 0);
  };
  const scrollToCategory = (id: string) => sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="fixed inset-0 z-[50] flex h-screen flex-col bg-white text-[#222222] animate-[overlay-in_220ms_ease-out]" ref={dialogRef} role="dialog" aria-label="Photo tour" aria-modal="true">
      <nav className="sticky top-0 z-20 flex h-20 shrink-0 items-center justify-between border-b border-[#dddddd] bg-white/95 px-8 backdrop-blur">
        <button aria-label="Back to listing" className="flex items-center gap-2 text-sm font-semibold" onClick={onClose} type="button"><Icon><BackIcon /></Icon>Back</button>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-base font-semibold">Photo tour</h1>
        <div className="flex items-center gap-5"><button className="flex items-center gap-2 text-sm font-semibold underline underline-offset-2" type="button"><Icon><ShareIcon /></Icon>Share</button><button className="flex items-center gap-2 text-sm font-semibold underline underline-offset-2" type="button"><Icon><HeartIcon /></Icon>Save</button></div>
      </nav>
      <div className="shrink-0 border-b border-[#eeeeee] bg-white px-8 py-5">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto pb-1">
          {listing.photoTourCategories.map((category) => <button aria-current={category.id === activeCategory} className={`w-32 shrink-0 text-left ${category.id === activeCategory ? "font-semibold" : "text-[#717171]"}`} key={category.id} onClick={() => { setActiveCategory(category.id); scrollToCategory(category.id); }} type="button"><img alt={`${category.title} thumbnail`} className={`mb-2 h-16 w-24 rounded-lg object-cover shadow-sm opacity-70 transition-opacity hover:opacity-100 ${category.id === activeCategory ? "border-2 border-black opacity-100" : ""}`} src={category.thumbnail} /><span className="block text-sm">{category.title}</span></button>)}
        </div>
      </div>
      <div className="mx-auto grid min-h-0 w-full max-w-7xl flex-1 grid-cols-[260px_minmax(0,1fr)] gap-16 px-10 py-10">
        <aside className="sticky top-32 h-fit self-start"><h2 className="text-3xl font-semibold leading-tight">{listing.photoTourCategories.find((category) => category.id === activeCategory)?.title}</h2><p className="mt-4 leading-7 text-[#717171]">{listing.photoTourCategories.find((category) => category.id === activeCategory)?.subtitle}</p></aside>
        <div className="min-h-0 overflow-y-auto pr-3" ref={scrollRef}>
          <div className="space-y-16 pb-16">
            {listing.photoTourCategories.map((category) => <section className="scroll-mt-8" id={category.id} key={category.id} ref={(element) => { sectionRefs.current[category.id] = element; }}><h2 className="mb-5 text-2xl font-semibold">{category.title}</h2><div className="grid grid-cols-2 gap-4">{category.images.map((src, index) => <button aria-label={`Open ${category.title} photo ${index + 1}`} className="group block cursor-pointer overflow-hidden rounded-xl bg-[#f7f7f7] text-left first:col-span-2" key={src} onClick={() => openLightbox(src)} type="button"><img alt={`${category.title} ${index + 1}`} className="h-[360px] w-full cursor-pointer object-cover transition duration-500 group-hover:scale-[1.02] group-hover:brightness-90" src={src} /></button>)}</div></section>)}
          </div>
        </div>
      </div>
    </div>
  );
}
