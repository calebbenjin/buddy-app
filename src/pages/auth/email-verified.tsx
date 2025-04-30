
import Button from '@/components/ui/Button';
import AuthLayout from '@/layouts/AuthLayout'
import { Link } from 'react-router-dom';

const EmailVerified = () => {
  
  return (
    <AuthLayout>
      <div className="w-full space-y-0 max-w-md mx-auto bg-white py-8 px-10 rounded-lg shadow-2xl border border-gray-200 text-center">
        <img
          src="/envelope-circle-check-solid 1.png"
          alt="Logo-Image"
          width="80"
          height="80"
          className="mx-auto"
        />
        <div className="space-y-4 py-6">
          <h2 className="text-2xl font-semibold">Email verified !</h2>
          <p className="mt-1 text-sm mb-10">
            The verified email address will be associated with your account.
            Click on the button below to continue
          </p>
          <Link to="/auth/verify-email">
            <Button className="rounded-lg px-12">Continue</Button>
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
}

export default EmailVerified