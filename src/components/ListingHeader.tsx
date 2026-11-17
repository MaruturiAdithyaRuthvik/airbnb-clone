"use client";

import { useState } from "react";
import { listingData as listing } from "@/data/listingData";

function StarIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
      <path d="m12 2.75 2.86 5.8 6.4.93-4.63 4.52 1.1 6.38L12 17.37l-5.73 3.01 1.1-6.38-4.63-4.52 6.4-.93L12 2.75Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path d="M12 16V3m0 0L7.5 7.5M12 3l4.5 4.5M5 12.5v6A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5v-6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

function HeartIcon({ isSaved }: { isSaved: boolean }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill={isSaved ? "#FF385C" : "none"} viewBox="0 0 24 24">
      <path d="M20.84 8.94c0 5.5-8.84 10.31-8.84 10.31S3.16 14.44 3.16 8.94A4.44 4.44 0 0 1 12 6.6a4.44 4.44 0 0 1 8.84 2.34Z" stroke={isSaved ? "#FF385C" : "currentColor"} strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" />
    </svg>
  );
}

export default function ListingHeader() {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <header className="mb-6 border-b border-[#dddddd] pb-6">
      <h1 className="text-[32px] font-semibold tracking-tight text-[#222222] leading-tight">
        {listing.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-6 text-sm text-[#717171]">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1 font-semibold">
            <StarIcon />
            {listing.rating}
          </span>
          <span aria-hidden="true">·</span>
          <a className="font-semibold underline" href="#reviews">
            {listing.reviewCount} reviews
          </a>
          <span aria-hidden="true">·</span>
          <a className="font-semibold underline" href="#location">
            {listing.location}
          </a>
        </div>
        <div className="flex items-center gap-5">
          <button className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold underline underline-offset-2 hover:bg-[#f7f7f7]" type="button">
            <ShareIcon />
            Share
          </button>
          <button aria-pressed={isSaved} className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold underline underline-offset-2 hover:bg-[#f7f7f7]" onClick={() => setIsSaved((saved) => !saved)} type="button">
            <HeartIcon isSaved={isSaved} />
            {isSaved ? "Saved" : "Save"}
          </button>
        </div>
      </div>
    </header>
  );
}