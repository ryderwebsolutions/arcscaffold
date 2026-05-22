import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] bg-arc-grey pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black text-navy mb-4">Page Not Found</h1>
        <p className="text-arc-steel mb-6">The page you are looking for could not be found.</p>
        <Link to="/" className="inline-flex bg-arc-orange hover:bg-arc-orange-dark text-white font-bold px-6 py-3 rounded">
          Back To Home
        </Link>
      </div>
    </section>
  );
}
