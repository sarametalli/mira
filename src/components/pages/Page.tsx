
function Page({ title, images, descriptions }: { title: string; images?: string[]; descriptions?: string[] }) {
    return (
        <div className="relative w-full h-full flex-shrink-0 bg-red-500 text-white text-3xl font-bold flex items-center justify-center">
            <h2 className="text-4xl mb-4">{title}</h2>
            {images} {/* TODO mostrare le immagini */}
            {descriptions} {/* TODO mostrare i titoli */}
            {/* TODO creare un pattern per mostrare immagini e descrizioni*/}
          </div>
    );
}

export default Page;