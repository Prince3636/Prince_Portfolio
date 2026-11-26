import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCopy,
  FaCheck,
  FaPaperPlane,
} from "react-icons/fa";

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

  const openWhatsAppWithMessage = () => {
    const userName = form.current?.user_name?.value?.trim() || "";
    const subj = form.current?.subject?.value?.trim() || "";
    const msg = form.current?.message?.value?.trim() || "";

    let text = "Hi Prince, I checked out your portfolio and would like to connect!";
    if (userName || subj || msg) {
      text = `Hi Prince,\n\nName: ${userName || "Anonymous"}\nSubject: ${
        subj || "Opportunity"
      }\nMessage: ${msg || "Looking forward to speaking with you!"}`;
    }

    const waUrl = `https://wa.me/917015708661?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank");
  };

  const openGmailDirect = () => {
    const userName = form.current?.user_name?.value?.trim() || "";
    const userEmail = form.current?.user_email?.value?.trim() || "";
    const subj =
      form.current?.subject?.value?.trim() ||
      "Full-Stack Developer Opportunity for Prince";
    const msg = form.current?.message?.value?.trim() || "";

    const bodyText = `Hi Prince,\n\nName: ${userName || "Visitor"}\nEmail: ${
      userEmail || "Not provided"
    }\n\nMessage:\n${msg || "We are interested in discussing an opportunity with you."}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Prince722663@gmail.com&su=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(bodyText)}`;

    window.open(gmailUrl, "_blank");
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const userName = form.current.user_name?.value || "";
    const userEmail = form.current.user_email?.value || "";
    const subj = form.current.subject?.value || "Portfolio Contact Message";
    const msg = form.current.message?.value || "";

    // Step 1: Attempt silent FormSubmit background AJAX delivery (Zero-signup required)
    try {
      // FormSubmit secure token linked to Prince722663@gmail.com
      const response = await fetch(
        "https://formsubmit.co/ajax/49b8b268a89d105d9557293f0d6f7b4c",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: userName,
            email: userEmail,
            _subject: `Portfolio Message: ${subj} (from ${userName})`,
            message: msg,
          }),
        }
      );

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.success === true)) {
        setLoading(false);
        form.current.reset();
        toast.success("Message sent successfully directly to Prince! 🚀", {
          position: "top-right",
          autoClose: 4000,
          theme: "dark",
        });
        return;
      }
    } catch (err) {
      console.log("Background service unavailable, switching to direct mail link...", err);
    }

    // Step 2: Seamless fallback to Gmail Web or native mail app so zero messages are lost
    setLoading(false);
    const bodyText = `Hi Prince,\n\nName: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${msg}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Prince722663@gmail.com&su=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(bodyText)}`;
    const mailtoUrl = `mailto:Prince722663@gmail.com?subject=${encodeURIComponent(
      subj
    )}&body=${encodeURIComponent(bodyText)}`;

    toast.info("Opening your email composer to deliver directly! ✉️", {
      position: "top-right",
      autoClose: 3500,
      theme: "dark",
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      const win = window.open(gmailUrl, "_blank");
      if (!win) {
        window.location.href = mailtoUrl;
      }
    }
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

              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 py-3.5 text-white font-bold rounded-xl hover:opacity-95 transition shadow-lg shadow-purple-600/30 text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      <span>Send Message Directly</span>
                    </>
                  )}
                </button>

                {/* Instant Zero-Signup Quick Actions */}
                <div className="pt-2">
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="h-px bg-gray-800 flex-1"></div>
                    <span className="text-[11px] font-medium text-gray-500 uppercase tracking-wider">
                      Or Connect Instantly via
                    </span>
                    <div className="h-px bg-gray-800 flex-1"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <button
                      type="button"
                      onClick={openGmailDirect}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-950/30 hover:bg-red-950/60 border border-red-800/40 text-red-300 hover:text-red-200 text-xs font-semibold transition cursor-pointer"
                    >
                      <FaEnvelope size={13} />
                      <span>Open in Gmail Web</span>
                    </button>
                    <button
                      type="button"
                      onClick={openWhatsAppWithMessage}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 hover:text-emerald-200 text-xs font-semibold transition cursor-pointer"
                    >
                      <FaWhatsapp size={14} />
                      <span>Chat on WhatsApp</span>
                    </button>
                  </div>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-gray-500">
                    🔒 Zero-friction: No account or registration needed. Message goes directly to Prince.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
