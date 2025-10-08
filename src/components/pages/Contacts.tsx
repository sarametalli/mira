import MyImageData from "../MyImageData";

function Contacts() {
    return(
      <>
      {/* Immagine con scritta */}
    <main className="flex-1 overflow-auto z-0">
        <div className="h-96 bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${MyImageData[0]})` }}>
          <div className=" flex bg-neutral-900 bg-opacity-20 w-[100%] py-[3%] justify-center">
            <h1 className=" text-neutral-950 text-3xl">Contattaci</h1>
            </div>
        </div>
      </main>
    <div className="py-[4%]">
      {/* Prima parte del form: nome e cognome */}
      <div className="flex row pt-[3%] mx-[2rem] justify-center">
        <div className="flex flex-col px-[2%]">
            <label htmlFor="nome" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Nome</label>
            <input type="text" id="nome" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
            <div className="flex flex-col px-[2%]">
            <label htmlFor="cognome" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Cognome</label>
            <input type="text" id="cognome" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        </div>
        {/* Seconda parte del form: email e telefono */}
        <div className="flex row pt-[3%] mx-[2rem] justify-center">
        <div className="flex flex-col px-[2%]">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Email</label>
            <input type="text" id="email" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@email.it" required />
        </div>
            <div className="flex flex-col px-[2%]">
            <label htmlFor="telefono" className="block mb-2 text-sm font-medium text-neutral-900 dark:text-white">Telefono</label>
            <input type="text" id="telefono" className="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+39 111 222 3333" />
        </div>
        </div>
      </div>
        </>
);
}

export default Contacts;