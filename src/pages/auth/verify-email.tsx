import OtpVerification from "@/components/OtpVerification";
import AuthLayout from "@/layouts/AuthLayout";
import { useVerifyOtpMutation } from "@/store/services/api/authApi";
import { useEffect, useState } from "react";

const VerifyEmail = () => {
  const handleResend = () => {};

  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("pending_email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  return (
    <AuthLayout>
      <OtpVerification email={email} />
    </AuthLayout>
  );
};

export default VerifyEmail;
