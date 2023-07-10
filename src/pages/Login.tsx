import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { login } from "../lib/auth";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [_, setCookie] = useCookies(["Authorization"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      setLoading(true);
      const { token } = await login(email, password);
      setCookie("Authorization", "Bearer " + token);
      setLoading(false);
      toast.success("Logged In successfully");
      navigate("/admin");
    } catch (error: any) {
      setLoading(false);
      if (error.response?.data) {
        toast.error("Something went wrong, please try again");
        return;
      }
      toast.error("Something went wrong, please try again");
    }
  };

  return (
    <div className="mt-20 flex-col w-full flex items-center justify-center space-y-6">
      <h1 className="text-center font-semibold text-3xl text-black">Login</h1>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-xl border p-8 w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 flex flex-col items-center"
          >
            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="disabled:cursor-wait bg-green-500 hover:bg-green-400 disabled:bg-gray-500 disabled:hover:bg-gray-500 border rounded-lg px-6 flex items-center justify-center text-white h-10 outline-none"
              disabled={loading}
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <span className="text-gray-600 text-sm">
              Don't have an account?{" "}
            </span>
            <Link
              to="/register"
              className="text-green-500 hover:text-green-600 text-sm"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
