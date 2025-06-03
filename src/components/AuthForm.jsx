// import { useState, useEffect } from "react";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// const API_BASE = "https://login-backend-data-8g7x.onrender.com/api/users";

// // Theme Toggle component
// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="btn btn-sm btn-outline fixed top-4 right-4 z-50"
//     >
//       {theme === "light" ? "🌙" : "☀️"}
//     </button>
//   );
// };

// const AuthForm = () => {
//   const [isLogin, setIsLogin] = useState(false);
//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//     biodata: "",
//     jobRole: "",
//   });
//   const [image, setImage] = useState(null);
//   const [loggedInUser, setLoggedInUser] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setImage(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isLogin) {
//         const res = await axios.post(`${API_BASE}/login`, {
//           username: form.username,
//           password: form.password,
//         });

//         setLoggedInUser(res.data.user);
//         localStorage.setItem("user", JSON.stringify(res.data.user));

//         setForm({
//           username: "",
//           password: "",
//           biodata: "",
//           jobRole: "",
//         });
//       } else {
//         const formData = new FormData();
//         formData.append("username", form.username);
//         formData.append("password", form.password);
//         formData.append("biodata", form.biodata);
//         formData.append("jobRole", form.jobRole);
//         if (image) formData.append("image", image);

//         await axios.post(`${API_BASE}/`, formData, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });

//         alert("Registered successfully🥳 login now!.");
//         setIsLogin(true);
//         setForm({
//           username: "",
//           password: "",
//           biodata: "",
//           jobRole: "",
//         });
//         setImage(null);
//       }
//     } catch (error) {
//       console.error("Auth Error:", error.response?.data || error);
//       alert(error.response?.data?.message || "Something went wrong");
//     }
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setLoggedInUser(null);
//   };

//   if (loggedInUser) {
//     return (
//       <>
//         <ThemeToggle />
//         <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
//           <div className="card w-96 bg-white shadow-2xl text-gray-800">
//             <figure className="pt-6">
//               <motion.img
              
//                 transition={{ type: "spring", stiffness: 300 }}
//                 src={
//                   loggedInUser.image
//                     ? `https://login-backend-data-8g7x.onrender.com${loggedInUser.image}`
//                     : "https://via.placeholder.com/150"
//                 }
//                 alt="Profile"
//                 className="rounded-full w-32 h-32 object-cover border-4 border-pink-300"
//               />
//             </figure>
//             <div className="card-body items-center text-center">
//               <h2 className="card-title text-pink-300">Welcome, {loggedInUser.username}</h2>
//               <p className="text-sm"><strong>Biodata:</strong> {loggedInUser.biodata}</p>
//               <p className="text-sm"><strong>Job Role:</strong> {loggedInUser.jobRole}</p>
//               <div className="card-actions mt-4">
//                 <button onClick={handleLogout} className="btn btn-error btn-outline">
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }

//   return (
//     <>
//       <ThemeToggle />
//       <div className="min-h-screen flex items-center justify-center p-4">
//         <div className="card w-full max-w-md bg-base-100 shadow-2xl">
//           <div className="card-body">
//             <h2 className="text-center text-3xl font-extrabold text-blue-600 mb-6">
//               {isLogin ? "Login" : "Register"}
//             </h2>

//             <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
//               <input
//                 type="text"
//                 name="username"
//                 value={form.username}
//                 onChange={handleChange}
//                 placeholder="Username"
//                 required
//                 className="input input-bordered w-full"
//               />

//               <input
//                 type="password"
//                 name="password"
//                 value={form.password}
//                 onChange={handleChange}
//                 placeholder="Password"
//                 required
//                 className="input input-bordered w-full"
//               />

