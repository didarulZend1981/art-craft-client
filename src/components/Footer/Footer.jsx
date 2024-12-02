
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaDribbble } from 'react-icons/fa';

const Footer = () => {




  return (
    <div>
        <footer className="bg-purple-100 py-12 px-6 font-sans tracking-wide">
  <div className="flex flex-col items-center gap-6">
    {/* Social Media Icons */}
    <ul className="flex flex-wrap justify-center gap-x-7 gap-4">
      <li>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <FaFacebookF className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <FaLinkedinIn className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <FaInstagram className="w-7 h-7" />
        </a>
      </li>
      <li>
        <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-gray-400">
          <FaDribbble className="w-7 h-7" />
        </a>
      </li>
    </ul>

    {/* Divider */}
    <hr className="my-6 border-gray-300 w-full" />

    {/* Footer Links */}
    <ul className="text justify-center">
      <p class='text-center text-[black] text-base'>© Art & Craft. All rights reserved.</p>
    </ul>
  </div>
</footer>
    </div>
  );
};

export default Footer;