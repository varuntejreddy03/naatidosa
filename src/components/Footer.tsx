import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-brown text-cream">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo text-white">
            NAATI <span className="text-orange">DOSA</span>
          </Link>
          <p className="footer-tagline">
            Authentic South Indian dosas, fresh off the griddle.
            Serving the soul of India in Delray Beach.
          </p>
          <div className="social-icons">
            <Facebook size={20} />
            <Instagram size={20} />
            <Twitter size={20} />
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/story">Our Story</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/find-us">Find Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/social">Social</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><Phone size={18} className="text-orange" /> (561) 669-5387</li>
            <li><Mail size={18} className="text-orange" /> walkingpotato25@gmail.com</li>
            <li><MapPin size={18} className="text-orange" /> Delray Beach, Florida</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Naati Dosa · All Rights Reserved · Delray Beach, FL</p>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer {
          padding: 80px 0 20px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 4rem;
        }
        .footer-brand .logo {
          font-family: var(--font-heading);
          font-size: 2rem;
          margin-bottom: 1.5rem;
          display: block;
          color: var(--white);
        }
        .footer-tagline {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 2rem;
          max-width: 300px;
        }
        .social-icons {
          display: flex;
          gap: 1.5rem;
        }
        .social-icons svg {
          cursor: pointer;
          transition: 0.3s;
        }
        .social-icons svg:hover {
          color: var(--orange);
        }
        .footer-links h3, .footer-contact h3 {
          font-family: var(--font-nav);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        .footer-links ul li {
          margin-bottom: 0.8rem;
        }
        .footer-links ul li a {
          opacity: 0.7;
        }
        .footer-links ul li a:hover {
          opacity: 1;
          color: var(--orange);
          padding-left: 5px;
        }
        .footer-contact ul li {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
          opacity: 0.8;
        }
        .footer-bottom {
          border-top: 1px solid rgba(253, 246, 236, 0.1);
          margin-top: 60px;
          padding-top: 30px;
          text-align: center;
          font-size: 0.9rem;
          opacity: 0.5;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 3rem; }
        }
      `}} />
    </footer>
  );
};

export default Footer;