//               {!isLogin && (
//                 <>
//                   <input
//                     type="text"
//                     name="biodata"
//                     value={form.biodata}
//                     onChange={handleChange}
//                     placeholder="Biodata"
//                     required
//                     className="input input-bordered w-full"
//                   />
//                   <input
//                     type="text"
//                     name="jobRole"
//                     value={form.jobRole}
//                     onChange={handleChange}
//                     placeholder="Job Role"
//                     required
//                     className="input input-bordered w-full"
//                   />
//                   <input
//                     type="file"
//                     name="image"
//                     accept="image/*"
//                     onChange={handleFileChange}
//                     className="file-input file-input-bordered w-full"
//                   />
//                 </>
//               )}

//               <motion.button
//                 type="submit"
//                 className="btn w-full text-primary font-bold"
//                 style={{
//                   background: "",
//                   border: "none",
//                 }}
//                 whileHover={{
//                   scale: 1.05,
//                 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 {isLogin ? "Login" : "Register"}
//               </motion.button>
//             </form>

//             <div className="text-center mt-4">
//               <p
//                 onClick={() => setIsLogin(!isLogin)}
//                 className="text-sm text-blue-600 hover:underline cursor-pointer"
//               >
//                 {isLogin
//                   ? "Don't have an account? Register"
//                   : "Already have an account? Login"}
//               </p>

//               <Link to="/contact" className="link link-secondary mt-2 inline-block">
//                 Contact
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AuthForm;



import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// House themes definition (same as in Contact.jsx)
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

// HouseThemeToggle component
const HouseThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    const keys = Object.keys(houseThemes);
    const nextIndex = (keys.indexOf(theme) + 1) % keys.length;
    setTheme(keys[nextIndex]);
  };

  const currentTheme = houseThemes[theme];

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline absolute top-4 right-4"
      title="Toggle House Theme"
      style={{
        borderColor: currentTheme.color,
        color: currentTheme.color,
        fontSize: "1.5rem",
        fontFamily: currentTheme.font,
        cursor: "pointer",
      }}
    >
      {currentTheme.icon}
    </button>
  );
};

