import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';

export const SubscribeSection = () => {
  return (
    <section className="border-t-2 border-t-[#E4E7ED] py-10 px-5">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Join Our List For New Product & Exclusive Promotions!
        </h2>
        <div className="flex justify-center items-center ">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto  h-10 px-4 py-2 border border-gray-300 rounded-l-lg outline-none hover:border-[#ffba00] focus:border-[#ffba00]"
          />
          <button className="w-auto md:w-auto h-10  px-6 py-2 bg-gradient-to-r from-[#ffba00] to-[#ff6c00] text-white font-bold rounded-r-lg transition duration-300 flex items-center">
            <span className="mr-2">Subscribe</span>
            <FaEnvelope className="w-4 h-4"/>
          </button>
        </div>
        <div className="flex justify-center items-center mt-6 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaFacebook className="w-6 h-6"/>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <FaTwitter className="w-6 h-6"/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600 transition duration-300">
            <FaInstagram className="w-6 h-6"/>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-600 transition duration-300">
            <FaYoutube className="w-6 h-6"/>
          </a>
        </div>
      </div>
    </section>
  );
};
