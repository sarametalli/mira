
function Page({ title, images, descriptions }: { title: string; images?: string[]; descriptions?: string[] }) {
    return (
        <div className="relative w-full h-full flex-shrink-0 bg-red-500 text-white text-3xl font-bold flex items-center justify-center">
            <h2 className="text-4xl mb-4">{title}</h2>
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
            {descriptions} {/* TODO mostrare le descrizioni */}
            {/* TODO creare un pattern per mostrare immagini e descrizioni*/}
          </div>
    );
}

export default Page;