import { useState } from "react";
import { Wedding, Birthday, BabyBirthday } from '../MyImageData';
import Page from "./Page";
import { WeddingData, BirthdayData, WeddingTitle, BirthdayTitle, BabyBirthdayData, BabyBirthdayTitle } from "../MyTextData";

function Homepage() {
  const [page, setPage] = useState(0);
  const totalPages = 3;

  {/* funzioni per scorrere le pagine */}
  const nextPage = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  }

    return(
    <div className="relative w-full h-[90vh] bg-slate-800 overflow-hidden flex items-center justify-center">
      {/* Un contenitore principale contiene 3 pagine */}
      <div
        className="relative w-full h-[90vh]"
        // style={{ perspective: "1200px" }}
      >
        <div
          className="absolute w-full h-full flex transition-transform duration-2000 ease-in-out transform-style-preserve-3d"
          style={{
            transform: `translateX(-${page * 100}%)`,
          }}
        >
          {/* Pagina 1 */}
          <Page title={BirthdayTitle} images={Birthday} descriptions={BirthdayData}/>

          {/* Pagina 2 */}
          <Page title={WeddingTitle} images={Wedding} descriptions={WeddingData}/>
          {/* Pagina 3 */}
          <Page title={BabyBirthdayTitle} images={BabyBirthday} descriptions={BabyBirthdayData}/>
        </div>
      </div>

    <div
      className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
    >
      {/* Bottone sinistro */}
      {page > 0 && (
        <button
          onClick={prevPage}
          className="absolute left-4 md:left-10 text-white text-4xl font-bold bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full px-4 py-2 transition-all"
        >
          ‹
        </button>
      )}
      {/* Bottone destro */}
      {page < totalPages - 1 && (
        <button
          onClick={nextPage}
          className="absolute right-4 md:right-10 text-white text-4xl font-bold bg-black bg-opacity-30 hover:bg-opacity-50 rounded-full px-4 py-2 transition-all"
        >
          ›
        </button>
      )}
    </div>
  </div>
);
}

export default Homepage;