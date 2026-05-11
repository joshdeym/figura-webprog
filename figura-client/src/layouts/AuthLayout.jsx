import { Outlet } from 'react-router-dom';
import authImage from '../assets/vlone logo.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-zinc-100 text-zinc-900
      flex items-center justify-center px-4 py-8">
      
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr]
        w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        <div className="relative hidden lg:block min-h-[500px]">
          <img
            src={authImage}
            alt="Auth visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        <main className="flex items-center bg-zinc-50 px-6 py-10 sm:px-10 lg:px-16">
          <div className="mx-auto w-full max-w-md">
            <Outlet />
          </div>
        </main>

      </div>
    </section>
  );
};

export default AuthLayout;