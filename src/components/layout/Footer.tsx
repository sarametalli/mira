import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
   
    <footer className="bg-darkneutral bottom-0 w-full py-[1%] flex justify-between items-center px-[5%] z-10">
      <div className="flex flex-col text-cblack font-p text-base"> 
        {/* posiziono due testi a sinistra, due bottoni (cliccabili) con testo a destra  */}
        <p>+39 123456789</p>
        <p>mira@email.com</p>
      </div>
      <div className="flex items-center space-x-6">
        {/* i bottoni sono sempre visibili, i testi scompaiono quando lo schermo è troppo piccolo*/}
        <button className="flex items-center space-x-2 text-cblack hover:text-hoverblack">
          <FaInstagram className="text-xl" />
          <span className="hidden sm:inline font-p">mira_eventi</span>
        </button>
        <button className="flex items-center space-x-2 text-cblack hover:text-hoverblack">
          <FaTiktok className="text-xl" />
          <span className="hidden sm:inline font-p">mira_eventi</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
