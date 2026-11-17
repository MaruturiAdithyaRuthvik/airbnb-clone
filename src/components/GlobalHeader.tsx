function AirbnbLogo() {
  return (
    <svg aria-hidden="true" className="h-8 w-8" fill="#FF385C" viewBox="0 0 32 32">
      <path d="M16 3.5c-2.7 0-4.8 2.2-6.6 5.3L4.8 17c-2.1 3.7-.3 8.2 3.8 9.2 3.2.8 5.9-1 7.4-4.1 1.5 3.1 4.2 4.9 7.4 4.1 4.1-1 5.9-5.5 3.8-9.2l-4.6-8.2C20.8 5.7 18.7 3.5 16 3.5Zm0 5.1c.9 0 1.9 1.4 3.3 3.9l4.6 8.2c.9 1.6.2 3.6-1.6 4.1-2.1.5-3.8-1.3-4.8-3.7L16 18.4l-1.5 2.7c-1 2.4-2.7 4.2-4.8 3.7-1.8-.5-2.5-2.5-1.6-4.1l4.6-8.2c1.4-2.5 2.4-3.9 3.3-3.9Z" />
    </svg>
  );
}

function SearchIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" /><path d="m16 16 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" /></svg>;
}

function GlobeIcon() {
  return <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" /><path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5S14.2 18.1 12 20.5C9.8 18.1 8.8 15.3 8.8 12S9.8 5.9 12 3.5Z" stroke="currentColor" strokeWidth="1.3" /></svg>;
}

function MenuIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" /></svg>;
}

export default function GlobalHeader() {
  return (
    <header className="global-header fixed inset-x-0 top-0 z-50 h-20 border-b border-[#dddddd] bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-10">
        <a className="flex items-center gap-2 text-[22px] font-bold tracking-[-0.04em] text-[#FF385C]" href="#top" aria-label="Airbnb home"><AirbnbLogo /><span>airbnb</span></a>
        <button aria-label="Anywhere | Anytime | Add guests" className="search-pill group flex h-12 items-center gap-4 rounded-full border border-[#dddddd] bg-white px-5 text-sm text-[#222222] shadow-sm transition-shadow hover:shadow-md focus-visible:shadow-md" type="button">
          <span className="font-semibold">Anywhere</span><span className="h-5 border-l border-[#dddddd]" /><span>Anytime</span><span className="h-5 border-l border-[#dddddd]" /><span>Add guests</span><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF385C] text-white transition group-hover:scale-105"><SearchIcon /></span>
        </button>
        <div className="flex items-center gap-5 text-sm font-semibold">
          <a className="rounded-full px-4 py-3 transition hover:bg-[#f7f7f7]" href="#reserve">Become a host</a>
          <button aria-label="Choose language and region" className="rounded-full p-3 transition hover:bg-[#f7f7f7]" type="button"><GlobeIcon /></button>
          <button aria-label="Open account menu" className="flex items-center gap-3 rounded-full border border-[#dddddd] p-2 pl-3 shadow-sm transition hover:scale-[1.02] hover:shadow-md" type="button"><MenuIcon /><span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-[#dddddd] bg-[#f1d9d2] text-xs font-semibold text-[#222222]">MH</span></button>
        </div>
      </div>
    </header>
  );
}
