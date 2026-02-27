import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page bg-cream">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-orange italic"
          >
            Let's Talk Dosa
          </motion.h1>
          <p className="contact-subtitle text-brown">Got questions, catering requests, or just want to say hi? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-main">
        <div className="container contact-content">
          <div className="contact-cards">
            <motion.div
              whileHover={{ y: -10 }}
              className="c-card"
            >
              <Phone className="text-orange" size={32} />
              <h3>Call Us</h3>
              <p>(561) 669-5387</p>
              <a href="tel:5616695387" className="c-link">Dial Now</a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="c-card"
            >
              <Mail className="text-orange" size={32} />
              <h3>Email Us</h3>
              <p>walkingpotato25@gmail.com</p>
              <a href="mailto:walkingpotato25@gmail.com" className="c-link">Send Email</a>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="c-card"
            >
              <MapPin className="text-orange" size={32} />
              <h3>Visit Us</h3>
              <p>Delray Beach, Florida</p>
              <a href="/find-us" className="c-link">See Map</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="contact-form-card"
          >
            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="button-pill bg-orange text-white form-submit">
                Send Message <Send size={18} />
              </button>
              <p className="form-note">For catering & event bookings, mention your date and headcount.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Catering Banner */}
      <div className="catering-banner bg-brown text-white">
        <div className="container text-center">
          <h2>🍽️ Available for Private Events & Catering — Call to Book</h2>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .contact-hero { padding: 100px 0 60px; }
        .contact-hero h1 { font-size: 5rem; font-weight: 800; margin-bottom: 1.5rem; }
        .contact-subtitle { font-size: 1.4rem; max-width: 600px; margin: 0 auto; line-height: 1.6; }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          padding-bottom: 100px;
          align-items: start;
        }
        
        .contact-cards { display: flex; flex-direction: column; gap: 2rem; }
        .c-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          text-align: center;
        }
        .c-card h3 { font-size: 1.5rem; margin: 1rem 0 0.5rem; color: var(--brown); }
        .c-card p { font-size: 1.1rem; opacity: 0.8; margin-bottom: 1.5rem; }
        .c-link { color: var(--orange); font-family: var(--font-nav); font-weight: 700; text-transform: uppercase; font-size: 0.9rem; }
        
        .contact-form-card {
          background: var(--white);
          padding: 4rem;
          border-radius: 30px;
          box-shadow: 0 30px 60px rgba(107, 58, 31, 0.08);
        }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
        .form-group { margin-bottom: 2rem; }
        .form-group label { display: block; font-family: var(--font-nav); font-weight: 700; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 1px; margin-bottom: 0.8rem; color: var(--brown); }
        .form-group input, .form-group textarea {
          width: 100%;
          padding: 1.2rem;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 1.1rem;
          background: #fcfcfc;
          transition: 0.3s;
        }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--orange); background: white; }
        
        .form-submit { width: 100%; display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1rem; }
        .form-note { margin-top: 2rem; text-align: center; font-size: 0.9rem; opacity: 0.6; font-style: italic; }
        
        .catering-banner { padding: 3rem 0; }
        .catering-banner h2 { font-size: 2rem; font-weight: 700; }
        
        @media (max-width: 968px) {
          .contact-content { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact-form-card { padding: 2rem; }
        }
      `}} />
    </div>
  );
};

export default Contact;
