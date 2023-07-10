// import { useState } from "react";
// import { toast } from "react-hot-toast";
// import { Link, useNavigate } from "react-router-dom";
// import { register } from "../lib/auth";
// import { useCookies } from "react-cookie";

// const Register = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [_, setCookie] = useCookies(["Authorization"]);

//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     if (!email || !password || !name) {
//       toast.error("Please fill all fields");
//       return;
//     }
//     try {
//       setLoading(true);
//       const { token } = await register(name, email, password);
//       setCookie("Authorization", "Bearer " + token);

//       setLoading(false);
//       toast.success("Registered successfully");
//       navigate("/admin");
//     } catch (error: any) {
//       setLoading(false);
//       if (error.response?.data === "User already exists") {
//         toast.error("User already exists");
//         return;
//       }
//       toast.error("Something went wrong, please try again");
//     }
//   };

//   return (
//     <div className="mt-20 flex-col w-full flex items-center justify-center">
//       <h1 className="text-center font-medium text-2xl text-black mb-6">
//         Register
//       </h1>
//       <div className="flex bg-white rounded-lg shadow-lg border p-5 flex-col justify-center px-8">
//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-4 items-center"
//         >
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="name"
//             >
//               Name
//             </label>
//             <input
//               className="shadow appearance-none border rounded-lg w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setName(e.target.value)}
//               id="email"
//               type="name"
//               placeholder="name"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="email"
//             >
//               Email
//             </label>
//             <input
//               className="shadow appearance-none border rounded-lg w-full py-2 mt-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setEmail(e.target.value)}
//               id="email"
//               type="email"
//               placeholder="Email"
//             />
//           </div>
//           <div className="mb-4">
//             <label
//               className="block text-gray-700 text-sm font-bold mb-2"
//               htmlFor="password"
//             >
//               Password
//             </label>
//             <input
//               className="shadow appearance-none border mt-1 rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//               onChange={(e) => setPassword(e.target.value)}
//               id="password"
//               type="password"
//               placeholder="Password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="disabled:cursor-wait bg-green-500 hover:bg-green-400 disabled:bg-gray-500 disabled:hover:bg-gray-500 border rounded-lg px-6 flex items-center justify-center text-white h-10 outline-none"
//             disabled={loading}
//           >
//             Register
//           </button>
//         </form>
//         {/* Route to login */}
//         <div className="text-center mt-4">
//           <p className="text-sm text-gray-600">
//             Already have an account?{" "}
//             <Link
//               className="text-green-500 hover:text-green-700 font-semibold"
//               to="/login"
//             >
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;
