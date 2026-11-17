export type ListingImage = { src: string; alt: string };
export type PhotoTourCategory = { id: string; title: string; subtitle: string; thumbnail: string; images: string[] };

export type ListingData = {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
  hostName: string;
  summary: string;
  hostAvatar: string;
  images: ListingImage[];
  photoTourCategories: PhotoTourCategory[];
  amenities: { name: string; unavailable?: boolean }[];
  nightlyPrice: number;
  totalPrice: number;
  stay: { checkIn: string; checkOut: string; nights: number };
  highlights: { title: string; detail: string }[];
  sleepSpaces: { title: string; image: ListingImage }[];
  reviews: { quote: string; name: string; date: string; rating: number }[];
  hostBio: string;
  nearbyStays: { title: string; location: string; price: string; image: ListingImage }[];
};

export const listingData: ListingData = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  rating: 4.95,
  reviewCount: 19,
  location: "Candolim, Goa, India",
  hostName: "Mirashya Homes",
  summary: "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors...",
  hostAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
  images: [
    { src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80", alt: "Living room" },
    { src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80", alt: "Living room seating" },
    { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", alt: "Bedroom" },
    { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", alt: "Bedroom details" },
    { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80", alt: "Full kitchen" },
  ],
  photoTourCategories: [
    {
      id: "living-room",
      title: "Living room",
      subtitle: "Sofa · Air conditioning · TV",
      thumbnail: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80",
      ],
    },
    {
      id: "bedroom",
      title: "Bedroom",
      subtitle: "Queen bed · Linens · Air conditioning",
      thumbnail: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "kitchen",
      title: "Full kitchen",
      subtitle: "Refrigerator · Cooking basics · Dining area",
      thumbnail: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "bathroom",
      title: "Full bathroom",
      subtitle: "Jacuzzi · Hot water · Private space",
      thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "gym",
      title: "Gym",
      subtitle: "Fitness equipment · Shared space · Exercise area",
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "pool",
      title: "Pool",
      subtitle: "Shared outdoor pool · Lounge area · Sun loungers",
      thumbnail: "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1572331165267-854da2b10ccc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=80",
      ],
    },
    {
      id: "additional-photos",
      title: "Additional photos",
      subtitle: "Thoughtful details · Stylish interiors · Candolim stay",
      thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      images: [
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
      ],
    },
  ],
  amenities: [
    { name: "Wifi" }, { name: "Free parking" }, { name: "Private jacuzzi" }, { name: "Kitchen" }, { name: "Air conditioning" },
    { name: "Dedicated workspace" }, { name: "TV" }, { name: "Washer" }, { name: "Carbon monoxide alarm", unavailable: true }, { name: "Smoke alarm", unavailable: true },
  ],
  nightlyPrice: 5699.8,
  totalPrice: 28499,
  stay: { checkIn: "10/18/2026", checkOut: "10/23/2026", nights: 5 },
  highlights: [
    { title: "Outdoor entertainment", detail: "Enjoy the private jacuzzi and outdoor space." },
    { title: "Designed for staying cool", detail: "Beat the heat with air conditioning." },
    { title: "Self check-in", detail: "Check yourself in with the smart lock." },
  ],
  sleepSpaces: [
    { title: "Bedroom", image: { src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80", alt: "Bedroom with a comfortable bed" } },
    { title: "Living room", image: { src: "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80", alt: "Living room sleeping area" } },
  ],
  reviews: [
    { quote: "Beautiful stay, spotless space, and the jacuzzi was perfect.", name: "Rahul", date: "August 2026", rating: 5 },
    { quote: "The location is wonderful and the host was very responsive.", name: "Ananya", date: "July 2026", rating: 5 },
    { quote: "A comfortable and romantic place for a weekend in Goa.", name: "Vikram", date: "June 2026", rating: 5 },
    { quote: "Exactly as pictured, with thoughtful touches throughout.", name: "Priya", date: "May 2026", rating: 5 },
    { quote: "Easy check-in and a very relaxing stay.", name: "Neha", date: "April 2026", rating: 5 },
    { quote: "Would happily stay here again.", name: "Arjun", date: "March 2026", rating: 5 },
  ],
  hostBio: "Mirashya Homes welcomes guests to thoughtfully designed stays in Goa. We are here to make your visit comfortable, easy, and memorable.",
  nearbyStays: [
    { title: "Cozy studio with pool", location: "Candolim, Goa", price: "₹4,200 night", image: { src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80", alt: "Cozy studio" } },
    { title: "Beachside apartment", location: "Calangute, Goa", price: "₹5,100 night", image: { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80", alt: "Beachside apartment" } },
    { title: "Modern stay near the sea", location: "Sinquerim, Goa", price: "₹6,000 night", image: { src: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=600&q=80", alt: "Modern stay" } },
  ],
};