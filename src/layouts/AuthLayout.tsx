import { currentYear } from "@/utils";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid lg:grid-cols-2 min-h-screen w-full bg-white">
      <div className="hidden lg:flex flex-col justify-center items-center w-full">
        <img
          src="/buddy-logo.png"
          alt="Logo-Image"
          width="140"
          height="140"
          className="absolute top-20 left-25 "
        />
        <div className="lg:w-9/12 w-full space-y-8 flex flex-col items-start relative">
          <div className="flex items-center space-x-2">
            <div>
              <IoIosCheckmarkCircle className="text-[#FF8600] h-8 w-8" />
            </div>
            <p className="text-base">
              Track real-time overview of company’s financial performance.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <IoIosCheckmarkCircle className="text-[#FF8600] h-8 w-8" />
            </div>
            <p className="text-base">
              Track created projects budget against actual revenue and expenses.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div>
              <IoIosCheckmarkCircle className="text-[#FF8600] h-8 w-8" />
            </div>
            <p className="text-base">
              Highlighted reports on budget deficit and surplus, accounting
              dimensions, balance sheets and real-time sales margin estimation.
            </p>
          </div>

          <p className="mt-20 text-sm">
            © {currentYear} Revvex. All rights reserved
          </p>
        </div>
      </div>
      <div className="w-full p-8 flex flex-col justify-center bg-[#F8FAFC] relative">
        <img
          src="/buddy-logo.png"
          alt="Logo-Image"
          width="140"
          height="140"
          className=" mx-auto lg:mb-20 mb-10 flex lg:hidden"
        />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
// This layout is used for the authentication pages (login, register, etc.)
// It has a different layout than the main app pages
