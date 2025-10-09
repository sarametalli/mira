import { useState, useRef, useEffect } from "react";
import { Wedding, Birthday, BabyBirthday } from '../MyImageData';
import Page from "./Page";
import { WeddingData, BirthdayData, WeddingTitle, BirthdayTitle, BabyBirthdayData, BabyBirthdayTitle } from "../MyTextData";

const pages = [
  { title: WeddingTitle, images: Wedding, descriptions: WeddingData },
  { title: BirthdayTitle, images: Birthday, descriptions: BirthdayData },
  { title: BabyBirthdayTitle, images: BabyBirthday, descriptions: BabyBirthdayData },
];

function Homepage() {
  const [page, setPage] = useState(0);
  const totalPages = pages.length;

  // Per altezza dinamica
  const [height, setHeight] = useState<number | undefined>(undefined);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    // Misura l'altezza appena la pagina viene renderizzata
    setHeight(el.offsetHeight);
  }, [page]);

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  }

  return (
    <div
      className="relative w-full overflow-hidden flex items-start justify-center p-[5%]"
      style={height ? { height, transition: "height 0.5s" } : undefined}
    >
      <div className="w-full pt-[3%]" ref={wrapperRef}>
        <Page
          title={pages[page].title}
          images={pages[page].images}
          descriptions={pages[page].descriptions}
        />
      </div>

      {/* Bottoni laterali */}
      {page > 0 && (
        <button
          onClick={prevPage}
          className="
            fixed left-0 top-0 bottom-0 flex items-center justify-center
            px-4 text-4xl font-bold text-neutral-700
            hover:bg-neutral-700 hover:bg-opacity-20 hover:text-neutral-900
            transition-colors
          "
        >
          ‹
        </button>
      )}
      {page < totalPages - 1 && (
        <button
          onClick={nextPage}
          className="
            fixed right-0 top-0 bottom-0 flex items-center justify-center
            px-4 text-4xl font-bold text-neutral-700
            hover:bg-neutral-700 hover:bg-opacity-20 hover:text-neutral-900
            transition-colors
          "
        >
          ›
        </button>
      )}
    </div>
  );
}

export default Homepage;