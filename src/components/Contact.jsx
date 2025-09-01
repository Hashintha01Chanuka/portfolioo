import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(event.target);

    formData.append("access_key", "a91e2cee-b271-4601-820c-e9dc902ea7d3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setSubmitMessage("Email sent!");
        event.target.reset(); // Clear the form
      } else {
        setSubmitMessage("Email not sent!");
      }
    } catch (error) {
      setSubmitMessage("An error occurred try again.");
    } finally {
      setIsSubmitting(false);
      
      // Clear message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <h1 className="text-6xl md:text-6xl font-bold text-center mb-12">
          Get In <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Touch</span>
        </h1>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Let's Talk</h2>
            <p className="text-gray-400 mb-6">
              Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></span>
                <p>hashinthachanuka01@gmail.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg></span>
                <p>+94 76 373 5286</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-orange-500 text-lg"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-locate-fixed-icon lucide-locate-fixed"><line x1="2" x2="5" y1="12" y2="12"/><line x1="19" x2="22" y1="12" y2="12"/><line x1="12" x2="12" y1="2" y2="5"/><line x1="12" x2="12" y1="19" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/></svg></span>
                <p>Kurunegala, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={onSubmit} className="p-6 rounded-2xl space-y-4">
            {/* Success/Error Message */}
            {submitMessage && (
              <div className={`p-3 rounded-lg text-center font-medium ${
                submitMessage.includes('') 
                  ? 'bg-green-100 text-green-800 border border-green-300' 
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}>
                {submitMessage}
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                disabled={isSubmitting}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Enter your message"
                required
                disabled={isSubmitting}
                className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none disabled:opacity-50"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-70 p-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 py-3 rounded-lg font-semibold transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;