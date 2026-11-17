"use client";

import { useState } from "react";
import { listingData } from "@/data/listingData";

function StarRow({ count = 5 }: { count?: number }) {
  return <span aria-label={`${count} out of 5 stars`} className="tracking-[2px]">{"★".repeat(count)}</span>;
}

function BookingCard() {
  return (
    <aside className="sticky top-28 rounded-xl border border-[#dddddd] bg-white p-6 shadow-xl" id="reserve">
      <div className="flex items-baseline gap-1"><span className="text-2xl font-bold">₹{listingData.totalPrice.toLocaleString("en-IN")}</span><span className="text-base text-[#717171]">for {listingData.stay.nights} nights</span></div>
      <div className="mt-6 grid grid-cols-2 overflow-hidden rounded-lg border border-[#b0b0b0] text-xs">
        <div className="border-b border-r border-[#b0b0b0] p-3"><p className="font-bold uppercase">Check-in</p><p className="mt-1 text-sm">{listingData.stay.checkIn}</p></div>
        <div className="border-b border-[#b0b0b0] p-3"><p className="font-bold uppercase">Checkout</p><p className="mt-1 text-sm">{listingData.stay.checkOut}</p></div>
        <div className="col-span-2 p-3"><p className="font-bold uppercase">Guests</p><p className="mt-1 text-sm">1 guest</p></div>
      </div>
      <button className="mt-4 h-12 w-full rounded-lg bg-gradient-to-r from-[#e31c5f] to-[#bd1e59] text-base font-semibold text-white transition hover:brightness-95" type="button">Reserve</button>
      <p className="mt-4 text-center text-base text-[#717171]">You won&apos;t be charged yet</p>
      <div className="mt-6 space-y-3 border-t border-[#eeeeee] pt-5 text-sm"><div className="flex justify-between"><span>₹{listingData.nightlyPrice.toLocaleString("en-IN")} x 5 nights</span><span>₹28,499</span></div><div className="flex justify-between font-semibold"><span>Total before taxes</span><span>₹28,499</span></div></div>
    </aside>
  );
}

function Calendar() {
  const [monthOffset, setMonthOffset] = useState(0);
  const [checkInDate, setCheckInDate] = useState<string | null>(null);
  const [checkOutDate, setCheckOutDate] = useState<string | null>(null);
  const months = [
    { label: "October 2026", year: 2026, month: 9, days: 31, firstDay: 4 },
    { label: "November 2026", year: 2026, month: 10, days: 30, firstDay: 0 },
  ];
  const selectDate = (date: string) => {
    if (checkInDate === null || checkOutDate !== null) {
      setCheckInDate(date);
      setCheckOutDate(null);
    } else if (new Date(date) < new Date(checkInDate)) {
      setCheckInDate(date);
    } else {
      setCheckOutDate(date);
    }
  };
  const isInRange = (date: string) => checkInDate !== null && checkOutDate !== null && new Date(date) > new Date(checkInDate) && new Date(date) < new Date(checkOutDate);

  return <section className="border-t border-[#dddddd] py-10" id="calendar"><div className="flex items-center justify-between"><div><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Select dates</h2><p className="mt-2 text-base text-[#717171]">Add your travel dates for exact pricing</p></div><div className="flex gap-2"><button aria-label="Previous month" className="rounded-full border p-2 disabled:opacity-30" disabled={monthOffset === 0} onClick={() => setMonthOffset(0)} type="button">←</button><button aria-label="Next month" className="rounded-full border p-2 disabled:opacity-30" disabled={monthOffset === 1} onClick={() => setMonthOffset(1)} type="button">→</button></div></div><div className="mt-7 grid grid-cols-2 gap-10">{months.slice(monthOffset, monthOffset + 2).map((month) => <div key={month.label}><h3 className="text-center font-semibold">{month.label}</h3><div className="mt-5 grid grid-cols-7 text-center text-sm text-[#222222]">{["S", "M", "T", "W", "T", "F", "S"].map((day, index) => <span className="pb-3 text-xs font-semibold text-[#717171]" key={`${day}-${index}`}>{day}</span>)}{Array.from({ length: month.firstDay + month.days }, (_, index) => { const dateNumber = index - month.firstDay + 1; if (dateNumber < 1) return <div aria-hidden="true" className="h-8" key={`blank-${index}`} />; const date = `${month.year}-${String(month.month + 1).padStart(2, "0")}-${String(dateNumber).padStart(2, "0")}`; const isSelected = date === checkInDate || date === checkOutDate; return <button aria-label={`${month.label} ${dateNumber}`} className={`flex h-8 w-full cursor-pointer items-center justify-center ${isSelected ? "rounded-full bg-black text-white" : isInRange(date) ? "bg-gray-100" : "rounded-full hover:border hover:border-[#222222]"}`} key={date} onClick={() => selectDate(date)} type="button">{dateNumber}</button>; })}</div></div>)}</div></section>;
}

