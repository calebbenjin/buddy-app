import OtpVerification from "@/components/OtpVerification";
import AuthLayout from "@/layouts/AuthLayout";

const VerifyEmail = () => {
  const handleResend = () => {};

  const handleSubmit = (otp: string) => {
    console.log("OTP submitted:", otp);
  };

  return (
    <AuthLayout>
      <OtpVerification
        email="calebben@gmail.com"
        onSubmit={handleSubmit}
        onResend={handleResend}
      />
    </AuthLayout>
  );
};

export default VerifyEmail;
