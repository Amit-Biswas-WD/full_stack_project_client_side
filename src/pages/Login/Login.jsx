import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { IoIosEye } from "react-icons/io";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    const valueInfo = { email, password };
    console.log("User Logged:", valueInfo);
  };

  return (
    <div className="min-h-screen mt-16 flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-4xl">
        <div className="hidden md:flex md:w-1/2 bg-gray-500 items-center justify-center p-8">
          <img
            src="https://i.ibb.co.com/Zz6zW6Cq/login.jpg"
            alt="Registration"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-8">
            Welcome back
          </h2>
          <div className="flex justify-center text-center items-center">
            {/* <Google /> */}
          </div>
          <div className="flex justify-center items-center gap-8 mt-8">
            <hr className="w-40 text-gray-700" />
            <span className="text-lg font-semibold text-gray-700">or</span>
            <hr className="w-40 text-gray-700" />
          </div>
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-blue-300"
                required
              />
              <p
                onClick={() => setShowPassword(!showPassword)}
                className="absolute -mt-7 right-[280px]"
              >
                {showPassword ? <IoIosEye /> : <FaEyeSlash />}
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md transition duration-300"
            >
              Register
            </button>
          </form>

          <p className="text-center text-gray-600 mt-4">
            Create a new account{" "}
            {/* <Link to="/register" className="text-blue-500 hover:underline">
              register
            </Link> */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
