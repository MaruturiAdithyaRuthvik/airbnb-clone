"use client";

import { useState } from "react";
import ListingBody from "@/components/ListingBody";
import ListingHeader from "@/components/ListingHeader";
import LightboxModal from "@/components/LightboxModal";
import PhotoGrid from "@/components/PhotoGrid";
import PhotoTourModal from "@/components/PhotoTourModal";
import StickyScrollNav from "@/components/StickyScrollNav";

export default function ListingPage() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <main aria-label="Listing page" className="listing-shell min-h-screen bg-white px-12 pb-8 pt-28 text-[#222222]" id="top">
      <StickyScrollNav />
      <div className="mx-auto max-w-[1120px]">
        <ListingHeader />
        <div id="photos"><PhotoGrid onImageClick={setLightboxIndex} onShowAllPhotos={() => setIsPhotoTourOpen(true)} /></div>
        <ListingBody />
      </div>
      {isPhotoTourOpen && <PhotoTourModal onClose={() => setIsPhotoTourOpen(false)} onImageClick={setLightboxIndex} />}
      {lightboxIndex !== null && <LightboxModal index={lightboxIndex} onClose={() => setLightboxIndex(null)} onIndexChange={setLightboxIndex} />}
    </main>
  );
}