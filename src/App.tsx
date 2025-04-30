import React from "react";
import AuthLayout from "./layouts/AuthLayout";
import { Link } from "react-router-dom";
import Button from "./components/ui/Button";
import { IoMail } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import GetHelpButton from "./components/GetHelpButton";

const App = () => {
  return (
    <AuthLayout>
      <div className="w-full max-w-md mx-auto bg-white py-9 px-8 rounded-lg shadow-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold">Register your account</h2>

        <div className="space-y-6 mt-8">
          <Link to="/auth/register">
            <button className="border border-gray-300 rounded-lg w-full hover:bg-gray-100 flex items-center justify-center p-2 mt-4 text-gray-800">
              <div className="flex items-center space-x-2">
                <IoMail className="h-5 w-5 text-gray-800 mr-3" />
                <span className="text-sm">Sign up with email</span>
              </div>
            </button>
          </Link>

          {/* OR Divider */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="mx-3 text-sm text-gray-500">or</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button className="border border-gray-300 rounded-lg w-full hover:bg-gray-100 flex items-center justify-center p-2 text-gray-800">
            <div className="flex items-center space-x-2">
              <FcGoogle className="h-5 w-5 mr-3" />
              <span className="text-sm">Sign up with Google</span>
            </div>
          </button>
        </div>

        <div className="space-y-4 mt-8">
          <div className="text-xs text-gray-500 mt-4 pb-10">
            By clicking the button above, you agree to our
            <Link to="/" className="text-[#FF8600]">
              {" "}
              Terms of Service{" "}
            </Link>
            and{" "}
            <Link to="/" className="text-[#FF8600]">
              Privacy Policy
            </Link>
            .
          </div>

          <p className="text-sm">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-[#FF8600] hover:text-[#FF8600] hover:font-bold font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <GetHelpButton />
    </AuthLayout>
  );
};

export default App;
