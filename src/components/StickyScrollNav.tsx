"use client";

import { useEffect, useState } from "react";
import { listingData } from "@/data/listingData";

export default function StickyScrollNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 590);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav aria-label="Listing sections" className={`fixed inset-x-0 top-20 z-40 border-b border-[#dddddd] bg-white/95 backdrop-blur transition duration-300 ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-10">
        <a className="max-w-[300px] truncate text-sm font-semibold" href="#top">{listingData.title}</a>
        <div className="flex items-center gap-6 text-sm font-semibold">
          <a href="#photos">Photos</a><a href="#amenities">Amenities</a><a href="#reviews">Reviews</a><a href="#location">Location</a>
          <div className="flex items-center gap-3 rounded-xl border border-[#dddddd] bg-white px-4 py-2 shadow-md"><button aria-label={isSaved ? "Remove from saved" : "Save listing"} aria-pressed={isSaved} className="rounded-full p-2" onClick={() => setIsSaved((saved) => !saved)} type="button"><svg aria-hidden="true" className="h-5 w-5" fill={isSaved ? "#FF385C" : "none"} viewBox="0 0 24 24"><path d="M20.84 8.94c0 5.5-8.84 10.31-8.84 10.31S3.16 14.44 3.16 8.94A4.44 4.44 0 0 1 12 6.6a4.44 4.44 0 0 1 8.84 2.34Z" stroke={isSaved ? "#FF385C" : "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg></button><span>₹28,499</span><a className="rounded-lg bg-[#FF385C] px-4 py-2 text-white" href="#reserve">Reserve</a></div>
        </div>
      </div>
    </nav>
  );
}