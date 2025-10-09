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
  let rendered_images = 0;
  {/*TODO dividere il contenuto dalla pagina visualizzata in modo da adattare le dimensioni alla pagina */}
  const mainContent = descriptions.map((desc, i) => {
    const hasFirstImage = !!images[i];
    const hasSecondImage = !!images[i + 1];

    if (i % 2 === 0) {
      if (hasFirstImage) rendered_images++;
      return (
        <React.Fragment key={i}>
          <div className="flex justify-center gap-4">
            {hasFirstImage && (
              <img
                src={images[i]}
                alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                className="w-[50%] h-[50%] object-cover rounded-lg"
              />
            )}
          </div>
          <div className="flex items-center justify-center text-base font-normal text-center">
            {desc && <p>{desc}</p>}
          </div>
        </React.Fragment>
      );
    }

    if (hasFirstImage && hasSecondImage) rendered_images += 2;
    else if (hasFirstImage) rendered_images++;

    return (
      <React.Fragment key={i}>
        <div className="flex items-center justify-center text-base font-normal text-center">
          {desc && <p>{desc}</p>}
        </div>
        <div className="flex justify-center gap-4">
          {hasFirstImage && (
            <img
              src={images[i]}
              alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
              className="w-[40%] h-[40%] object-cover rounded-lg"
            />
          )}
          {hasSecondImage && (
            <img
              src={images[i + 1]}
              alt={`${images[i+1].substring(images[i+1].lastIndexOf("/") + 1).split(".")[0]}`}
              className="w-[40%] h-[40%] object-cover rounded-lg"
            />
          )}
        </div>
      </React.Fragment>
    );
  });

  // immagini rimaste
  const remainingImages = images.slice(rendered_images);

  return (
    <div className="relative w-full h-full flex-shrink-0 bg-neutral-100 text-neutral-900 text-3xl flex flex-col items-center justify-start overflow-y-auto p-10">
      <h2 className="text-4xl font-bold mb-8">{title}</h2>

      <div className="grid grid-cols-2 px-[5%] w-full gap-6">{mainContent}</div>

      {remainingImages.length > 0 && (
        <div className="mt-10 w-full flex flex-wrap justify-center gap-4">
          {remainingImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${images[idx].substring(images[idx].lastIndexOf("/") + 1).split(".")[0]}`}
              className="w-[] h-[] object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Page;
