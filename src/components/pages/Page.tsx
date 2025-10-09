
function Page({ title, images, descriptions }: { title: string; images?: string[]; descriptions?: string[] }) {
    return (
        <div className="relative w-full h-full flex-shrink-0 bg-red-500 text-white text-3xl font-bold flex items-center justify-center">
            {title}
            {images}
            {descriptions}
          </div>
    );
}

export default Page;