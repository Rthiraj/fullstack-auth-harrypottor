// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// const API_BASE = "https://authdb-image.onrender.com/api/users";

// const Profile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/${id}`)
//       .then((res) => {
//         console.log(res.data);
//         setUser(res.data);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/auth");
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-600 text-white">
//         <span className="loading loading-spinner loading-lg"></span>
//         <p className="ml-4 text-xl">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center p-4">
//       <div className="card w-full max-w-md bg-white shadow-2xl text-center">
//         <div className="card-body items-center">
//           <figure className="pt-4">
//             <img
//               src={`https://authdb-image.onrender.com${user.image}`}
//               alt="Profile"
//               className="rounded-full w-32 h-32 object-cover border-4 border-purple-500"
//             />
//           </figure>
//           <h2 className="card-title text-purple-700 mt-4">Welcome, {user.username}</h2>

//           <div className="text-left w-full mt-4 space-y-2 text-gray-700">
//             <p>
//               <strong>Biodata:</strong> {user.biodata}
//             </p>
//             <p>
//               <strong>Job Role:</strong> {user.jobRole}
//             </p>
//           </div>

//           <div className="card-actions mt-6">
//             <button onClick={handleLogout} className="btn btn-error btn-outline w-full">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";

// const API_BASE = "https://authdb-image.onrender.com/api/users";

// const Profile = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get(`${API_BASE}/${id}`)
//       .then((res) => {
//         setUser(res.data);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     navigate("/auth");
//   };

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-400 to-purple-600 text-white">
//         <span className="loading loading-spinner loading-lg"></span>
//         <p className="ml-4 text-xl">Loading profile...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center p-4">
//       <div className="card w-full max-w-md bg-white shadow-2xl text-center">
//         <div className="card-body items-center">
//           <figure className="pt-4">
//             <motion.img
//               whileHover={{ scale: 1.1 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               src={`https://authdb-image.onrender.com${user.image}`}
//               alt="Profile"
//               className="rounded-full w-32 h-32 object-cover border-4 border-purple-500"
//             />
//           </figure>
//           <h2 className="card-title text-purple-700 mt-4">Welcome, {user.username}</h2>

//           <div className="text-left w-full mt-4 space-y-2 text-gray-700">
//             <p>
//               <strong>Biodata:</strong> {user.biodata}
//             </p>
//             <p>
//               <strong>Job Role:</strong> {user.jobRole}
//             </p>
//           </div>

//           <div className="card-actions mt-6">
//             <button onClick={handleLogout} className="btn btn-error btn-outline w-full">
//               Logout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

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
  const [loading, setLoading] = useState(false);  // <-- loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // <-- start loading

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

        alert("Registered successfully! Please login.");
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
    } finally {
      setLoading(false); // <-- stop loading in both success and error
    }
  };

  // --- Inside the return JSX ---

  return (
    // ... your other code

    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
      {/* other inputs */}

      <motion.button
        type="submit"
        className="btn w-full text-white font-bold"
        style={{
          background: "linear-gradient(90deg, #7f1dff, #ec4899)",
          border: "none",
        }}
        whileHover={loading ? {} : { scale: 1.1, boxShadow: "0 0 15px 4px rgba(236,72,153,0.7)" }}
        transition={{ type: "spring", stiffness: 300 }}
        disabled={loading}
      >
        {loading ? (
          <>
            <span className="loading loading-spinner loading-sm mr-2"></span>
            Processing...
          </>
        ) : (
          isLogin ? "Login" : "Register"
        )}
      </motion.button>
    </form>

    // ... your other code
  );
};

export default AuthForm;

