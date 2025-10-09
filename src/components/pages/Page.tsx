import React, { useState } from "react";
import PageContent from "./PageContent";

interface PageProps {
  title: string;
  images: string[];
  descriptions: string[];
}

const Page: React.FC<PageProps> = ({ title, images, descriptions }) => {
  const [renderedImages, setRenderedImages] = useState(0);

  // immagini rimaste
  const remainingImages = images.slice(renderedImages);

  return (
    <div className="relative bg-neutral-100 text-neutral-900 mb-[1%] text-3xl flex flex-col items-center justify-start overflow-y-auto">
      <h2 className="text-4xl font-bold mb-[2%]">{title}</h2>
      
      <PageContent
        images={images}
        descriptions={descriptions}
        onRenderedImages={(count) => setRenderedImages(count)}
      />

      {remainingImages.length > 0 && (
        <div className="mt-[3%] w-full flex flex-wrap justify-center gap-3">
          {remainingImages.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${img.substring(img.lastIndexOf("/") + 1).split(".")[0]}`}
          className="w-[25rem] h-[25rem] object-cover"
        />
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;
