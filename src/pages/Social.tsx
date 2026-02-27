import { motion } from 'framer-motion';
import { Instagram, Facebook, Video } from 'lucide-react';

const Social = () => {
  return (
    <div className="social-page bg-brown">
      {/* Hero */}
      <section className="social-hero text-center">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-orange italic"
          >
            Follow the Truck
          </motion.h1>
          <p className="social-subtitle text-cream">Stay updated on locations, specials, and daily announcements.</p>
        </div>
      </section>

      {/* Social Cards */}
      <section className="social-cards-section">
        <div className="container">
          <div className="social-grid">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="social-card fb-accent"
            >
              <Facebook size={50} className="social-icon" />
              <h3>Facebook</h3>
              <p className="handle">@nati_Dosa</p>
              <p className="desc">"Daily updates & announcements"</p>
              <button className="follow-btn">Follow Now</button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="social-card ig-accent"
            >
              <Instagram size={50} className="social-icon" />
              <h3>Instagram</h3>
              <p className="handle">@nati_Dosa</p>
              <p className="desc">"Food photography & reels"</p>
              <button className="follow-btn">Follow Now</button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="social-card tk-accent"
            >
              <Video size={50} className="social-icon" />
              <h3>TikTok</h3>
              <p className="handle">@nati_Dosa</p>
              <p className="desc">"Behind the scenes & videos"</p>
              <button className="follow-btn">Follow Now</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="instagram-grid-section bg-espresso">
        <div className="container">
          <div className="ig-header text-center">
            <Instagram className="text-orange" size={40} />
            <h2 className="text-white">Recent Posts</h2>
          </div>

          <div className="ig-photo-grid">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <motion.div
                key={i}
                whileHover={{ scale: 0.98 }}
                className="ig-post"
              >
                <div className="ig-post-overlay"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .social-hero { padding: 120px 0 60px; }
        .social-hero h1 { font-size: 5rem; font-weight: 800; margin-bottom: 2rem; }
        .social-subtitle { font-size: 1.5rem; opacity: 0.8; max-width: 600px; margin: 0 auto; }
        
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
          padding-bottom: 120px;
        }
        .social-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 4rem 2rem;
          border-radius: 30px;
          text-align: center;
          color: var(--cream);
          transition: 0.3s;
          position: relative;
          overflow: hidden;
        }
        .social-card:before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 10px; }
        .fb-accent:before { background: #1877F2; }
        .ig-accent:before { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
        .tk-accent:before { background: #EE1D52; }
        
        .social-icon { margin-bottom: 2rem; color: var(--orange); }
        .social-card h3 { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .handle { color: var(--orange); font-family: var(--font-nav); font-weight: 700; font-size: 1.2rem; margin-bottom: 1rem; }
        .social-card .desc { opacity: 0.7; font-size: 1.1rem; margin-bottom: 2.5rem; }
        
        .follow-btn {
          background: rgba(255,255,255,0.1);
          color: white;
          padding: 0.8rem 2.5rem;
          border-radius: 30px;
          font-family: var(--font-nav);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          transition: 0.3s;
        }
        .follow-btn:hover { background: var(--orange); }
        
        .ig-header { margin-bottom: 5rem; }
        .ig-header h2 { font-size: 3rem; margin-top: 1rem; }
        .ig-photo-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding-bottom: 100px;
        }
        .ig-post {
          aspect-ratio: 1;
          background: rgba(255,255,255,0.05);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }
        .ig-post-overlay {
          position: absolute;
          inset: 0;
          background: var(--orange);
          opacity: 0.05;
        }
        
        @media (max-width: 1024px) {
          .social-grid { grid-template-columns: 1fr; }
          .ig-photo-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .ig-photo-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default Social;
