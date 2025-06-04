// import React from "react";

// const Contact = () => {
//   return (
//     <div style={{ padding: "1em", background: "pink", width: "300px" }}>
//       Contact us: hi email us @ web123@gmail.com
//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import { motion } from "framer-motion";
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";

// const Contact = () => {
//   return (
//     <motion.div
//       className="p-6 max-w-lg mx-auto bg-base-100 shadow-xl rounded-xl space-y-6"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//     >
//       <h2 className="text-2xl font-bold text-center text-primary">Contact Us</h2>
      

//       {/* Contact Info */}
//       <div className="space-y-4">
//         <div className="flex items-center space-x-3">
//           <EnvelopeIcon className="h-6 w-6 text-primary" />
//           <a href="mailto:web123@gmail.com" className="link link-hover">
//             web123@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center space-x-3">
//           <PhoneIcon className="h-6 w-6 text-primary" />
//           <a href="tel:+1234567890" className="link link-hover">
//             +1 234 567 890
//           </a>
//         </div>
//         <div className="flex items-center space-x-3">
//           <MapPinIcon className="h-6 w-6 text-primary" />
//           <p>123 React Street, Tailwind City, Webland</p>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <form className="space-y-4">
//         <input
//           type="text"
//           placeholder="Your Name"
//           className="input input-bordered w-full"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Your Email"
//           className="input input-bordered w-full"
//           required
//         />
//         <textarea
//           className="textarea textarea-bordered w-full"
//           placeholder="Your Message"
//           rows={4}
//           required
//         ></textarea>
//         <button type="submit" className="btn btn-primary w-full">
//           Send Message
//         </button>
//       </form>
//     </motion.div>
//   );
// };

// export default Contact;

// import React, { useRef, useState, useEffect } from "react";
// import emailjs from "@emailjs/browser";
// import { motion } from "framer-motion";
// import {
//   EnvelopeIcon,
//   PhoneIcon,
//   MapPinIcon,
// } from "@heroicons/react/24/outline";

// const houseThemes = {
//   gryffindor: {
//     bg: "#7F0909",
//     color: "#FFD700",
//     font: "'Creepster', cursive",
//     icon: "🦁",
//   },
//   slytherin: {
//     bg: "#1A472A",
//     color: "#AAAAAA",
//     font: "'Creepster', cursive",
//     icon: "🐍",
//   },
//   ravenclaw: {
//     bg: "#0E1A40",
//     color: "#946B2D",
//     font: "'Creepster', cursive",
//     icon: "🦅",
//   },
//   hufflepuff: {
//     bg: "#FFDB00",
//     color: "#000000",
//     font: "'Creepster', cursive",
//     icon: "🦡",
//   },
// };

// const Contact = () => {
//   const form = useRef();
//   const [status, setStatus] = useState("");
//   const [theme, setTheme] = useState("gryffindor");

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     emailjs
//       .sendForm(
//         "service_rhrpttu",
//         "template_xfjniut",
//         form.current,
//         "dGQSYEFSl0rEKk11d"
//       )
//       .then(
//         () => {
//           setStatus("🪄 Message sent successfully!");
//           form.current.reset();
//         },
//         () => {
//           setStatus("❌ Failed to send message.");
//         }
//       );
//   };

//   const toggleTheme = () => {
//     const nextThemes = Object.keys(houseThemes);
//     const nextIndex =
//       (nextThemes.indexOf(theme) + 1) % nextThemes.length;
//     setTheme(nextThemes[nextIndex]);
//   };

//   const currentTheme = houseThemes[theme];

