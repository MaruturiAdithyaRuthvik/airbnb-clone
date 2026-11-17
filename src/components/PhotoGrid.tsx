import { listingData as listing } from "@/data/listingData";

type PhotoGridProps = {
  onShowAllPhotos: () => void;
  onImageClick: (index: number) => void;
};

export default function PhotoGrid({ onShowAllPhotos, onImageClick }: PhotoGridProps) {
  return (
    <section aria-label="Property photos" className="photo-grid grid h-[520px] grid-cols-2 gap-2 overflow-hidden rounded-2xl">
      <button className="group relative overflow-hidden rounded-l-2xl text-left" onClick={() => onImageClick(0)} type="button">
        <img
          alt={listing.images[0].alt}
          className="h-full w-full cursor-pointer object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
          onClick={(event) => {
            event.stopPropagation();
            onShowAllPhotos();
          }}
          src={listing.images[0].src}
        />
      </button>
      <div className="grid grid-cols-2 grid-rows-2 gap-2">
        {listing.images.slice(1).map((image, index) => (
          <div className="group relative overflow-hidden" key={image.alt}>
            <button className="h-full w-full text-left" onClick={() => onImageClick(index + 1)} type="button">
              <img
                alt={image.alt}
                className="h-full w-full cursor-pointer object-cover transition duration-300 group-hover:scale-[1.03] group-hover:brightness-90"
                onClick={(event) => {
                  event.stopPropagation();
                  onShowAllPhotos();
                }}
                src={image.src}
              />
            </button>
            {index === 3 && (
              <button
                className="absolute bottom-6 right-6 rounded-full border border-[#222222] bg-white px-4 py-2 text-sm font-semibold text-[#222222] shadow-card hover:-translate-y-0.5 hover:shadow-md"
                onClick={onShowAllPhotos}
                type="button"
              >
                Show all photos
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}