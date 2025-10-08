import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-100 fixed bottom-0 w-full py-[1%] flex justify-between items-center px-[5%]">
      <div className="flex flex-col text-neutral-900">
        <p>+39 123456789</p>
        <p>mira@email.com</p>
      </div>
      <div className="flex items-center space-x-6">
        <button className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-950">
          <FaInstagram className="text-xl" />
          <span>mira_eventi</span>
        </button>
        <button className="flex items-center space-x-2 text-neutral-900 hover:text-neutral-950">
          <FaTiktok className="text-xl" />
          <span>mira_eventi</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
