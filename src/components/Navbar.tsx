import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky-nav">
      <div className="container nav-content">
        <Link to="/" className="logo">
          NAATI <span className="text-orange">DOSA</span>
        </Link>

        <div className="nav-links">
          <Link to="/story">Our Story</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/find-us">Find Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-cta">
          <Link to="/find-us" className="button-pill bg-orange text-white">
            Find Our Truck
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .sticky-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--cream);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(107, 58, 31, 0.1);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--brown);
        }
        .nav-links {
          display: flex;
          gap: 2.5rem;
        }
        .nav-links a {
          font-family: var(--font-nav);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 0.9rem;
          color: var(--espresso);
        }
        .nav-links a:hover {
          color: var(--orange);
        }
        @media (max-width: 768px) {
          .nav-links { display: none; }
        }
      `}} />
    </nav>
  );
};

export default Navbar;
