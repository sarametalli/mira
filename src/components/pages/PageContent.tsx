import React, { useEffect, useMemo } from "react";

interface PageContentProps {
  images: string[];
  descriptions: string[];
  onRenderedImages?: (count: number) => void;
}

const PageContent: React.FC<PageContentProps> = ({ images, descriptions, onRenderedImages }) => {
  const { mainContent, renderedImages } = useMemo(() => {
    let count = 0;
    const content = descriptions.map((desc, i) => {
      const hasFirstImage = !!images[i];
      const hasSecondImage = !!images[i + 1];
      if (i % 2 === 0) {
        if (hasFirstImage) count++;
        return (
          <React.Fragment key={i}>
            <div className="flex gap-4 items-center px-[1%]">
              {hasFirstImage && (
              i === 0 ? (
                <div className="relative w-[90%] h-auto flex items-center justify-center">
                    <img
                      src={images[i]}
                      alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                      className="w-full h-full object-cover mix-blend-multiply rounded-md aspect-square"
                    />
                    <div className="absolute inset-0 bg-primary opacity-10 rounded-md"></div>
                  </div>
              ) : (
                <div className="relative aspect-square w-[70%] h-auto flex items-center justify-center sm:w-[50%] ml-[45%] overflow-hidden rounded-md">
                  <img
                    src={images[i]}
                    alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                    className="w-full h-full object-cover mix-blend-multiply"
                  />
                  <div className="absolute inset-0 bg-primary opacity-10"></div>
                </div>
              )
            )}

            </div>
        <div className="flex items-center font-p justify-center text-sm sm:text-base text-center px-[3%] text-darkbrown">
              {desc && <p>{desc}</p>}
            </div>
          </React.Fragment>
        );
      }

      if (hasFirstImage && hasSecondImage) count += 2;
      else if (hasFirstImage) count++;

      return (
        <React.Fragment key={i}>
        <div className="flex items-center font-p justify-center text-xs sm:text-base text-center px-[3%] text-darkbrown">
            {desc && <p>{desc}</p>}
          </div>

          <div className="flex justify-center gap-4 items-center px-[1%] py-[1%]">
            {hasFirstImage && (
              <div className="relative aspect-square w-[40%] h-auto flex items-start justify-center overflow-hidden rounded-md">
                <img
                  src={images[i]}
                  alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                  className="w-full h-full object-cover mix-blend-multiply rotate-15"
                />
                <div className="absolute inset-0 bg-primary opacity-10"></div>
              </div>
            )}
            {hasSecondImage && (
              <div className="relative aspect-square w-[55%] h-auto flex items-start justify-center overflow-hidden rounded-md">
                <img
                  src={images[i + 1]}
                  alt={`${images[i + 1].substring(images[i + 1].lastIndexOf("/") + 1).split(".")[0]}`}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-primary opacity-10"></div>
              </div>
            )}
          </div>
        </React.Fragment>
      );
    });
    return { mainContent: content, renderedImages: count };
  }, [images, descriptions]);

  // Chiama la callback solo dopo il render
  useEffect(() => {
    if (onRenderedImages) onRenderedImages(renderedImages);
  }, [renderedImages, onRenderedImages]);

  return <div className="grid grid-cols-2 px-[2%] w-full gap-6">{mainContent}</div>;
};

export default PageContent;
