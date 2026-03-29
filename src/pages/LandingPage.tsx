import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Star, MapPin, MousePointerClick,
  ChevronRight, Clock, Calendar, Instagram,
  Facebook, Twitter, Mail, Phone, ExternalLink,
  MessageCircle, ArrowUp
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import OrderPopup from '../components/OrderPopup';
import { useOrderPopup } from '../hooks/useOrderPopup';

// Images
const heroDosa = '/images/hero_dosa_idli_platter.png';
const foodTruck = '/images/food-truck.jpg';
const galleryImg = '/images/gallery.png';
const eventsImg = '/images/events.png';
const g1 = '/images/g1.png';
const g2 = '/images/g2.png';
const g3 = '/images/g3.png';
const logo01 = '/images/Naati Dosa Logo-01.png';
const logo02 = '/images/Naati Dosa Logo-02.png';

const reviewsData = [
  { id: 1, name: "Varun Reddy", text: "The most authentic Dosa I've had in Florida. The Mysore Masala is a must-try! Spicy and flavorful.", rating: 5, date: "2 days ago" },
  { id: 2, name: "Sarah J.", text: "Softest Idlis ever! Their food truck is such a vibe in Delray Beach. Friendly service too!", rating: 5, date: "1 week ago" },
  { id: 3, name: "Rahul S.", text: "The Benne Dosa took me straight back to Davangere. Absolutely delicious and crispy!", rating: 5, date: "3 days ago" },
];

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { closePopup, selectedMenuItem, showPopup } = useOrderPopup(location.hash ? undefined : 1500);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) {
      return undefined;
    }

    const hashTarget = location.hash.replace('#', '');
    const timerId = window.setTimeout(() => {
      document.getElementById(hashTarget)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);

    return () => window.clearTimeout(timerId);
  }, [location.hash]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-page">
      <OrderPopup
        show={showPopup}
        selectedMenuItem={selectedMenuItem}
        onClose={closePopup}
        onPickup={() => {
          closePopup();
          scrollToSection('visit');
        }}
      />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/1234567890?text=I'd%20like%20to%20book%20an%20event%20with%20Naati%20Dosa"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
      >
        <span className="wa-label">Book an Event</span>
        <div className="wa-icon">
          <MessageCircle size={32} fill="white" color="var(--whatsapp)" />
        </div>
      </a>

      {/* Hero Section */}
      <section id="home" className="hero-section bg-cream">
        <div className="hero-blobs">
          <div className="hero-blob blob-1"></div>
          <div className="hero-blob blob-2"></div>
        </div>

        <div className="container hero-container">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="hero-badge">
                <span className="badge-dot"></span>
                <span>Now Serving Delray Beach, FL</span>
              </div>

              <h1 className="hero-headline">
                <span className="line-1">Taste the <span className="text-stroke">Soul</span></span>
                <span className="line-2">of <span className="text-orange italic">South India</span></span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hero-description"
            >
              Authentic South Indian dosas and soft idlis, served fresh. We're bringing the crispy, golden tradition of home right to your street.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-cta-group"
            >
              <button onClick={() => navigate('/menu')} className="cta-primary">
                Explore Menu <ChevronRight size={20} />
              </button>
              <button onClick={() => scrollToSection('visit')} className="cta-secondary">
                Find Our Truck
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="hero-trust"
            >
              <div className="trust-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#F5A623" color="#F5A623" />)}
              </div>
              <span>"Best Dosa & Idli in Florida" — Local Foodie</span>
            </motion.div>
          </div>

          <div className="hero-visual">
            <motion.div
              className="main-visual-container"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="visual-image-wrapper">
                <div className="hero-image-frame">
                  <img src={heroDosa} alt="South Indian Platter with Dosa and Idli" className="hero-main-img" />
                </div>
                <div className="hero-visual-decorator"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Ticker */}
      <div className="hero-ticker bg-espresso">
        <div className="ticker-inner ticker-scroll">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="ticker-item">
              CRISPY DOSA <span className="text-orange">✦</span> FRESH CHUTNEY <span className="text-orange">✦</span> AUTHENTIC SPICES <span className="text-orange">✦</span> DELRAY BEACH <span className="text-orange">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="about-section bg-white overflow-hidden">
        <div className="container about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-image-wrap"
          >
            <div className="about-blob bg-orange"></div>
            <img src={foodTruck} alt="Naati Dosa Truck" className="about-img" />
            <div className="about-badge">
              <strong>ESTD 2026</strong>
              <span>FLORIDA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="about-text-wrap"
          >
            <span className="sub-tag">Our Story</span>
            <h2 className="text-brown">Born from Tradition, Served with <span className="text-orange italic">Passion.</span></h2>
            <p className="about-desc">
              Founded on the belief that the best food comes from recipes passed down through generations.
              Our journey started in the heart of Karnataka, where the art of the perfect dosa is a daily ritual.
              Now, we've brought those authentic flavors to the sun-drenched streets of Delray Beach.
            </p>
            <div className="about-features">
              <div className="a-feat">
                <span className="feat-icon">✨</span>
                <div>
                  <strong>Fresh Daily</strong>
                  <p>Our batter is fermented for 12 hours and made fresh every single morning.</p>
                </div>
              </div>
              <div className="a-feat">
                <span className="feat-icon">🌶️</span>
                <div>
                  <strong>Real Spices</strong>
                  <p>We source our spices directly from small farmers in South India.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <span className="sub-tag">Visual Feast</span>
            <h2 className="text-brown">Taste with Your <span className="text-orange italic">Eyes</span></h2>
          </motion.div>

          <div className="gallery-grid-v2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="g-item g-large"
            >
              <img src={g1} alt="Crispy Dosa" />
              <div className="g-info">
                <h4>Signature Masala Dosa</h4>
                <p>Crispy perfection with spiced potato</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="g-item"
            >
              <img src={g2} alt="South Indian Spread" />
              <div className="g-info">
                <h4>Authentic Spread</h4>
                <p>A variety of chutneys & sambar</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="g-item"
            >
              <img src={g3} alt="Community Scene" />
              <div className="g-info">
                <h4>Bringing Joy</h4>
                <p>Happy faces at our truck</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="reviews-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="sub-tag accent-font">Guest Experiences</span>
            <h2 className="text-brown">What people are <span className="text-orange italic">saying</span></h2>
          </motion.div>

          <div className="reviews-grid">
            {reviewsData.map((rev, i) => (
              <motion.div
                key={rev.id}
                className="review-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="quote-icon">“</div>
                <div className="rating-stars">
                  {[...Array(rev.rating)].map((_, idx) => <Star key={idx} size={16} fill="var(--orange)" color="var(--orange)" />)}
                </div>
                <p className="review-text">"{rev.text}"</p>
                <div className="review-footer">
                  <div className="user-avatar">{rev.name.charAt(0)}</div>
                  <div className="user-info">
                    <strong>{rev.name}</strong>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="events-section bg-espresso text-cream">
        <div className="container events-grid">
          <div className="events-text">
            <span className="sub-tag text-orange">Upcoming</span>
            <h2 className="text-white">Join the <span className="text-orange italic">Celebration</span></h2>
            <p>Catch us at local festivals, community markets, and private events across South Florida.</p>

            <div className="event-list">
              <div className="event-item">
                <div className="event-date">
                  <span className="day">15</span>
                  <span className="month">MAR</span>
                </div>
                <div className="event-info">
                  <h3>Delray Seafood Festival</h3>
                  <p>Downtown Delray • 12PM - 8PM</p>
                </div>
              </div>
              <div className="event-item">
                <div className="event-date">
                  <span className="day">22</span>
                  <span className="month">MAR</span>
                </div>
                <div className="event-info">
                  <h3>West Palm Beach GreenMarket</h3>
                  <p>WPB Waterfront • 9AM - 1PM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="events-image-wrap"
          >
            <img src={eventsImg} alt="Food Truck Event" className="events-img" />
          </motion.div>
        </div>
      </section>

      <section id="visit" className="visit-section bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <span className="sub-tag">Find Us</span>
            <h2 className="text-brown">Visit the <span className="text-orange italic">Truck</span></h2>
          </motion.div>

          <div className="visit-layout-v2">
            <div className="visit-cards-grid">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="visit-info-card"
              >
                <MapPin className="card-icon text-orange" size={32} />
                <h3>Location</h3>
                <p>Delray Beach, Florida</p>
                <p className="detail">Downtown Parking Lot, Atlantic Ave</p>
                <a href="https://maps.google.com" target="_blank" className="nav-link-v2">Open in Maps <ExternalLink size={16} /></a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="visit-info-card"
              >
                <Clock className="card-icon text-orange" size={32} />
                <h3>Trading Hours</h3>
                <div className="hours-v2">
                  <div className="h-row"><span>Mon - Fri</span> <strong>4PM - 12AM</strong></div>
                  <div className="h-row"><span>Sat - Sun</span> <strong>4PM - 1AM</strong></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="visit-info-card"
              >
                <Phone className="card-icon text-orange" size={32} />
                <h3>Order Ahead</h3>
                <p>Call us to skip the line</p>
                <a href="tel:5616695387" className="phone-link">(561) 669-5387</a>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="visit-map-v2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114488.29177114668!2d-80.14498522068991!3d26.46788874136691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e39268f6385d%3A0xe9f7e52b226e6fa2!2sDelray%20Beach%2C%20FL!5e0!3m2!1sen!2s-!4v1711660000000!5m2!1sen!2s"
                allowFullScreen={true}
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="footer-v2 bg-brown text-cream">
        <div className="container">
          <div className="footer-top">
            <div className="f-col f-main">
              <div className="f-logo-group">
                <img src={logo01} alt="Naati Dosa Logo" className="footer-logo-img" />
              </div>
              <p className="f-brand-desc">
                Bringing the authentic, soul-stirring taste of Karnataka's traditional dosas to the vibrant streets of South Florida.
                Experience the heritage in every crispy bite.
              </p>
              <div className="f-socials">
                <a href="#" className="s-link"><Instagram size={24} /></a>
                <a href="#" className="s-link"><Facebook size={24} /></a>
                <a href="#" className="s-link"><Twitter size={24} /></a>
              </div>
            </div>

            <div className="f-col">
              <h4>Explore</h4>
              <ul className="f-links">
                <li><button onClick={() => scrollToSection('home')}>Home</button></li>
                <li><button onClick={() => scrollToSection('about')}>Our Story</button></li>
                <li><button onClick={() => navigate('/menu')}>The Menu</button></li>
                <li><button onClick={() => scrollToSection('gallery')}>Gallery</button></li>
                <li><button onClick={() => scrollToSection('reviews')}>Reviews</button></li>
                <li><button onClick={() => scrollToSection('events')}>Events</button></li>
                <li><button onClick={() => scrollToSection('visit')}>Find Us</button></li>
              </ul>
            </div>

            <div className="f-col">
              <h4>Contact Us</h4>
              <div className="f-contact-items">
                <div className="c-item">
                  <Phone size={20} className="text-orange" />
                  <div>
                    <span>Call to Order</span>
                    <p>(561) 669-5387</p>
                  </div>
                </div>
                <div className="c-item">
                  <MapPin size={20} className="text-orange" />
                  <div>
                    <span>Truck Location</span>
                    <p>Delray Beach, FL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 Naati Dosa. Handcrafted with Love.</p>
            <div className="b-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --brown: #6B3A1F;
          --orange: #F0A500;
          --espresso: #3d2b1f;
          --cream: #FDF6EC;
        }

        .scroll-to-top {
          position: fixed;
          bottom: 120px;
          right: 30px;
          z-index: 998;
          background: var(--brown);
          color: white;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .scroll-to-top:hover {
          background: var(--orange);
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .scroll-to-top {
            right: 20px;
            bottom: 110px;
            width: 50px;
            height: 50px;
          }
        }

        .landing-page { color: var(--espresso); font-family: var(--font-body); }
        .bg-cream { background-color: var(--cream); }
        .bg-white { background-color: var(--white); }
        .bg-brown { background-color: var(--brown); }
        .bg-espresso { background-color: var(--espresso); }
        .text-brown { color: var(--brown); }
        .text-orange { color: var(--orange); }
        .text-white { color: var(--white); }

        .accent-font { font-family: var(--font-accent); font-style: italic; }
        .heading-font { font-family: var(--font-heading); }
        .italic { font-style: italic; }

        .container {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-header { margin-bottom: 5rem; }
        .section-header h2 { font-size: 4rem; line-height: 1.1; margin-bottom: 1.5rem; }
        .section-desc { font-size: 1.2rem; opacity: 0.7; max-width: 600px; margin: 0 auto; }
        .sub-tag { font-family: var(--font-accent); font-weight: 600; font-style: italic; text-transform: none; letter-spacing: 1px; font-size: 1.35rem; margin-bottom: 1rem; display: block; color: var(--orange); opacity: 0.95; }

        /* Hero */
        .hero-section {
          position: relative;
          padding: 64px 0 110px;
          min-height: 82vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/images/hero-dosa.jpg');
          background-size: cover;
          background-position: center;
          opacity: 0.11;
          z-index: 0;
          transform: scale(1.03);
        }
        .hero-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(110deg, rgba(253,246,236,0.96) 0%, rgba(253,246,236,0.9) 52%, rgba(253,246,236,0.86) 100%);
          z-index: 1;
        }
        .hero-blobs { position: absolute; inset: 0; pointer-events: none; z-index: 1; }
        .hero-blob { position: absolute; border-radius: 50%; filter: blur(2px); }
        .blob-1 {
          width: min(34vw, 430px);
          aspect-ratio: 1;
          left: -120px;
          top: 20px;
          background: radial-gradient(circle, rgba(240,165,0,0.17) 0%, rgba(240,165,0,0.05) 65%, transparent 100%);
        }
        .blob-2 {
          width: min(28vw, 340px);
          aspect-ratio: 1;
          right: -90px;
          bottom: -60px;
          background: radial-gradient(circle, rgba(107,58,31,0.14) 0%, rgba(107,58,31,0.04) 70%, transparent 100%);
        }
        .hero-container { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 4rem; align-items: center; position: relative; z-index: 2; }
        .hero-headline { font-size: clamp(3.5rem, 8vw, 6.5rem); line-height: 1; font-weight: 900; font-style: italic; margin-bottom: 2rem; color: var(--brown); letter-spacing: -2px; text-shadow: 0 10px 30px rgba(62,31,8,0.05); }
        .text-stroke { -webkit-text-stroke: 1.5px var(--brown); color: transparent; }
        .hero-description { font-size: 1.3rem; line-height: 1.6; margin-bottom: 3rem; max-width: 500px; opacity: 0.85; }
        .hero-cta-group { display: flex; gap: 1.5rem; margin-bottom: 3rem; }
        .cta-primary { background: var(--brown); color: white; padding: 1.2rem 2.5rem; border-radius: 50px; font-weight: 800; display: flex; align-items: center; gap: 0.5rem; box-shadow: 0 10px 30px rgba(107,58,31,0.2); border: none; cursor: pointer; transition: 0.3s; }
        .cta-primary:hover { background: var(--espresso); transform: translateY(-3px); }
        .cta-secondary { background: transparent; color: var(--brown); padding: 1.2rem 2.5rem; border-radius: 50px; font-weight: 800; border: 2px solid var(--brown); cursor: pointer; transition: 0.3s; }
        .cta-secondary:hover { background: var(--brown); color: white; transform: translateY(-3px); }

        .hero-visual { position: relative; perspective: 1000px; }
        .visual-image-wrapper { position: relative; z-index: 2; width: 100%; border-radius: 40px; animation: hero-float 6s ease-in-out infinite; }
        .hero-image-frame { position: relative; z-index: 2; border-radius: 40px; overflow: hidden; box-shadow: 0 40px 100px rgba(107,58,31,0.2); border: 15px solid white; transform: rotate(1deg); transition: 0.5s; }
        .hero-image-frame:hover { transform: rotate(0deg) scale(1.02); }
        .hero-main-img { width: 100%; display: block; height: 550px; object-fit: cover; }
        .hero-visual-decorator { position: absolute; top: -30px; right: -30px; bottom: -30px; left: -30px; background: var(--orange); opacity: 0.08; border-radius: 60px; z-index: 1; transform: rotate(-3deg); }
        @keyframes hero-float { 
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .hero-trust { display: flex; align-items: center; gap: 1rem; margin-top: 1rem; font-weight: 700; opacity: 0.8; }
        .trust-stars { display: flex; gap: 4px; }

        /* Ticker */
        .hero-ticker { padding: 1.5rem 0; overflow: hidden; white-space: nowrap; }
        .ticker-inner { display: inline-block; animation: ticker-scroll 30s linear infinite; }
        .ticker-item { color: white; font-family: var(--font-heading); font-weight: 800; margin-right: 3rem; font-size: 1.1rem; }
        @keyframes ticker-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

        /* About */
        .about-section { padding: 140px 0; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .about-image-wrap { position: relative; }
        .about-img { width: 100%; border-radius: 30px; position: relative; z-index: 2; height: 600px; object-fit: cover; }
        .about-blob { position: absolute; inset: -20px; border-radius: 40px; opacity: 0.15; z-index: 1; }
        .about-badge { position: absolute; bottom: 30px; right: -20px; background: white; padding: 1.5rem; border-radius: 20px; z-index: 3; box-shadow: 0 15px 40px rgba(0,0,0,0.1); text-align: center; }
        .about-badge strong { display: block; color: var(--orange); font-size: 1.4rem; }
        .about-desc { font-size: 1.2rem; line-height: 1.8; margin-bottom: 3rem; opacity: 0.8; }
        .about-features { display: grid; gap: 2rem; }
        .a-feat { display: flex; gap: 1.5rem; }
        .feat-icon { font-size: 1.5rem; background: var(--cream); width: 50px; height: 50px; display: flex; align-items: center; justify-content: center; border-radius: 12px; }

        /* POS Menu Section */
        .menu-section-pos { background: var(--cream); padding: 80px 0 100px; }
        .menu-pos-header { max-width: 1300px; margin: 0 auto; padding: 0 2rem 3rem; text-align: center; }
        .menu-pos-body { max-width: 1300px; margin: 0 auto; padding: 0 2rem; display: flex; gap: 0; height: 80vh; }
        .menu-pos-sidebar { width: 180px; flex-shrink: 0; overflow-y: auto; padding-right: 16px; padding-top: 4px; scrollbar-width: none; }
        .menu-pos-sidebar::-webkit-scrollbar { display: none; }
        .menu-sidebar-link { display: block; padding: 10px 14px; border-radius: 8px; font-size: 14px; font-weight: 500; color: #8E8E93; text-decoration: none; transition: 0.2s; border-left: 3px solid transparent; line-height: 1.3; }
        .menu-sidebar-link:hover { background: rgba(107,58,31,0.08); border-left-color: var(--brown); color: var(--brown); font-weight: 600; }
        .menu-pos-content { flex: 1; min-width: 0; overflow-y: auto; display: flex; flex-direction: column; gap: 48px; padding-bottom: 40px; scrollbar-width: thin; scrollbar-color: rgba(107,58,31,0.2) transparent; }
        .menu-pos-cat-heading { display: flex; flex-direction: column; align-items: center; margin-bottom: 20px; }
        .menu-pos-cat-heading span { font-family: Georgia, 'Playfair Display', serif; font-size: 28px; color: var(--brown); font-style: italic; font-weight: 700; line-height: 1.2; }
        .menu-pos-cat-underline { width: 60px; height: 2px; background: var(--orange); margin-top: 8px; border-radius: 2px; }
        .menu-pos-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .menu-pos-card { height: 130px; padding: 14px 16px; border-radius: 14px; background: #fff; border: 1px solid rgba(107,58,31,0.07); display: flex; align-items: center; justify-content: space-between; gap: 14px; transition: 0.2s; box-shadow: 0 2px 8px rgba(107,58,31,0.04); }
        .menu-pos-card:hover { background: #fffaf4; box-shadow: 0 6px 20px rgba(107,58,31,0.09); }
        .menu-pos-card-left { display: flex; flex-direction: column; justify-content: center; gap: 5px; flex: 1; min-width: 0; overflow: hidden; }
        .menu-pos-name { font-size: 16px; font-weight: 600; color: var(--espresso); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
        .menu-pos-price { font-size: 15px; font-weight: 600; color: var(--brown); }
        .menu-pos-desc { font-size: 12.5px; color: #8E8E93; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .menu-pos-card-right { position: relative; flex-shrink: 0; }
        .menu-pos-img { width: 100px; height: 90px; border-radius: 10px; object-fit: cover; display: block; }
        .menu-pos-add { position: absolute; bottom: -6px; right: -6px; width: 28px; height: 28px; border-radius: 50%; background: var(--brown); color: white; font-size: 18px; line-height: 1; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; font-weight: 400; transition: 0.2s; box-shadow: 0 2px 8px rgba(107,58,31,0.3); }
        .menu-pos-add:hover { background: var(--espresso); transform: scale(1.1); }

        /* Gallery Section */
        .gallery-section { padding: 120px 0; }
        .gallery-grid-v2 { display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: repeat(2, 350px); gap: 2rem; margin-top: 4rem; }
        .g-item { position: relative; border-radius: 35px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.1); }
        .g-large { grid-row: span 2; }
        .g-item img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .g-item:hover img { transform: scale(1.08); }
        .g-info { position: absolute; bottom: 0; left: 0; right: 0; padding: 3rem 2rem; background: linear-gradient(transparent, rgba(62,31,8,0.95)); color: white; opacity: 0; transform: translateY(20px); transition: 0.4s; }
        .g-item:hover .g-info { opacity: 1; transform: translateY(0); }
        .g-info h4 { font-size: 1.8rem; margin-bottom: 0.5rem; font-family: var(--font-heading); }
        .g-info p { font-size: 1rem; opacity: 0.8; }

        /* Events Section */
        .events-section { padding: 120px 0; }
        .events-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
        .event-list { margin-top: 4rem; display: flex; flex-direction: column; gap: 2.5rem; }
        .event-item { display: flex; gap: 2rem; align-items: center; padding-bottom: 2.5rem; border-bottom: 1px solid rgba(255,166,35,0.2); }
        .event-item:last-child { border-bottom: none; }
        .event-date { background: var(--orange); color: white; padding: 1.2rem; border-radius: 20px; text-align: center; min-width: 90px; }
        .event-date .day { display: block; font-size: 2rem; font-weight: 900; line-height: 1; }
        .event-date .month { display: block; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; margin-top: 5px; }
        .event-info h3 { font-size: 1.8rem; margin-bottom: 0.5rem; color: white; font-family: var(--font-heading); }
        .event-info p { opacity: 0.7; font-size: 1.1rem; }
        .events-image-wrap { position: relative; }
        .events-img { width: 100%; border-radius: 40px; height: 500px; object-fit: cover; box-shadow: 0 20px 50px rgba(0,0,0,0.3); }

        /* Reviews Section */
        .reviews-section { padding: 120px 0; background: #fffcf8; }
        .reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 4rem; }
        .review-card { background: white; padding: 3.5rem 2.5rem 3rem; border-radius: 35px; box-shadow: 0 15px 45px rgba(107,58,31,0.05); position: relative; border: 1px solid rgba(107,58,31,0.03); }
        .quote-icon { position: absolute; top: 20px; right: 30px; font-size: 5rem; font-family: var(--font-heading); color: var(--orange); opacity: 0.12; line-height: 1; pointer-events: none; }
        .rating-stars { display: flex; gap: 4px; margin-bottom: 1.5rem; }
        .review-text { font-size: 1.15rem; line-height: 1.8; color: var(--espresso); margin-bottom: 2rem; font-style: italic; font-family: var(--font-body); opacity: 0.9; }
        .review-footer { display: flex; align-items: center; gap: 1rem; border-top: 1px solid rgba(107,58,31,0.08); padding-top: 1.8rem; }
        .user-avatar { width: 50px; height: 50px; background: var(--brown); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; font-family: var(--font-heading); font-size: 1.2rem; }
        .user-info { display: flex; flex-direction: column; line-height: 1.4; }
        .user-info strong { color: var(--brown); font-size: 1.1rem; font-family: var(--font-heading); }
        .user-info span { font-size: 0.9rem; opacity: 0.5; font-family: var(--font-body); }

        /* Updated Visit v2 */
        .visit-section { padding: 120px 0; }
        .visit-layout-v2 { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 4rem; margin-top: 2rem; align-items: start; }
        .visit-cards-grid { display: flex; flex-direction: column; gap: 2rem; }
        .visit-info-card { background: white; padding: 2.5rem; border-radius: 35px; box-shadow: 0 15px 45px rgba(0,0,0,0.03); text-align: center; display: flex; flex-direction: column; align-items: center; border: 1px solid rgba(107,58,31,0.03); }
        .card-icon { margin-bottom: 1.5rem; background: var(--cream); width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; border-radius: 50%; }
        .visit-info-card h3 { font-size: 1.6rem; margin-bottom: 0.8rem; color: var(--brown); font-family: var(--font-heading); }
        .visit-info-card p { opacity: 0.7; font-size: 1rem; line-height: 1.5; }
        .hours-v2 { margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.8rem; width: 100%; max-width: 280px; }
        .h-row { display: flex; justify-content: space-between; font-size: 1rem; padding-bottom: 0.8rem; border-bottom: 1px dashed rgba(107,58,31,0.1); }
        .h-row:last-child { border-bottom: none; }
        .h-row span { opacity: 0.6; font-weight: 600; }
        .h-row strong { color: var(--brown); font-weight: 800; }
        .nav-link-v2 { display: inline-flex; align-items: center; gap: 0.8rem; margin-top: 2rem; color: var(--orange); font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1.5px; text-decoration: none; border: 2px solid var(--orange); padding: 0.8rem 1.5rem; border-radius: 50px; transition: 0.3s; }
        .nav-link-v2:hover { background: var(--orange); color: white; }
        .phone-link { display: block; margin-top: 1.2rem; font-size: 1.8rem; font-weight: 900; color: var(--brown); text-decoration: none; transition: 0.3s; }
        .phone-link:hover { color: var(--orange); transform: scale(1.05); }
        .visit-map-v2 { height: 600px; box-shadow: 0 30px 60px rgba(107,58,31,0.1); border-radius: 40px; overflow: hidden; border: 8px solid white; position: relative; background: #eee; }
        .visit-map-v2 iframe { width: 100%; height: 100%; border: 0; display: block; filter: saturate(0.7) contrast(1.1) brightness(1.02); }

        /* Footer Improvements */
        .footer-v2 { padding: 120px 0 60px; border-top: 1px solid rgba(107,58,31,0.1); }
        .footer-top { display: grid; grid-template-columns: 1.8fr 0.7fr 1.2fr 1.3fr; gap: 5rem; margin-bottom: 80px; }
        .f-logo-group { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2.5rem; }
        .footer-logo-img { 
          height: 150px; 
          width: auto; 
          object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.2));
          transition: 0.4s ease;
        }
        .footer-logo-img:hover {
          transform: scale(1.08);
        }
        .f-logo-text { display: flex; flex-direction: column; line-height: 1; }
        .f-logo-main { font-family: var(--font-heading); font-size: 2.4rem; font-weight: 900; color: var(--white); letter-spacing: -1.5px; }
        .f-logo-sub { font-family: var(--font-heading); font-size: 0.85rem; color: var(--orange); text-transform: uppercase; letter-spacing: 4px; margin-top: 6px; }
        .f-brand-desc { opacity: 0.6; line-height: 1.8; margin-bottom: 2.5rem; font-size: 1.05rem; max-width: 400px; }
        .f-socials { display: flex; gap: 1.5rem; }
        .s-link { background: rgba(255,255,255,0.08); width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; border-radius: 50%; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1); color: white; }
        .s-link:hover { background: var(--orange); transform: translateY(-5px) rotate(8deg); }
        .footer-top h4 { color: white; font-size: 1.3rem; margin-bottom: 2.5rem; font-family: var(--font-heading); position: relative; padding-bottom: 12px; font-weight: 800; }
        .footer-top h4::after { content: ''; position: absolute; bottom: 0; left: 0; width: 40px; height: 3px; background: var(--orange); border-radius: 50px; }
        .f-links { display: flex; flex-direction: column; gap: 1.2rem; }
        .f-links button { background: none; border: none; color: white; opacity: 0.6; font-size: 1.05rem; text-align: left; transition: 0.3s; cursor: pointer; padding: 0; font-weight: 500; }
        .f-links button:hover { opacity: 1; color: var(--orange); transform: translateX(8px); }
        .f-contact-items { display: grid; gap: 2rem; }
        .c-item { display: flex; gap: 1.5rem; align-items: center; }
        .c-item span { display: block; font-size: 0.75rem; text-transform: uppercase; opacity: 0.5; letter-spacing: 1.5px; margin-bottom: 0.3rem; font-weight: 800; }
        .c-item p { font-weight: 700; font-size: 1.1rem; color: white; }
        .f-newsletter p { margin-bottom: 2rem; opacity: 0.6; font-size: 1.05rem; }
        .f-form { display: flex; background: rgba(255,255,255,0.06); padding: 0.6rem; border-radius: 50px; border: 1px solid rgba(255,255,255,0.1); transition: 0.3s; }
        .f-form:focus-within { background: rgba(255,255,255,0.1); border-color: var(--orange); }
        .f-form input { flex: 1; background: none; border: none; padding: 0 1.5rem; color: white; outline: none; font-size: 1rem; }
        .f-form button { background: var(--orange); color: white; padding: 0.9rem 2rem; border-radius: 50px; font-weight: 900; border: none; cursor: pointer; transition: 0.3s; }
        .f-form button:hover { background: white; color: var(--brown); transform: scale(1.05); }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.08); padding-top: 50px; display: flex; justify-content: space-between; align-items: center; opacity: 0.5; font-size: 0.95rem; font-weight: 500; }
        .b-links { display: flex; gap: 3rem; }
        .b-links a { color: white; text-decoration: none; transition: 0.3s; }
        .b-links a:hover { color: var(--orange); }

        @media (max-width: 1024px) {
          .hero-container, .about-grid, .events-grid, .visit-layout-v2 { grid-template-columns: 1fr; }
          .hero-content { text-align: center; }
          .hero-description { margin: 0 auto 3rem; }
          .hero-cta-group { justify-content: center; }
          .about-img, .events-img { height: 400px; }
          .footer-top { grid-template-columns: 1fr 1fr; gap: 3rem; }
          .gallery-grid-v2 { grid-template-columns: 1fr; grid-template-rows: auto; }
          .g-large { grid-row: auto; }
          .visit-cards-grid { order: 2; }
          .visit-map-v2 { order: 1; height: 450px; }
        }
        @media (max-width: 768px) {
          .footer-top { grid-template-columns: 1fr; gap: 4rem; }
          .footer-bottom { flex-direction: column; gap: 2rem; text-align: center; }
          .b-links { gap: 1.5rem; justify-content: center; }
        }

        :root {
          --whatsapp: #25D366;
        }

        /* Order Popup */
        .order-popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 2rem;
        }
        .order-popup {
          background: linear-gradient(135deg, #FDF6EC 0%, #FFFDF9 100%);
          width: 100%;
          max-width: 440px;
          border-radius: 40px;
          padding: 3.5rem 2.5rem 3rem;
          position: relative;
          text-align: center;
          box-shadow: 0 40px 100px rgba(62,31,8,0.25);
          border: 1px solid rgba(107,58,31,0.08);
        }
        .close-popup {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.05);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          color: var(--brown);
        }
        .close-popup:hover {
          background: var(--brown);
          color: white;
          transform: rotate(90deg);
        }
        .popup-logo {
          height: 90px;
          margin-bottom: 1.5rem;
        }
        .popup-header h3 {
          font-family: var(--font-heading);
          font-size: 1.8rem;
          margin-bottom: 0.8rem;
          color: var(--brown);
        }
        .popup-header p {
          opacity: 0.7;
          margin-bottom: 2rem;
          line-height: 1.4;
          font-size: 0.95rem;
        }
        .popup-options {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        .popup-btn {
          display: flex;
          align-items: center;
          padding: 1.2rem 2.5rem;
          border-radius: 20px;
          font-weight: 800;
          font-size: 1.1rem;
          text-decoration: none;
          transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: none;
          cursor: pointer;
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          position: relative;
          overflow: hidden;
        }
        .popup-btn.centered { justify-content: center; text-align: center; }
        .popup-btn.dd { background: #FF3008; color: white; box-shadow: 0 12px 24px rgba(255, 48, 8, 0.25); }
        .popup-btn.ue { background: #06C167; color: white; box-shadow: 0 12px 24px rgba(6, 193, 103, 0.25); }
        .popup-btn.dine { 
          background: white; 
          color: var(--brown); 
          border: 2px solid var(--brown);
          justify-content: center;
          padding: 1.2rem;
        }
        .popup-btn.dine .brand-icon-wrap { margin-right: 0.8rem; width: 24px; }
        .popup-btn img[alt="UberEats"], .popup-btn img[alt="DoorDash"] {
          filter: brightness(0) invert(1); /* Make black SVG logos white */
        }
        .popup-btn:hover { 
          transform: translateY(-5px) scale(1.02); 
          box-shadow: 0 15px 30px rgba(0,0,0,0.15); 
        }
        .popup-btn.dd:hover { background: #E22A07; }
        .popup-btn.ue:hover { background: #05a357; }
        .popup-btn.dine:hover { background: var(--brown); color: white; }
        
        .popup-divider {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin: 0.5rem 0;
          opacity: 0.3;
        }
        .popup-divider::before, .popup-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: currentColor;
        }
        .popup-divider span { font-size: 0.8rem; font-weight: 900; font-family: var(--font-heading); color: var(--brown); }

        /* Floating WhatsApp */
        .floating-whatsapp {
          position: fixed;
          bottom: 30px;
          right: 30px;
          z-index: 999;
          display: flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 8px 10px 8px 25px;
          border-radius: 50px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          text-decoration: none;
          transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .wa-label {
          color: var(--espresso);
          font-weight: 800;
          font-family: var(--font-heading);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-size: 0.8rem;
        }
        .wa-icon {
          background: var(--whatsapp);
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: wa-pulse 2s infinite;
        }
        .floating-whatsapp:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 20px 50px rgba(37, 211, 102, 0.3);
        }
        @keyframes wa-pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
          70% { box-shadow: 0 0 0 20px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 768px) {
          .floating-whatsapp { 
            padding: 8px; 
            right: 20px; 
            bottom: 20px; 
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }
          .wa-label { display: none; }
          
          .order-popup { 
            padding: 2.5rem 1.5rem 2rem; 
            max-width: 90%;
            border-radius: 30px;
          }
          .popup-logo { height: 75px; }
          .popup-header h3 { font-size: 1.6rem; }
          .popup-btn { padding: 1rem 1.5rem; font-size: 0.95rem; }

          .container { padding: 0 1.2rem; }
          
          /* Hero Mobile Fix */
          .hero-section { padding: 52px 0 72px; min-height: 74vh; text-align: center; }
          .hero-section::before { opacity: 0.1; background-position: center right; }
          .hero-section::after { background: linear-gradient(180deg, rgba(253,246,236,0.95) 0%, rgba(253,246,236,0.9) 100%); }
          .hero-container { grid-template-columns: 1fr; gap: 3rem; }
          .hero-headline { font-size: 3.5rem; margin-bottom: 1.5rem; font-style: italic; }
          .hero-description { font-size: 1.1rem; margin: 0 auto 2.5rem; }
          .hero-cta-group { justify-content: center; gap: 1rem; }
          .hero-image-frame { height: 320px; width: 100%; max-width: 400px; margin: 0 auto; border-width: 8px; }

          .section-header h2 { font-size: 2.5rem; }
          .about-section, .gallery-section, .events-section, .visit-section { padding: 60px 0; }

          /* POS Menu Mobile */
          .menu-pos-sidebar { display: none; }
          .menu-pos-body { padding: 0 1rem; height: auto; }
          .menu-pos-content { overflow-y: visible; }
          .menu-pos-grid { grid-template-columns: 1fr; }

          .about-img, .events-img { height: 300px; border-radius: 20px; }
          
          /* Gallery Grid Imp */
          .gallery-grid-v2 { grid-template-columns: 1fr; gap: 1.5rem; }
          .g-item { height: 300px; }
          .g-large { grid-row: auto; height: 350px; }

          .visit-layout-v2 { gap: 2.5rem; }
          .visit-map-v2 { height: 350px; border-radius: 25px; }
          
          /* Footer Center Fix */
          .footer-top { grid-template-columns: 1fr; gap: 4rem; text-align: center; }
          .f-logo-group { justify-content: center; }
          .footer-logo-img { height: 150px; }
          .f-brand-desc { margin: 0 auto 2.5rem; }
          .f-socials { justify-content: center; }
          .footer-top h4::after { left: 50%; transform: translateX(-50%); }
          .f-links button { text-align: center; }
          .f-contact-items .c-item { justify-content: center; text-align: center; flex-direction: column; }
          .f-form { flex-direction: column; gap: 1rem; border-radius: 20px; }
          .f-form input { text-align: center; padding: 1.2rem; }
          .f-form button { width: 100%; }

          .footer-bottom { flex-direction: column; gap: 1.5rem; text-align: center; }
          .b-links { gap: 1.5rem; justify-content: center; }
        }
        `}} />
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="scroll-to-top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div >
  );
};

export default LandingPage;