//   return (
//     <motion.div
//       className="p-6 max-w-lg mx-auto shadow-xl rounded-xl space-y-6 relative"
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{
//         backgroundColor: currentTheme.bg,
//         color: currentTheme.color,
//         fontFamily: currentTheme.font,
//         border: `4px solid ${currentTheme.color}`,
//         boxShadow: `0 0 12px ${currentTheme.color}`,
//       }}
//     >
//       {/* Theme Toggle Button */}
//       <button
//         onClick={toggleTheme}
//         className="btn btn-sm btn-outline absolute top-4 right-4"
//         title="Toggle House Theme"
//         style={{
//           borderColor: currentTheme.color,
//           color: currentTheme.color,
//           fontSize: "1.2rem",
//         }}
//       >
//         {currentTheme.icon}
//       </button>

//       <h2 className="text-3xl font-bold text-center">Contact Us</h2>

//       {/* Contact Info */}
//       <div className="space-y-4">
//         <div className="flex items-center space-x-3">
//           <EnvelopeIcon className="h-6 w-6" />
//           <a href="mailto:aarthi.rp.17@gmail.com" className="link link-hover">
//             aarthi.rp.17@gmail.com
//           </a>
//         </div>
//         <div className="flex items-center space-x-3">
//           <PhoneIcon className="h-6 w-6" />
//           <a href="tel:+918526737908" className="link link-hover">
//             +91 8526737908
//           </a>
//         </div>
//         <div className="flex items-center space-x-3">
//           <MapPinIcon className="h-6 w-6" />
//           <p>Saravanampatti, Coimbatore, Tamil Nadu</p>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <form ref={form} onSubmit={sendEmail} className="space-y-4">
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Your Name"
//           className="input input-bordered w-full"
//           required
//           style={{
//             backgroundColor: "transparent",
//             borderColor: currentTheme.color,
//             color: currentTheme.color,
//           }}
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Your Email"
//           className="input input-bordered w-full"
//           required
//           style={{
//             backgroundColor: "transparent",
//             borderColor: currentTheme.color,
//             color: currentTheme.color,
//           }}
//         />
//         <textarea
//           name="message"
//           className="textarea textarea-bordered w-full"
//           placeholder="Your Message"
//           rows={4}
//           required
//           style={{
//             backgroundColor: "transparent",
//             borderColor: currentTheme.color,
//             color: currentTheme.color,
//           }}
//         ></textarea>
//         <button
//           type="submit"
//           className="btn w-full"
//           style={{
//             backgroundColor: currentTheme.color,
//             color: currentTheme.bg,
//             fontWeight: "bold",
//             fontFamily: currentTheme.font,
//           }}
//         >
//           Send Message
//         </button>
//         {status && (
//           <p className="text-center text-sm mt-2">{status}</p>
//         )}
//       </form>
//     </motion.div>
//   );
// };

// export default Contact;

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const houseThemes = {
  gryffindor: {
    bg: "#7F0909",
    color: "#FFD700",
    font: "'Creepster', cursive",
    icon: "🦁",
  },
  slytherin: {
    bg: "#1A472A",
    color: "#AAAAAA",
    font: "'Creepster', cursive",
    icon: "🐍",
  },
  ravenclaw: {
    bg: "#0E1A40",
    color: "#946B2D",
    font: "'Creepster', cursive",
    icon: "🦅",
  },
  hufflepuff: {
    bg: "#FFDB00",
    color: "#000000",
    font: "'Creepster', cursive",
    icon: "🦡",
  },
};

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [theme, setTheme] = useState("gryffindor");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_rhrpttu",
        "template_0rmjk3n",
        form.current,
        "dGQSYEFSl0rEKk11d"
      )
      .then(
        () => {
          setStatus("🪄 Message sent successfully!");
          form.current.reset();
        },
        () => {
          setStatus("❌ Failed to send message.");
        }
      );
  };

  const toggleTheme = () => {
    const nextThemes = Object.keys(houseThemes);
    const nextIndex = (nextThemes.indexOf(theme) + 1) % nextThemes.length;
    setTheme(nextThemes[nextIndex]);
  };

  const currentTheme = houseThemes[theme];

  return (
    <div
      style={{
        backgroundColor: currentTheme.bg,
        minHeight: "100vh",
        padding: "2rem",
        fontFamily: currentTheme.font,
      }}
    >
      <motion.div
        className="p-6 max-w-lg mx-auto shadow-xl rounded-xl space-y-6 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.color,
          fontFamily: currentTheme.font,
          border: `4px solid ${currentTheme.color}`,
          boxShadow: `0 0 12px ${currentTheme.color}`,
        }}
      >
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="btn btn-sm btn-outline absolute top-4 right-4"
          title="Toggle House Theme"
          style={{
            borderColor: currentTheme.color,
            color: currentTheme.color,
            fontSize: "1.2rem",
          }}
        >
          {currentTheme.icon}
        </button>

        <h2 className="text-3xl font-bold text-center">Contact Us</h2>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <EnvelopeIcon className="h-6 w-6" />
            <a href="mailto:aarthi.rp.17@gmail.com" className="link link-hover">
              aarthi.rp.17@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <PhoneIcon className="h-6 w-6" />
            <a href="tel:+918526737908" className="link link-hover">
              +91 8526737908
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <MapPinIcon className="h-6 w-6" />
            <p>Saravanampatti, Coimbatore, Tamil Nadu</p>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
            style={{
              backgroundColor: "transparent",
              borderColor: currentTheme.color,
              color: currentTheme.color,
            }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
            style={{
              backgroundColor: "transparent",
              borderColor: currentTheme.color,
              color: currentTheme.color,
            }}
          />
          <textarea
            name="message"
            className="textarea textarea-bordered w-full"
            placeholder="Your Message"
            rows={4}
            required
            style={{
              backgroundColor: "transparent",
              borderColor: currentTheme.color,
              color: currentTheme.color,
            }}
          ></textarea>
          <button
            type="submit"
            className="btn w-full"
            style={{
              backgroundColor: currentTheme.color,
              color: currentTheme.bg,
              fontWeight: "bold",
              fontFamily: currentTheme.font,
            }}
          >
            Send Message
          </button>
          {status && (
            <p className="text-center text-sm mt-2">{status}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