const API_BASE = "https://login-backend-data-8g7x.onrender.com/api/users";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    username: "",
    password: "",
    biodata: "",
    jobRole: "",
  });
  const [image, setImage] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  // Add house theme state
  const [theme, setTheme] = useState("gryffindor");
  const currentTheme = houseThemes[theme];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post(`${API_BASE}/login`, {
          username: form.username,
          password: form.password,
        });

        setLoggedInUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        setForm({
          username: "",
          password: "",
          biodata: "",
          jobRole: "",
        });
      } else {
        const formData = new FormData();
        formData.append("username", form.username);
        formData.append("password", form.password);
        formData.append("biodata", form.biodata);
        formData.append("jobRole", form.jobRole);
        if (image) formData.append("image", image);

        await axios.post(`${API_BASE}/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        alert("Registered successfully🥳 login now!.");
        setIsLogin(true);
        setForm({
          username: "",
          password: "",
          biodata: "",
          jobRole: "",
        });
        setImage(null);
      }
    } catch (error) {
      console.error("Auth Error:", error.response?.data || error);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div
        className="flex flex-col items-center justify-center min-h-screen p-4"
        style={{
          backgroundColor: currentTheme.bg,
          color: currentTheme.color,
          fontFamily: currentTheme.font,
        }}
      >
        <div
          className="card w-96 shadow-lg relative rounded-lg border-4"
          style={{
            borderColor: currentTheme.color,
            backgroundColor: darken(currentTheme.bg, 0.15),
            color: currentTheme.color,
            fontFamily: currentTheme.font,
          }}
        >
          <HouseThemeToggle theme={theme} setTheme={setTheme} />
          <figure className="pt-6 flex justify-center">
            <motion.img
              transition={{ type: "spring", stiffness: 300 }}
              src={
                loggedInUser.image
                  ? `https://login-backend-data-8g7x.onrender.com${loggedInUser.image}`
                  : "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border-4 shadow-lg"
              style={{ borderColor: currentTheme.color }}
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2
              className="card-title text-3xl font-bold"
              style={{ color: currentTheme.color }}
            >
              Welcome, {loggedInUser.username}
            </h2>
            <p className="text-lg mt-2" style={{ color: currentTheme.color }}>
              <strong>Biodata:</strong> {loggedInUser.biodata}
            </p>
            <p className="text-lg" style={{ color: currentTheme.color }}>
              <strong>Job Role:</strong> {loggedInUser.jobRole}
            </p>
            <div className="card-actions mt-4">
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-warning"
                style={{ borderColor: currentTheme.color, color: currentTheme.color }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundColor: currentTheme.bg,
        fontFamily: currentTheme.font,
      }}
    >
      <div
        className="card w-full max-w-md shadow-lg relative rounded-lg border-4"
        style={{
          color: currentTheme.color,
          borderColor: currentTheme.color,
          backgroundColor: darken(currentTheme.bg, 0.1),
        }}
      >
        <HouseThemeToggle theme={theme} setTheme={setTheme} />
        <div className="card-body">
          <h2
            className="text-center text-3xl font-extrabold mb-6"
            style={{ color: currentTheme.color }}
          >
            {isLogin ? "Login" : "Register"}
          </h2>

          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            className="space-y-4"
          >
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              className="input input-bordered w-full"
              style={{
                backgroundColor: darken(currentTheme.bg, 0.2),
                borderColor: currentTheme.color,
                color: currentTheme.color,
                fontFamily: currentTheme.font,
              }}
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="input input-bordered w-full"
              style={{
                backgroundColor: darken(currentTheme.bg, 0.2),
                borderColor: currentTheme.color,
                color: currentTheme.color,
                fontFamily: currentTheme.font,
              }}
            />

            {!isLogin && (
              <>
                <input
                  type="text"
                  name="biodata"
                  value={form.biodata}
                  onChange={handleChange}
                  placeholder="Biodata"
                  required
                  className="input input-bordered w-full"
                  style={{
                    backgroundColor: darken(currentTheme.bg, 0.2),
                    borderColor: currentTheme.color,
                    color: currentTheme.color,
                    fontFamily: currentTheme.font,
                  }}
                />
                <input
                  type="text"
                  name="jobRole"
                  value={form.jobRole}
                  onChange={handleChange}
                  placeholder="Job Role"
                  required
                  className="input input-bordered w-full"
                  style={{
                    backgroundColor: darken(currentTheme.bg, 0.2),
                    borderColor: currentTheme.color,
                    color: currentTheme.color,
                    fontFamily: currentTheme.font,
                  }}
                />
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                  style={{
                    backgroundColor: darken(currentTheme.bg, 0.2),
                    borderColor: currentTheme.color,
                    color: currentTheme.color,
                    fontFamily: currentTheme.font,
                  }}
                />
              </>
            )}

            <motion.button
              type="submit"
              className="btn w-full font-bold"
              style={{
                backgroundColor: currentTheme.color,
                borderColor: currentTheme.color,
                color: currentTheme.bg,
                fontFamily: currentTheme.font,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 8px 2px ${currentTheme.color}`,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isLogin ? "Login" : "Register"}
            </motion.button>
          </form>

          <div className="text-center mt-4" style={{ color: currentTheme.color }}>
            <p>
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="btn btn-link"
                style={{
                  color: currentTheme.color,
                  fontFamily: currentTheme.font,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </p>
            <Link to="/contact" 
            className="btn btn-link"
             style={{
                  color: currentTheme.color,
                  fontFamily: currentTheme.font,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}>
              Contact
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

// Helper to darken a hex color by percent (0-1)
function darken(hexColor, percent) {
  const num = parseInt(hexColor.replace("#", ""), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;

  r = Math.floor(r * (1 - percent));
  g = Math.floor(g * (1 - percent));
  b = Math.floor(b * (1 - percent));

  return `rgb(${r},${g},${b})`;
}

export default AuthForm;
