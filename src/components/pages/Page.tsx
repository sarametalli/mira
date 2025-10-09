import React from "react";

function Page({
  title,
  images,
  descriptions,
}: {
  title: string;
  images: string[];
  descriptions: string[];
}) {
  return (
    <div className="relative w-full h-full flex-shrink-0 bg-red-500 text-white text-3xl flex flex-col items-center justify-start overflow-y-auto p-10">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>

      <div className="grid grid-cols-2 px-[5%] w-full gap-6">
        {descriptions.map((desc, i) => (
          <React.Fragment key={i}>
            {/* Colonna 1: immagini */}
            <div className="flex justify-center gap-4">
              {/* se i è pari e ci sono almeno due immagini successive */}
              {i % 2 === 1 && i + 1 < images.length ? (
                <>
                  <img
                    src={images[i]}
                    alt={`immagine-${i}`}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                  <img
                    src={images[i + 1]}
                    alt={`immagine-${i + 1}`}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                </>
              ) : (
                /* altrimenti, mostra una sola immagine se esiste */
                images[i] && (
                  <img
                    src={images[i]}
                    alt={`immagine-${i}`}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )
              )}
            </div>

            {/* Colonna 2: descrizione */}
            <div className="flex items-center justify-center text-base font-normal text-center">
              {desc && <p>{desc}</p>}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Page;
