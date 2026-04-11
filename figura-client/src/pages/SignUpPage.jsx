import { Link } from "react-router-dom";
import Button from "../components/Button";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-zinc-100 p-4 py-3 text-sm text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-zinc-600 focus:bg-zinc-50";

const actionButtonClass =
  "w-full rounded-lg py-3 text-white bg-primary";

const SignUpPage = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <p className="text-sm text-zinc-600 text-center">
        Ipakita ang iyong tunay na sarili malaya, matapang, at handang tumayo mag-isa sa mundo ng streetwear.
      </p>

      <form className="grid gap-3 mt-6 grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="text-sm font-medium text-zinc-700"
          >
            First Name
          </label>
          <input
            id="first-name"
            type="text"
            placeholder="First name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="text-sm font-medium text-zinc-700"
          >
            Last Name
          </label>
          <input
            id="last-name"
            type="text"
            placeholder="Last name"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="your@email.com"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Min. 6 characters"
            className={inputClasses}
          />
          <p className="text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <div className="col-span-2 text-center">
          <Button type="button" variant="primary" className={actionButtonClass}>
            Create Account
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-semibold text-zinc-800 transition hover:text-zinc-600"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;