export default function ListingBody() {
  return <div className="listing-body mt-12 grid grid-cols-[minmax(0,65fr)_minmax(320px,33fr)] items-start justify-between gap-10"><div className="listing-detail text-[#222222]">
    <section className="border-b border-[#dddddd] py-8"><div className="flex items-center gap-4"><img alt={listingData.hostName} className="h-16 w-16 rounded-full object-cover" src={listingData.hostAvatar} /><div><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Hosted by {listingData.hostName}</h2><p className="mt-1 text-base text-[#717171]">Superhost · 4 years hosting</p></div></div></section>
    <section className="border-b border-[#dddddd] py-8"><div className="rounded-xl border border-[#dddddd] p-5"><div className="flex items-center gap-4"><div className="text-2xl">♛</div><div><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Guest favourite</h2><p className="mt-1 text-base text-[#717171]">One of the most loved homes on Airbnb</p></div><div className="ml-auto text-right text-sm font-semibold">4.95 <StarRow /> <span className="block font-normal text-[#717171]">19 Reviews</span></div></div></div></section>
    <section className="border-b border-[#dddddd] py-8"><div className="rounded-xl bg-[#fff1f4] p-6"><div className="flex items-center justify-between"><div><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Get 10% off your next stay</h2><p className="mt-2 text-base text-[#484848]">Claim this special offer when you book again.</p></div><button className="rounded-lg border border-[#222222] px-5 py-2 text-sm font-semibold" type="button">Claim</button></div></div></section>
    <section className="border-b border-[#dddddd] py-8"><div className="space-y-6">{listingData.highlights.map((highlight, index) => <div className="flex items-center gap-4" key={highlight.title}><span aria-hidden="true" className="flex size-8 shrink-0 items-center justify-center text-xl">{["☼", "❄", "⌂"][index]}</span><div><h3 className="font-medium">{highlight.title}</h3><p className="mt-1 text-base text-[#717171]">{highlight.detail}</p></div></div>)}</div></section>
    <section className="border-b border-[#dddddd] py-8"><div className="mb-8 border-b border-[#eeeeee] pb-8"><p className="text-base font-medium text-[#222222]">Some info has been automatically translated. <button className="underline" type="button">Show original</button></p><p className="mt-4 text-base leading-7 text-[#484848]">{listingData.summary}</p></div><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Where you&apos;ll sleep</h2><div className="mt-5 grid grid-cols-2 gap-4">{listingData.sleepSpaces.map((space) => <div className="overflow-hidden rounded-xl border border-[#dddddd]" key={space.title}><div className="h-44 bg-[#f7f7f7]"><img alt={space.image.alt} className="size-full object-cover" src={space.image.src} /></div><p className="p-4 font-semibold">{space.title}</p></div>)}</div></section>
    <section className="border-b border-[#dddddd] py-8" id="amenities"><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">What this place offers</h2><div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">{listingData.amenities.map((amenity) => <div className={`flex items-center gap-4 text-base ${amenity.unavailable ? "text-[#717171] line-through" : ""}`} key={amenity.name}><span aria-hidden="true" className="text-xl">{amenity.unavailable ? "⊘" : "⌂"}</span>{amenity.name}</div>)}</div><button className="mt-8 rounded-lg border border-[#222222] px-5 py-3 text-sm font-semibold" type="button">Show all 10 amenities</button></section>
    <Calendar />
    <section className="border-b border-[#dddddd] py-8" id="reviews"><div className="flex items-center gap-4"><span aria-hidden="true" className="flex h-6 w-6 items-center justify-center text-3xl">♛</span><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Guest favourite</h2></div><p className="mt-3 text-base text-[#717171]">This home is in the top 10% of eligible listings based on ratings, reviews, and reliability.</p><div className="mt-8 grid grid-cols-2 gap-x-10 gap-y-8">{listingData.reviews.map((review) => <article key={review.name}><StarRow count={review.rating} /><p className="mt-3 text-base leading-6">“{review.quote}”</p><p className="mt-3 text-base font-semibold">{review.name} <span className="font-normal text-[#717171]">· {review.date}</span></p></article>)}</div></section>
    <section className="border-b border-[#dddddd] py-8" id="location"><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Where you&apos;ll be</h2><p className="mt-3 text-base text-[#717171]">{listingData.location}</p><div className="w-full h-[400px] bg-[#F3F4F6] rounded-xl flex items-center justify-center mt-6"><span className="text-[#222222] font-medium">Map preview - Candolim</span></div></section>
    <section className="border-b border-[#dddddd] py-8"><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Meet your host</h2><div className="mt-5 rounded-xl border p-6"><div className="flex items-center gap-5"><img alt={listingData.hostName} className="h-20 w-20 rounded-full object-cover" src={listingData.hostAvatar} /><div><h3 className="text-lg font-semibold">Mirashya Homes</h3><p className="mt-1 text-base text-[#717171]">Superhost · 19 reviews · 4 years hosting</p></div></div><p className="mt-6 max-w-2xl text-base leading-7 text-[#484848]">{listingData.hostBio}</p></div></section>
    <section className="border-t border-[#dddddd] py-10"><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Things to know</h2><div className="mt-6 grid grid-cols-3 gap-6 text-base"><div><h3 className="font-semibold">House rules</h3><p className="mt-3 text-base text-[#484848]">Check-in after 2:00 PM<br />Checkout before 11:00 AM</p></div><div><h3 className="font-semibold">Safety & property</h3><p className="mt-3 text-base text-[#484848]">Smoke alarm unavailable<br />Carbon monoxide alarm unavailable</p></div><div><h3 className="font-semibold">Cancellation policy</h3><p className="mt-3 text-base text-[#484848]">Review the host&apos;s cancellation policy before booking.</p></div></div></section>
    <section className="border-t border-[#dddddd] py-10"><h2 className="text-2xl font-semibold tracking-tight text-[#222222]">Nearby stays</h2><div className="mt-5 flex gap-4 overflow-hidden">{listingData.nearbyStays.map((stay) => <article className="w-48 shrink-0" key={stay.title}><div className="h-36 rounded-xl bg-[#f7f7f7]"><img alt={stay.image.alt} className="size-full rounded-xl object-cover" src={stay.image.src} /></div><h3 className="mt-3 text-sm font-semibold">{stay.title}</h3><p className="mt-1 text-base text-[#717171]">{stay.location}</p><p className="mt-1 text-base font-medium">{stay.price}</p></article>)}</div></section>
  </div><BookingCard /></div>;
}
