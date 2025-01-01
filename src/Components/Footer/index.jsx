import { NavLink } from "react-router-dom";
import { FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcDiscover, FaCcAmex, FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { sectionsFooter } from "../../data/sectionsFooter";

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {sectionsFooter.map((section, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold mb-4">{section.title}</h2>
            <ul className="text-[#7f7f7f]">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-white text-sm mb-2">
                  <NavLink to={link.to}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About</h2>
          <p className="text-sm max-w-xs mb-4">This is a small description about the store. We offer a variety of products to cater to your needs.</p>
          <ul className="">
            <li className="flex items-center mb-2">
              <FaMapMarkedAlt className="mr-2 " />
              <a href="https://www.google.com/maps">1234 Street Name</a>
            </li>
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 " />
              <a href="tel:+123456789">+123456789</a>
            </li>
            <li className="flex items-center mb-2">
              <FaEnvelope className="mr-2 " />
              <a href="mailto:email@example.com">email@example.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/* Icons Section */}
      <div className="border-t border-white p-4 flex justify-center space-x-4">
        <FaCcMastercard className="w-10 h-auto" />
        <FaCcVisa className="w-10 h-auto" />
        <FaCcDiscover className="w-10 h-auto" />
        <FaCcPaypal className="w-10 h-auto" />
        <FaCcAmex className="w-10 h-auto" />
      </div>
      {/* Copyright Section */}
      <div className="text-center text-white">
        <p>2024 KiyoStore. Made with ❤️ in house.</p>
      </div>
    </footer>
  );
};
