import { useState, useRef, useEffect } from "react";
import { Wedding, Birthday, BabyBirthday } from '../MyImageData';
import Page from "./Page";
import { WeddingData, BirthdayData, WeddingTitle, BirthdayTitle, BabyBirthdayData, BabyBirthdayTitle } from "../MyTextData";

function Homepage() {
  const [page, setPage] = useState(0);
  const totalPages = 3;

  // per altezza dinamica
  const [height, setHeight] = useState(0);
  const pageRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  }

  useEffect(() => {
    const currentRef = pageRefs[page].current;
    if (currentRef) {
      setHeight(currentRef.offsetHeight);
    }
  }, [page]);

  return (
    <div
      className="relative w-full overflow-hidden flex items-start justify-center"
      style={{ height }}
    >
      {/* Container slides */}
      <div className="w-full pt-[3%]">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          <div ref={pageRefs[0]} className="flex-shrink-0 w-full">
            <Page title={WeddingTitle} images={Wedding} descriptions={WeddingData}/>
          </div>
          <div ref={pageRefs[1]} className="flex-shrink-0 w-full">
            <Page title={BirthdayTitle} images={Birthday} descriptions={BirthdayData}/>
          </div>
          <div ref={pageRefs[2]} className="flex-shrink-0 w-full">
            <Page title={BabyBirthdayTitle} images={BabyBirthday} descriptions={BabyBirthdayData}/>
          </div>
        </div>
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
