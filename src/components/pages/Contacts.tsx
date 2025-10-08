import MyImageData from "../MyImageData";

function Contacts() {
    return(
    <main className="flex-1 overflow-auto z-0">
        <div className="h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${MyImageData[0]})` }}>
          <div className=" flex bg-neutral-900 bg-opacity-20 w-[100%] py-[3%] justify-center">
            <h1 className=" text-neutral-950 text-3xl">Contattaci</h1>
            </div>
        </div>
      </main>
);
}

export default Contacts;