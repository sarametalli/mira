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
        {descriptions.map((desc, i) => {
          const hasFirstImage = !!images[i];
          const hasSecondImage = !!images[i + 1];

          // i pari -> immagine sinistra, descrizione destra
          if (i % 2 === 0) {
            return (
              <React.Fragment key={i}>
                {/* Colonna sinistra: una sola immagine (se c'è) */}
                <div className="flex justify-center gap-4">
                  {hasFirstImage && (
                    <img
                      src={images[i]}
                      alt={`immagine-${i}`}
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                  )}
                </div>

                {/* Colonna destra: descrizione */}
                <div className="flex items-center justify-center text-base font-normal text-center">
                  {desc && <p>{desc}</p>}
                </div>
              </React.Fragment>
            );
          }

          // i dispari -> descrizione sinistra, due immagini destra
          return (
            <React.Fragment key={i}>
              {/* Colonna sinistra: descrizione */}
              <div className="flex items-center justify-center text-base font-normal text-center">
                {desc && <p>{desc}</p>}
              </div>

              {/* Colonna destra: due immagini (o una sola se manca la seconda) */}
              <div className="flex justify-center gap-4">
                {hasFirstImage && (
                  <img
                    src={images[i]}
                    alt={`immagine-${i}`}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
                {hasSecondImage && (
                  <img
                    src={images[i + 1]}
                    alt={`immagine-${i + 1}`}
                    className="w-40 h-40 object-cover rounded-lg"
                  />
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
