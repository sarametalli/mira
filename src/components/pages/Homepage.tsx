import { useState } from "react";

function Homepage() {
  const [page, setPage] = useState(0);
  const totalPages = 3;

  {/* funzioni per scorrere le pagine */}
  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  }

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  }

    return(
    <div className="relative w-full h-[80vh] bg-slate-800">
    <input
      className="hidden peer/slider1 checkbox"
      type="radio"
      name="slider"
      id="slider1"
      checked
    />
    <input
      className="hidden peer/slider2 checkbox"
      type="radio"
      name="slider"
      id="slider2"
    />
    <input
      className="hidden peer/slider3 checkbox"
      type="radio"
      name="slider"
      id="slider3"
    />

    <div
      className="relative w-[300vw] h-[100%] flex transition-all duration-500 ease-in-out peer-checked/slider1:-left-0 peer-checked/slider2:-left-[100vw] peer-checked/slider3:-left-[200vw]"
    >
      <div className="relative w-full h-full flex bg-red-500">

      </div>
      <div className="relative w-full h-full flex bg-amber-500"></div>
      <div className="relative w-full h-full flex bg-emerald-500"></div>
    </div>

    <div
      className="absolute w-full flex justify-center gap-2 bottom-12 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:opacity-100 peer-[&_label:nth-of-type(1)]/slider1:peer-checked/slider1:w-10 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:opacity-100 peer-[&_label:nth-of-type(2)]/slider2:peer-checked/slider2:w-10 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:opacity-100 peer-[&_label:nth-of-type(3)]/slider3:peer-checked/slider3:w-10"
    >
    </div>
  </div>
);
}

export default Homepage;