import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./ui/Button";

// Define the schema for OTP validation
const otpSchema = z.object({
  otp: z.array(z.string().length(1)).length(4),
});

type OtpFormValues = z.infer<typeof otpSchema>;

interface OtpVerificationProps {
  email: string;
  onSubmit: (otp: string) => void;
  onResend: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  email,
  onSubmit,
  onResend,
}) => {
  const [activeInput, setActiveInput] = useState<number>(0);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: ["", "", "", ""],
    },
    mode: "onChange",
  });

  const otpValues = watch("otp");

  // Function to handle OTP submission
  const submitOtp = (data: OtpFormValues) => {
    const otpString = data.otp.join("");
    onSubmit(otpString);
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;

    // Only accept numbers
    if (value && !/^\d+$/.test(value)) return;

    // Update the current input value
    const newOtp = [...otpValues];
    newOtp[index] = value.slice(-1); // Only take the last character if multiple were entered
    setValue("otp", newOtp);

    // Move to next input if value is entered
    if (value && index < 3) {
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle key press
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      // Move to previous input when backspace is pressed on an empty input
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      // Move to previous input with left arrow
      setActiveInput(index - 1);
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      // Move to next input with right arrow
      setActiveInput(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle paste functionality
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();

    // Check if pasted data consists of only numbers
    if (!/^\d+$/.test(pastedData)) return;

    // Only use up to 4 digits from the pasted data
    const otpDigits = pastedData.slice(0, 4).split("");

    // Fill in the OTP fields
    const newOtp = [...otpValues];
    otpDigits.forEach((digit, index) => {
      if (index < 4) newOtp[index] = digit;
    });

    setValue("otp", newOtp);

    // Focus the last field or the next empty field
    const focusIndex = Math.min(otpDigits.length, 3);
    setActiveInput(focusIndex);
    inputRefs.current[focusIndex]?.focus();
  };

  // Focus on first input on component mount
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // Auto-submit when all fields are filled
  useEffect(() => {
    if (otpValues.every((val) => val !== "") && isValid) {
      handleSubmit(submitOtp)();
    }
  }, [otpValues, isValid]);

  return (
    <div className="w-full max-w-md mx-auto p-10 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Verify your email
      </h2>
      <p className="text-gray-600 mb-6">
        A four digit OTP code has been sent to your email
        <br />
        <span className="text-orange-500">{email}</span>
      </p>

      <form onSubmit={handleSubmit(submitOtp)}>
        <div
          className="flex justify-start items-start gap-4 mb-6"
          onPaste={handlePaste}
        >
          {[0, 1, 2, 3].map((index) => (
            <div key={index} className="w-14 h-14">
              <input
                type="text"
                maxLength={1}
                className={`w-full h-full text-center text-2xl font-bold border rounded-lg focus:outline-none focus:ring-2 ${
                  activeInput === index
                    ? "border-orange-500 ring-orange-300"
                    : "border-gray-300"
                }`}
                {...register(`otp.${index}`)}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onFocus={() => setActiveInput(index)}
              />
            </div>
          ))}
        </div>

        <Button
          type="submit"
          className="py-3 px-10 text-white font-medium rounded-md transition-colors"
        >
          Confirm code
        </Button>
      </form>

      <div className="mt-6">
        <span className="text-gray-600">Didn't get the mail?</span>{" "}
        <button
          type="button"
          onClick={onResend}
          className="text-orange-500 hover:text-orange-600 font-medium"
        >
          Resend
        </button>
      </div>
    </div>
  );
};

export default OtpVerification;
