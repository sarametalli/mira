
function Page({ title, images, descriptions }: { title: string; images?: string[]; descriptions?: string[] }) {
    return (
    <div className="relative w-full h-full flex-shrink-0 bg-red-500 text-white text-3xl flex flex-col items-center justify-start overflow-y-auto p-10">
           <h2 className="text-4xl font-bold mb-8">{title}</h2>
           <div className="grid grid-cols-2 px-[5%] w-full">

            {/*Mostra immagini */}
            {images && images.length > 0 && (
        <div className="flex gap-4 flex-wrap justify-center">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`immagine-${i}`}
              className="w-40 h-40 object-cover rounded-lg"
            />
          ))}
        </div>
      )}
      {/*Mostra descrizioni */}
            {descriptions && descriptions.length > 0 && (
        <div className="mt-4 text-base font-normal max-w-2xl text-center">
          {descriptions.map((desc, i) => (
            <p key={i} className="mb-2">
              {desc}
            </p>
          ))}
        </div>
      )}
           </div>
           
            
          </div>
    );
}

export default Page;