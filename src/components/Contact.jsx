import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/89532e2d3f7b7c972f5b937172686ed2", {
        method: "POST",
        body: formData,
      });

      setSuccess(true);
      e.target.reset();
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <section className="py-32 px-6 bg-black text-white">
      <Helmet>
        <title>Contact| Get in Touch</title>
        <meta
          name="description"
          content="Contact BuildSigma for IT consulting, web & mobile development, AI solutions, and more. Get in touch with our expert team today."
        />
        <link rel="canonical" href="https://www.buildsigma.com/contact" />
      </Helmet>

      <h2 className="text-4xl font-bold text-center mb-6 text-white">
        Get in Touch
      </h2>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 mb-12 text-gray-300">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-500" />
          <a
            href="mailto:contact@buildsigma.com"
            className="hover:underline text-white"
          >
            work@buildsigma.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-yellow-500" />
          <a href="tel:+919654687526" className="hover:underline text-white">
            +91-9654687526
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-6 bg-gray-800 p-10 rounded-3xl shadow-xl text-gray-100"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_cc"
          value="saraswatharsh.9977@gmail.com"
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          required
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
        />
        <textarea
          placeholder="Your Message"
          name="message"
          rows="5"
          required
          className="border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-900 text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 cursor-pointer text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
        {success && (
          <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center relative">
            ✅ Your message has been sent successfully!
            <button
              onClick={() => setSuccess(false)}
              className="absolute top-2 right-3 text-black font-bold hover:text-gray-200"
            >
              ×
            </button>
          </div>
        )}
      </form>
    </section>
  );
};

export default Contact;
