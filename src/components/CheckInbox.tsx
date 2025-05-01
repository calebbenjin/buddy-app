import Button from "./ui/Button";
import { Link, useNavigate } from "react-router-dom";

interface CheckInboxProps {
  email: string;
}

const CheckInbox = ({ email }: CheckInboxProps) => {
  const navigate = useNavigate();

  const handleResend = () => {
    navigate("/auth/verify-email");
  };

  return (
    <div className="w-full space-y-0 max-w-md mx-auto bg-white py-6 px-10 rounded-lg shadow-2xl border border-gray-200 text-center">
      <img
        src="/sent-email.png"
        alt="Logo-Image"
        width="140"
        height="140"
        className="mx-auto"
      />
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Check your mailbox !</h2>
        <p className="mt-1 text-sm">
          We’ve sent an email to <b>{email}</b> with a an OTP to confirm your
          account. Check your inbox to activate your account.
        </p>
        <Link to="/auth/verify-email">
          <Button className="rounded-lg px-10">Confirm Email</Button>
        </Link>
      </div>

      <div className="flex items-center justify-center mt-4 mb-6">
        <p className="text-sm">Did't get the mail?</p>
        <Button
          type="button"
          variant="ghost"
          onClick={handleResend}
          className="text-sm "
        >
          Resend
        </Button>
      </div>
    </div>
  );
};

export default CheckInbox;
