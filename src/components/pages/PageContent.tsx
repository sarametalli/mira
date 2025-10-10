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
            <div className="flex justify-center gap-4 items-center px-[1%]">
              {hasFirstImage && (
                <div className="aspect-square w-[50%] h-auto flex items-center justify-center overflow-hidden rounded-md">
                  <img
                    src={images[i]}
                    alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="flex items-center font-p justify-center text-base text-center px-[3%] text-cblack">
              {desc && <p>{desc}</p>}
            </div>
          </React.Fragment>
        );
      }

      if (hasFirstImage && hasSecondImage) count += 2;
      else if (hasFirstImage) count++;

      return (
        <React.Fragment key={i}>
          <div className="flex items-center justify-center text-base font-p text-center px-[7%] text-cblack">
            {desc && <p>{desc}</p>}
          </div>
          <div className="flex justify-center gap-4 items-center px-[1%]">
            {hasFirstImage && (
              <img
                src={images[i]}
                alt={`${images[i].substring(images[i].lastIndexOf("/") + 1).split(".")[0]}`}
                className="aspect-square w-[40%] h-auto flex items-start justify-center overflow-hidden rounded-md"
              />
            )}
            {hasSecondImage && (
              <img
                src={images[i + 1]}
                alt={`${images[i + 1].substring(images[i + 1].lastIndexOf("/") + 1).split(".")[0]}`}
                className="aspect-square w-[55%] h-auto flex items-start justify-center overflow-hidden rounded-md"
              />
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