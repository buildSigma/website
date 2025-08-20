import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">BuildSigma</h2>
          <p className="mt-3 text-gray-400 text-sm">
            Your trusted partner for innovative web solutions and digital transformation.
          </p>
          <p className="mt-4 text-gray-400 text-sm">
            © {new Date().getFullYear()} BuildSigma. All rights reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
            <li><a href="/solutions" className="hover:text-blue-400">Solutions</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
       <div>
  <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
  <p className="text-sm">📍D-24, Sector 9, Ghaziabad, Uttar Pradesh, India</p>
  <p className="text-sm">📌 PIN Code: 201009</p>
  <p className="text-sm mt-2">📞 +91-9654687526</p>
  <p className="text-sm mt-2">
    ✉️ <a href="mailto:contact@buildsigma.com" className="hover:text-blue-400">work@buildsigma.com</a>
  </p>
</div>

      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-10 border-t border-gray-700 pt-4">
        Designed & Developed by <a href="https://www.buildsigma.com" className="hover:text-blue-400">BuildSigma</a>
      </div>
    </footer>
  );
};

export default Footer;
