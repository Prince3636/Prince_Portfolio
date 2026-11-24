import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaGithub, FaLinkedin, FaTwitter, FaCopy, FaCheck } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("Prince722663@gmail.com");
    setCopied(true);
    toast.success("Email copied to clipboard! 📋", {
      position: "top-right",
      autoClose: 2500,
      theme: "dark",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_zus4vhe",
        "template_nxcjst1",
        form.current,
        "DRh4Mz2Nppq7Ttntp"
      )
      .then(
        () => {
          setLoading(false);
          form.current.reset();
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3500,
            theme: "dark",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again or email directly.", {
            position: "top-right",
            autoClose: 4000,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-[6vw] md:px-[8vw] lg:px-[14vw] font-sans relative"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">
          GET IN TOUCH
        </h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Have an exciting role, freelance project, or collaboration in mind? Let's connect!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Reach Cards */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-gray-900/90 border border-gray-800 shadow-xl backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-2">
              Direct Contact &amp; Channels
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6 leading-relaxed">
              I am actively interviewing for full-stack and backend roles. Feel free to ping me directly or drop a message via the form.
            </p>

            <div className="space-y-4">
              {/* Email Card with 1-click Copy */}
              <div
                onClick={copyEmail}
                className="group flex items-center justify-between p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80 hover:border-purple-500/80 cursor-pointer transition"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/80 border border-purple-800/50 flex items-center justify-center text-purple-400">
                    <FaEnvelope size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Email Address</div>
                    <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-purple-300 transition">
                      Prince722663@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  title="Copy to clipboard"
                  className="p-2 text-gray-400 group-hover:text-purple-300 transition"
                >
                  {copied ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
                </button>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80 hover:border-emerald-500/80 transition">
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-emerald-950/80 border border-emerald-800/50 flex items-center justify-center text-emerald-400">
                    <FaPhoneAlt size={15} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-medium">Phone &amp; WhatsApp</div>
                    <a
                      href="tel:+917015708661"
                      className="text-xs sm:text-sm font-semibold text-white hover:text-emerald-300 transition"
                    >
                      +91 7015708661
                    </a>
                  </div>
                </div>
                <a
                  href="https://wa.me/917015708661"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition"
                >
                  <FaWhatsapp size={13} />
                  <span>Chat</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-800/50 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt size={16} />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    Panipat, Haryana / Remote, India (IST)
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="mt-6 pt-5 border-t border-gray-800">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Connect on Professional Networks
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Prince3636"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-750 border border-gray-700 text-gray-200 hover:text-white text-xs font-semibold transition"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/prince3636/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/40 border border-[#0077b5]/50 text-blue-300 text-xs font-semibold transition"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://x.com/PyPrince46394"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 hover:text-white text-xs font-semibold transition"
                >
                  <FaTwitter size={14} />
                  <span>X (Twitter)</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="lg:col-span-7">
          <div className="bg-gray-900/90 p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 backdrop-blur-md">
            <h3 className="text-xl font-bold text-white mb-1">
              Send a Message 🚀
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-6">
              Fill in your details below and I'll reply to your inbox within 24 hours.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="e.g. John Doe"
                    required
                    className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="e.g. john@company.com"
                    required
                    className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g. Full Stack Role Opportunity / Freelance Project"
                  required
                  className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  name="message"
                  placeholder="Hi Prince, we would love to discuss a developer position..."
                  rows="5"
                  required
                  className="w-full p-3 rounded-xl bg-[#131025] text-white border border-gray-700/80 focus:outline-none focus:border-purple-500 text-sm transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 py-3.5 text-white font-bold rounded-xl hover:opacity-95 transition shadow-lg shadow-purple-600/30 text-sm sm:text-base flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span>✉️</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
