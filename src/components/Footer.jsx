import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-sky-600 to-sky-200 py-8 px-6" id="pageFooter">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-left md:text-left"> 
          <h5 className="text-2xl font-medium mb-2 text-gray-800">Opening Hours</h5>
          <p className="text-sm text-gray-600">Saturday - Sunday</p>
          <p className="text-sm text-gray-600">09:00 AM - 05:00 PM</p>
        </div>

        <div className="text-left md:text-left"> 
          <h5 className="text-2xl font-medium mb-2 text-gray-800">Call Us</h5>
          <p className="text-md font-medium mb-1  text-gray-600">+27 71 927 0935</p>
          <p className="text-sm text-gray-600">Have any questions? Feel free to contact us.</p>
        </div>

        <div className="text-left md:text-left"> 
          <h5 className="text-2xl font-medium mb-2 text-gray-800">Email Us</h5>
          <p className="text-sm">
            <a href="mailto:prudence.kandi@mobilecleaningct.com" className="hover:underline text-gray-800">
              prudence.kandi@mobilecleaningct.com
            </a>
          </p>
          <p className="text-sm">
            <a href="mailto:anesu.muusha@mobilecleaningct.com" className="hover:underline text-gray-800">
              anesu.muusha@mobilecleaningct.com
            </a>
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-300/50 my-6"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-800">&copy; 2025 ELITE MOBILE CLEANING SERVICES</p>
        <p className="mt-2 md:mt-0 text-gray-800">
          Designed by{" "}
          <a
            href="mailto:nosengaherbet@gmail.com"
            className="underline hover:text-gray-600 text-gray-800"
          >
            nosengaherbet@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;