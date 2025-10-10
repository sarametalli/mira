import { party } from "../MyImageData";

function Contacts() {
  return (
    <>
    <div className="pb-[5%]">
      {/* Immagine in alto */}
      <main className="flex-1 overflow-auto z-0">
        <div
          className="h-96 bg-cover bg-center flex items-center justify-center bg-primary bg-blend-darken"
          style={{ backgroundImage: `url(${party })` }}
        >
          <div className="flex bg-cblack bg-opacity-35 w-full py-[5%] justify-center">
            <h1 className="text-cwhite text-4xl font-titles">Contattaci</h1>
          </div>
        </div>
      </main>

      {/* Form sotto, diviso in due colonne */}
      <div className="py-10 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-8 bg-cwhite">
        {/* Colonna sinistra: nome, cognome, email, telefono */}
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="nome"
                className="block mb-2 text-sm font-titles text-cblack dark:text-cwhite"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                placeholder="John"
                className="bg-hoverwhite border border-darkgrey text-cblack text-sm rounded-lg block w-full p-2.5 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-cwhite dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="cognome"
                className="block mb-2 text-sm font-titles text-cblack dark:text-cwhite"
              >
                Cognome
              </label>
              <input
                type="text"
                id="cognome"
                placeholder="Doe"
                className="bg-hoverwhite border border-darkgrey text-cblack text-sm rounded-lg block w-full p-2.5 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-cwhite dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                required
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-titles text-cblack dark:text-cwhite"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="email@email.it"
                className="bg-hoverwhite border border-darkgrey text-cblack text-sm rounded-lg block w-full p-2.5 focus:ring-neutral-500 focus:border-neutral-500 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-cwhite dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
                required
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="telefono"
                className="block mb-2 text-sm font-titles text-cblack dark:text-cwhite"
              >
                Telefono
              </label>
              <input
                type="text"
                id="telefono"
                placeholder="+39 111 222 3333"
                className="bg-hoverwhite border border-darkgrey text-cblack text-sm rounded-lg block w-full p-2.5 focus:ring-cblack focus:border-cblack dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-cwhite dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
              />
            </div>
            
          </div>

        </div>

        {/* Colonna destra: messaggio */}
        <div className="flex flex-col gap-6">
          <div>
            <label
              htmlFor="messaggio"
              className="block mb-2 text-sm font-titles text-cblack dark:text-cwhite"
            >
              Messaggio
            </label>
            <textarea
              id="messaggio"
              rows={8}
              placeholder="Scrivi qui il tuo messaggio..."
              className="bg-hoverwhite border border-darkgrey text-cblack text-sm rounded-lg block w-full p-2.5 focus:ring-cblack focus:border-cblack dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-cwhite dark:focus:ring-neutral-500 dark:focus:border-neutral-500"
            />
          </div>
  
        </div>  
      </div>
      <div className="flex justify-center">
<button className="bg-primary hover:bg-secondary w-[60%] sm:w-[10%] md:w-[25%] lg:w-[15%] p-2 rounded-full text-cblack text-p md:text-base shadow-md hover:shadow-lg">    Invia
  </button>
</div>
</div>
    </>
  );
}

export default Contacts;
