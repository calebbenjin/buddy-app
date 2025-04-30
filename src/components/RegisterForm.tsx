// src/features/auth/components/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Input } from "./ui/Input";
import Button from "./ui/Button";
import { IoMail } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GetHelpButton from "./GetHelpButton";
import { FaUser } from "react-icons/fa";
import CheckInbox from "./CheckInbox";

const registerSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const emailValue = watch("email");
  const passwordValue = watch("password");

  const onSubmit = async (data: RegisterFormValues) => {
    setLoading(true);
    console.log("Login submitted:", data);
    setConfirmEmail(true);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <>
      {confirmEmail ? (
        <CheckInbox />
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md mx-auto bg-white py-6 px-8 rounded-lg shadow-2xl border border-gray-200"
          >
            <h2 className="text-2xl font-semibold">Register your account</h2>
            <p className="mt-1 text-sm">
              Proceed to create account and setup your organization
            </p>

            <div className="space-y-4 mt-8">
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="flex flex-col w-full">
                  <label htmlFor="firstName" className="text-gray-600 text-sm">
                    First Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      {...register("firstName")}
                      className={`w-full px-4 py-4 border pl-9 rounded-md focus:outline-none ${
                        errors.firstName
                          ? "border-[#FF8600]"
                          : "border-gray-200"
                      }`}
                    />
                  </div>

                  {errors.firstName && (
                    <small className="text-xs text-orange-500 mt-1">
                      {errors.firstName.message}
                    </small>
                  )}
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="lastName" className="text-gray-600 text-sm">
                    Last Name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      {...register("lastName")}
                      className={`w-full px-4 py-4 border pl-9 rounded-md focus:outline-none ${
                        errors.lastName ? "border-[#FF8600]" : "border-gray-200"
                      }`}
                    />
                  </div>

                  {errors.lastName && (
                    <small className="text-xs text-orange-500 mt-1">
                      {errors.lastName.message}
                    </small>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-600 text-sm">
                  Email
                </label>
                <div className="relative">
                  <IoMail className="absolute top-3 left-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="email"
                    id="email"
                    placeholder="Work email"
                    maxLength={60}
                    {...register("email")}
                    className={`w-full px-4 py-4 border rounded-md focus:outline-none pl-9 ${
                      errors.email ? "border-[#FF8600]" : "border-gray-200"
                    }`}
                  />
                  {!errors.email && emailValue && (
                    <FaCheck className="absolute top-4 right-5 h-4 w-4 text-green-700" />
                  )}
                  <p className="absolute right-2 bottom-[-18px] text-xs text-gray-400">
                    {emailValue?.length || 0} / 60
                  </p>
                </div>
                {errors.email && (
                  <small className="text-xs text-orange-500 mt-1">
                    {errors.email.message}
                  </small>
                )}
              </div>

              <div className="flex flex-col mb-8">
                <label htmlFor="password" className="text-gray-600 text-sm">
                  Password
                </label>
                <div className="relative flex items-center">
                  <img
                    src="/lock-icon.svg"
                    alt="Lock Icon"
                    className="absolute top-3 left-3 h-5 w-5 text-gray-400"
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    maxLength={15}
                    {...register("password")}
                    className={`w-full px-4 py-4 border rounded-md focus:outline-none pl-9 pr-12 ${
                      errors.password ? "border-[#FF8600]" : "border-gray-200"
                    }`}
                  />
                  {showPassword ? (
                    <FaEye
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-3 right-3 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-3 right-3 h-6 w-6 text-gray-400 cursor-pointer"
                      aria-hidden="true"
                    />
                  )}
                  <p className="absolute right-2 bottom-[-18px] text-xs text-gray-400 cursor-pointer">
                    {passwordValue?.length || 0} / 15
                  </p>
                </div>
                {errors.password && (
                  <small className="text-xs text-[#FF8600] mt-1">
                    {errors.password.message}
                  </small>
                )}
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full text-gray-800 bg-gray-200 hover:bg-[#FF8600] rounded-md"
              >
                {loading ? "Creating..." : "Create account"}
              </Button>

              <div className="text-xs text-gray-500 mt-4 pb-6">
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
          </form>
          <GetHelpButton />
        </>
      )}
    </>
  );
}
