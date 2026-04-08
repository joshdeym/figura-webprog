import { Link } from 'react-router-dom';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="bg-primary w-full min-h-screen m-0 p-0 flex items-center justify-center">
      <div className="text-center px-4 py-16">
        {/* 404 Number */}
        <h1 className="text-9xl md:text-[150px] font-black text-accent mb-4 leading-none">404</h1>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-heading mb-6">Page Not Found</h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-primary mb-4 max-w-md mx-auto leading-relaxed">
          Sorry, the link you followed doesn't exist. Looks like you took a wrong turn in the VLONE universe.
        </p>
        
        {/* Features/Info */}
        <div className="my-12 flex flex-col sm:flex-row gap-6 justify-center text-center">
          <div className="border border-accent rounded-xl p-6 bg-surface inline-block">
            <p className="text-accent text-sm font-bold uppercase mb-2">Valid Routes</p>
            <p className="text-primary text-sm">Home • About • Articles</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link to="/">
            <Button className="px-12 py-4">Back to Home</Button>
          </Link>
          <Link to="/articles">
            <Button className="px-12 py-4 border-2 border-accent text-accent bg-transparent hover:bg-accent hover:text-heading">
              Explore Articles
            </Button>
          </Link>
        </div>

        {/* Footer Text */}
        <p className="text-xs md:text-sm text-primary mt-12 opacity-70">
          Error Code: 404 | Lost in the streets
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;