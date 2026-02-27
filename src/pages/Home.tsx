import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, MapPin, MousePointerClick, ChevronRight } from 'lucide-react';

const heroDosa = '/images/hero-dosa.jpg';
const foodTruck = '/images/food-truck.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section bg-cream">
        {/* Dynamic Background Elements */}
        <div className="hero-blobs">
          <div className="hero-blob blob-1"></div>
          <div className="hero-blob blob-2"></div>
          <div className="hero-blob blob-3"></div>
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
              Authentic South Indian dosas, fresh off the griddle. We're bringing the crispy, golden tradition of home right to your street.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hero-cta-group"
            >
              <Link to="/menu" className="cta-primary">
                Order Online <ChevronRight size={20} />
              </Link>
              <Link to="/menu" className="cta-secondary">
                Explore Full Menu
              </Link>
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
              <span>"Best Dosa in Florida" — Local Foodie</span>
            </motion.div>
          </div>

          <div className="hero-visual">
            <motion.div
              className="main-visual-container"
              initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="image-overflow-container animate-float">
                <div className="visual-circle-bg"></div>
                <img src={heroDosa} alt="Crispy Masala Dosa" className="hero-main-img" />

                {/* Floating Elements */}
                <motion.div
                  className="floating-card card-top"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="f-icon bg-orange">🌿</div>
                  <div className="f-text">
                    <strong>100% Vegan</strong>
                    <span>Plant-based Goodness</span>
                  </div>
                </motion.div>

                <motion.div
                  className="floating-card card-bottom"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <div className="f-icon bg-brown">🌶️</div>
                  <div className="f-text">
                    <strong>Fresh Spices</strong>
                    <span>Authentic Flavors</span>
                  </div>
                </motion.div>

                <div className="badge-round rotate-anim">
                  <svg viewBox="0 0 100 100">
                    <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text font-family="var(--font-nav)" font-weight="bold" font-size="8">
                      <textPath xlinkHref="#circlePath">
                        AUTHENTIC RECIPES • FRESH DAILY • SINCE 2026 •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Ticker Band */}
      <div className="hero-ticker bg-espresso">
        <div className="ticker-inner ticker-scroll">
          {[...Array(12)].map((_, i) => (
            <span key={i} className="ticker-item">
              CRISPY DOSA <span className="text-orange">✦</span> FRESH CHUTNEY <span className="text-orange">✦</span> AUTHENTIC SPICES <span className="text-orange">✦</span> DELRAY BEACH <span className="text-orange">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Intro Stats Strip */}
      <section className="hero-stats bg-white">
        <div className="container">
          <div className="stats-layout">
            <div className="stat-item">
              <span className="stat-val">100%</span>
              <span className="stat-label">Authentic Taste</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat-item">
              <span className="stat-val">Fresh</span>
              <span className="stat-label">Batter Daily</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat-item">
              <span className="stat-val">Estd</span>
              <span className="stat-label">2026 Florida</span>
            </div>
            <div className="stat-sep"></div>
            <div className="stat-item">
              <span className="stat-val">Open</span>
              <span className="stat-label">7 Days A Week</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Teasers */}
      <section className="home-menu-preview bg-cream">
        <div className="container">
          <div className="section-title-row">
            <div className="title-left">
              <span className="sub-tag">Our Favorites</span>
              <h2 className="text-brown">Most Loved Dosas</h2>
            </div>
            <Link to="/menu" className="text-btn">
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>

          <div className="menu-preview-grid">
            <Link to="/menu" className="p-card">
              <div className="p-card-img" style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.2), rgba(107,58,31,0.1))' }}>
                <span className="p-emoji">🥞</span>
              </div>
              <div className="p-card-body">
                <div className="p-header">
                  <h3>Classic Plain Dosa</h3>
                  <span className="p-price">$9.99</span>
                </div>
                <p>Thin, golden, and perfectly crispy.</p>
                <div className="p-tags"><span className="tag">Popular</span></div>
              </div>
            </Link>

            <Link to="/menu" className="p-card active">
              <div className="p-card-badge">Bestseller</div>
              <div className="p-card-img" style={{ backgroundImage: `url(${heroDosa})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <div className="p-card-body">
                <div className="p-header">
                  <h3>Masala Dosa</h3>
                  <span className="p-price">$12.99</span>
                </div>
                <p>Stuffed with spiced potato mash & onions.</p>
                <div className="p-tags"><span className="tag tag-orange">Signature</span></div>
              </div>
            </Link>

            <Link to="/menu" className="p-card">
              <div className="p-card-img" style={{ background: 'linear-gradient(135deg, rgba(231,76,60,0.1), rgba(107,58,31,0.1))' }}>
                <span className="p-emoji">🌶️</span>
              </div>
              <div className="p-card-body">
                <div className="p-header">
                  <h3>Spicy Onion Dosa</h3>
                  <span className="p-price">$11.99</span>
                </div>
                <p>Caramelized onions & bold spices.</p>
                <div className="p-tags"><span className="tag">Spicy</span></div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="home-experience bg-white">
        <div className="container experience-grid">
          <div className="exp-image-wrap">
            <div className="exp-blob bg-orange"></div>
            <img src={foodTruck} alt="Naati Dosa Truck" className="exp-img" />
            <div className="exp-float-badge">
              <strong>Estd. 2026</strong>
              <span>Serving Florida</span>
            </div>
          </div>

          <div className="exp-text-wrap">
            <span className="sub-tag">Our Story</span>
            <h2 className="text-brown">More than just a food truck. A cultural experience.</h2>
            <p className="exp-desc">
              Founded on the belief that the best food comes from recipes passed down through generations.
              Our journey started in the heart of Karnataka, where the art of the perfect dosa is a daily ritual.
            </p>
            <div className="exp-features">
              <div className="e-feat">
                <span className="text-orange">✔</span>
                <span>Batter fermented fresh daily</span>
              </div>
              <div className="e-feat">
                <span className="text-orange">✔</span>
                <span>Spices directly from South India</span>
              </div>
              <div className="e-feat">
                <span className="text-orange">✔</span>
                <span>100% Cooked to order</span>
              </div>
            </div>
            <Link to="/story" className="button-pill button-solid-brown" style={{ marginTop: '2rem' }}>Read Our Story</Link>
          </div>
        </div>
      </section>

      {/* Join the Club Section */}
      <section className="join-club-section bg-brown text-cream">
        <div className="container">
          <div className="join-content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="join-text"
            >
              <h2 className="text-white">Join the <span className="text-orange italic">Dosa Club</span></h2>
              <p>Be the first to know about new locations, secret menu items, and exclusive daily deals.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="join-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="email" placeholder="Enter your email address" className="club-input" />
              <button type="submit" className="button-pill bg-orange text-white">Join Now</button>
            </motion.form>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hero-section {
          position: relative;
          padding: 80px 0;
          min-height: 85vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 6rem;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          background: rgba(107, 58, 31, 0.05);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-family: var(--font-nav);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--brown);
          margin-bottom: 2rem;
        }
        .badge-dot { width: 8px; height: 8px; background: var(--orange); border-radius: 50%; animation: pulse-orange 2s infinite; }
        @keyframes pulse-orange { 0% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.5); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }

        .hero-headline {
          font-size: clamp(4.5rem, 10vw, 8rem);
          line-height: 0.85;
          font-weight: 900;
          color: var(--brown);
          margin-bottom: 2.5rem;
        }
        .hero-headline span { display: block; }
        .text-stroke { -webkit-text-stroke: 1.5px var(--brown); color: transparent; }
        
        .hero-description {
          font-size: 1.4rem;
          line-height: 1.6;
          color: var(--espresso);
          max-width: 550px;
          opacity: 0.85;
          margin-bottom: 3.5rem;
        }
        
        .hero-cta-group {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        .cta-primary {
          background: var(--brown);
          color: var(--white);
          padding: 1.2rem 2.8rem;
          border-radius: 50px;
          font-family: var(--font-nav);
          font-weight: 800;
          text-transform: uppercase;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          transition: 0.4s;
          box-shadow: 0 10px 30px rgba(107, 58, 31, 0.2);
        }
        .cta-primary:hover { transform: translateY(-5px); background: var(--espresso); box-shadow: 0 15px 40px rgba(107, 58, 31, 0.3); }
        .cta-secondary {
          font-family: var(--font-nav);
          font-weight: 700;
          text-transform: uppercase;
          color: var(--brown);
          font-size: 0.95rem;
          letter-spacing: 1px;
          border-bottom: 2px solid var(--orange);
          padding-bottom: 4px;
        }
        .cta-secondary:hover { color: var(--orange); }
        
        .hero-trust {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
          color: var(--espresso);
          opacity: 0.7;
        }
        .trust-stars { display: flex; gap: 2px; }

        .hero-visual {
          position: relative;
        }
        .main-visual-container {
          position: relative;
          z-index: 2;
        }
        .visual-circle-bg {
          position: absolute;
          width: 550px;
          height: 550px;
          background: var(--orange);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }
        .hero-main-img {
          width: 100%;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.15));
          transform: rotate(-5deg);
        }
        
        .floating-card {
          position: absolute;
          background: var(--white);
          padding: 1.2rem 1.8rem;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 1.2rem;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          z-index: 5;
          min-width: 220px;
        }
        .card-top { top: 10%; right: -15%; }
        .card-bottom { bottom: 15%; left: -15%; }
        .f-icon {
          width: 45px;
          height: 45px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: white;
        }
        .f-text { display: flex; flex-direction: column; }
        .f-text strong { font-size: 1rem; color: var(--brown); }
        .f-text span { font-size: 0.8rem; opacity: 0.6; }

        .badge-round {
          position: absolute;
          top: -30px;
          left: -30px;
          width: 120px;
          height: 120px;
          z-index: 10;
        }
        .rotate-anim { animation: rotate 20s linear infinite; }
        @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .hero-blobs {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.4;
          animation: blob-float 15s infinite alternate;
        }
        .blob-1 { width: 600px; height: 600px; background: rgba(245, 166, 35, 0.2); top: -200px; right: -100px; }
        .blob-2 { width: 500px; height: 500px; background: rgba(107, 58, 31, 0.1); bottom: -100px; left: -100px; animation-delay: -5s; }
        .blob-3 { width: 300px; height: 300px; background: rgba(253, 246, 236, 1); top: 40%; left: 30%; filter: blur(60px); }

        @keyframes blob-float { 
          from { transform: translate(0, 0) scale(1); } 
          to { transform: translate(50px, 100px) scale(1.1); } 
        }

        .hero-ticker {
          padding: 1.8rem 0;
          overflow: hidden;
          position: relative;
          z-index: 5;
          white-space: nowrap;
        }
        .ticker-inner {
          display: inline-block;
        }
        .ticker-item {
          font-family: var(--font-nav);
          font-weight: 800;
          font-size: 1.2rem;
          letter-spacing: 2px;
          color: white;
          margin-right: 3rem;
        }
        
        .stats-layout {
          padding: 5rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .stat-item { text-align: center; }
        .stat-val { font-size: 3rem; font-weight: 900; color: var(--brown); display: block; line-height: 1; }
        .stat-label { font-family: var(--font-nav); text-transform: uppercase; font-weight: 700; font-size: 0.8rem; letter-spacing: 1px; color: var(--orange); }
        .stat-sep { width: 1px; height: 50px; background: rgba(0,0,0,0.06); }

        .home-menu-preview { padding: 120px 0; }
        .section-title-row { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 5rem; }
        .sub-tag { font-family: var(--font-nav); color: var(--orange); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 1rem; display: block; }
        .section-title-row h2 { font-size: 4rem; line-height: 1; }
        .text-btn { display: flex; align-items: center; gap: 0.8rem; font-family: var(--font-nav); font-weight: 800; color: var(--brown); text-transform: uppercase; border-bottom: 2px solid var(--orange); padding-bottom: 4px; }

        .menu-preview-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        .p-card {
          background: var(--white);
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
          box-shadow: 0 15px 35px rgba(107, 58, 31, 0.05);
          display: flex;
          flex-direction: column;
        }
        .p-card:hover { transform: translateY(-12px); box-shadow: 0 25px 50px rgba(245, 166, 35, 0.15); }
        .p-card.active { border: 2px solid var(--orange); }
        
        .p-card-img {
          height: 240px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .p-emoji { font-size: 5rem; filter: drop-shadow(0 10px 15px rgba(0,0,0,0.1)); }
        
        .p-card-body { padding: 2.5rem; flex: 1; display: flex; flex-direction: column; }
        .p-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1rem; }
        .p-header h3 { font-size: 1.6rem; color: var(--brown); max-width: 70%; line-height: 1.2; }
        .p-price { font-family: var(--font-nav); font-weight: 800; font-size: 1.4rem; color: var(--orange); }
        
        .p-card p { opacity: 0.7; font-size: 1.1rem; line-height: 1.5; margin-bottom: 2rem; flex: 1; }
        .tag { font-family: var(--font-nav); font-weight: 700; text-transform: uppercase; font-size: 0.75rem; color: var(--brown); background: rgba(107, 58, 31, 0.1); padding: 0.4rem 1rem; border-radius: 30px; }
        .tag.tag-orange { color: var(--white); background: var(--orange); }
        .p-card-badge { position: absolute; top: 1.5rem; right: 1.5rem; background: var(--white); color: var(--orange); padding: 0.5rem 1.2rem; border-radius: 50px; font-family: var(--font-nav); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; z-index: 10; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }

        .home-experience { padding: 140px 0; }
        .experience-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 6rem; align-items: center; }
        .exp-image-wrap { position: relative; }
        .exp-blob { position: absolute; width: 100%; height: 100%; border-radius: 30px; top: -20px; left: -20px; z-index: 1; opacity: 0.2; }
        .exp-img { width: 100%; border-radius: 30px; position: relative; z-index: 2; box-shadow: 0 20px 50px rgba(0,0,0,0.15); object-fit: cover; height: 600px; }
        .exp-float-badge { position: absolute; bottom: 40px; right: -30px; background: var(--white); padding: 1.5rem; border-radius: 20px; z-index: 3; box-shadow: 0 15px 40px rgba(107, 58, 31, 0.15); display: flex; flex-direction: column; align-items: center; }
        .exp-float-badge strong { font-family: var(--font-nav); font-size: 1.4rem; color: var(--orange); text-transform: uppercase; }
        .exp-float-badge span { font-size: 0.9rem; opacity: 0.6; }
        
        .exp-text-wrap h2 { font-size: 3.2rem; line-height: 1.1; margin-bottom: 2rem; }
        .exp-desc { font-size: 1.3rem; opacity: 0.8; margin-bottom: 2.5rem; }
        .e-feat { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.2rem; font-size: 1.1rem; font-weight: 600; color: var(--espresso); }

        .join-club-section { padding: 100px 0; }
        .join-content { display: flex; justify-content: space-between; align-items: center; gap: 4rem; }
        .join-text h2 { font-size: 3.5rem; margin-bottom: 1rem; }
        .join-text p { font-size: 1.2rem; opacity: 0.8; max-width: 500px; }
        .join-form { display: flex; gap: 1rem; flex: 1; max-width: 600px; }
        .club-input { flex: 1; padding: 1rem 2rem; border-radius: 50px; border: none; font-family: var(--font-body); font-size: 1rem; background: rgba(255,255,255,0.1); color: white; outline: none; transition: 0.3s; }
        .club-input:focus { background: white; color: var(--espresso); }
        .club-input::placeholder { color: rgba(255,255,255,0.5); }

        @media (max-width: 1200px) {
          .hero-container { grid-template-columns: 1fr; text-align: center; gap: 8rem; }
          .hero-description { margin: 0 auto 3.5rem; }
          .hero-cta-group { justify-content: center; }
          .hero-trust { justify-content: center; }
          .main-visual-container { max-width: 600px; margin: 0 auto; }
          .menu-preview-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .stats-layout { flex-direction: column; gap: 3rem; }
          .stat-sep { display: none; }
          .join-content { flex-direction: column; text-align: center; }
          .join-form { flex-direction: column; width: 100%; }
          .hero-headline { font-size: 3.5rem; }
        }
      `}} />
    </div>
  );
};

export default Home;
