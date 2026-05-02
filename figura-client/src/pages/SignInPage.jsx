import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext.jsx";

const inputClasses =
  "w-full rounded-xl border border-zinc-300 bg-zinc-100 px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-zinc-500 focus:bg-zinc-50";

const actionButtonClass =
  "w-full rounded-lg py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  const navigate = useNavigate();
  const { currentUser, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard", { replace: true });
    }
  }, [currentUser, navigate]);

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const result = login(email, password);
    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate("/dashboard", { replace: true });
  }

  return (
    <div className="mt-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Log In
      </h1>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Ipagpatuloy ang iyong istilo at identidad na matapang, maangas, at hindi sumusunod sa karamihan.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-medium text-zinc-700"
          >
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-medium text-zinc-700"
          >
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Current password"
            autoComplete="current-password"
            className={inputClasses}
          />
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-zinc-900"
            />
            <span>Remember me</span>
          </label>
        </div>

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClass}
        >
          Log In
        </Button>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-semibold text-zinc-900 transition hover:text-zinc-700"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default SignInPage;