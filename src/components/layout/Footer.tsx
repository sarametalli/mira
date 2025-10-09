import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
   
    <footer className="fixed bg-neutral-200 bottom-0 w-full py-[1%] flex justify-between items-center px-[5%] z-10">
      <div className="flex flex-col text-neutral-900"> 
        {/* posiziono due testi a sinistra, due bottoni (cliccabili) con testo a destra  */}
        <p>+39 123456789</p>
        <p>mira@email.com</p>
      </div>
      <div className="flex items-center space-x-6">
        {/* i bottoni sono sempre visibili, i testi scompaiono quando lo schermo è troppo piccolo*/}
        <button className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-950">
          <FaInstagram className="text-xl" />
          <span className="hidden sm:inline">mira_eventi</span>
        </button>
        <button className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-950">
          <FaTiktok className="text-xl" />
          <span className="hidden sm:inline">mira_eventi</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
