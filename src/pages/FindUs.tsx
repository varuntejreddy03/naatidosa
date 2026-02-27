import { motion } from 'framer-motion';
import { MapPin, Clock, Calendar } from 'lucide-react';
const truckImg = '/images/food-truck.jpg';

const FindUs = () => {
  return (
    <div className="find-us-page">
      {/* Hero Split */}
      <section className="find-hero">
        <div className="hero-split-left bg-cream">
          <div className="hero-text-content">
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-brown"
            >
              Come Find <br /> the Truck
            </motion.h1>
            <div className="address-block">
              <MapPin size={24} className="text-orange" />
              <p className="text-brown">Delray Beach, Florida, USA</p>
            </div>
            <p className="subtext">We move around, but you can usually find us at our primary parking spot downtown.</p>
          </div>
        </div>

        <div className="hero-split-right bg-orange">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            className="truck-photo-wrap"
          >
            <img src={truckImg} alt="Naati Dosa Truck" className="truck-photo" />
            <div className="sticker-badge">OPEN EVERY DAY</div>
          </motion.div>
        </div>
      </section>

      {/* Hours Card */}
      <section className="hours-section bg-cream">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="hours-card"
          >
            <div className="hours-header">
              <Clock className="text-orange" size={32} />
              <h2 className="text-brown">Current Operating Hours</h2>
            </div>

            <table className="hours-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday – Friday</td>
                  <td className="time-cell">4:00 PM – 12:00 AM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td className="time-cell">4:00 PM – 12:00 AM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td className="time-cell">4:00 PM – 12:00 AM</td>
                </tr>
              </tbody>
            </table>

            <div className="status-badge bg-orange text-white">
              OPEN EVERY DAY
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="location-header">
            <div className="pin-circle"><MapPin size={40} className="text-white" /></div>
            <h2 className="text-brown">Where We Are</h2>
            <p className="text-brown address-display">Delray Beach, Florida, USA</p>
          </div>
        </div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114488.29177114668!2d-80.14498522068991!3d26.46788874136691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e39268f6385d%3A0xe9f7e52b226e6fa2!2sDelray%20Beach%2C%20FL!5e0!3m2!1sen!2s-!4v1711660000000!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0, filter: 'sepia(30%) contrast(90%)' }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>

        <div className="map-cta-container">
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="button-pill bg-brown text-white">
            Get Directions →
          </a>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .find-hero {
          display: flex;
          min-height: 80vh;
        }
        .hero-split-left {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 100px 5%;
        }
        .hero-text-content h1 { font-size: clamp(3rem, 6vw, 5rem); line-height: 1; margin-bottom: 2rem; }
        .address-block { display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem; }
        .address-block p { font-size: 1.8rem; font-family: var(--font-heading); font-weight: 700; }
        .subtext { font-size: 1.2rem; opacity: 0.7; max-width: 400px; }
        
        .hero-split-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .truck-photo-wrap {
          position: relative;
          width: 80%;
          z-index: 5;
        }
        .truck-photo { width: 100%; border-radius: 20px; box-shadow: 0 30px 60px rgba(0,0,0,0.2); }
        .sticker-badge {
          position: absolute;
          top: -20px;
          right: -20px;
          background: var(--white);
          color: var(--orange);
          font-family: var(--font-nav);
          font-weight: 900;
          padding: 1.5rem;
          border-radius: 50%;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: rotate(15deg);
        }
        
        .hours-section { padding: 100px 0; }
        .hours-card {
          max-width: 800px;
          margin: 0 auto;
          background: var(--white);
          padding: 4rem;
          border-radius: 30px;
          box-shadow: 0 20px 50px rgba(107, 58, 31, 0.08);
          position: relative;
          text-align: center;
        }
        .hours-header { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 3rem; }
        .hours-header h2 { font-size: 2.2rem; }
        .hours-table { width: 100%; border-collapse: collapse; margin-bottom: 3rem; }
        .hours-table th { padding: 1rem; font-family: var(--font-nav); text-transform: uppercase; color: var(--orange); letter-spacing: 1px; }
        .hours-table td { padding: 1.5rem; font-size: 1.4rem; font-weight: 600; border-top: 1px solid rgba(0,0,0,0.05); }
        .time-cell { color: var(--brown); }
        .status-badge { display: inline-block; padding: 0.8rem 2rem; border-radius: 50px; font-family: var(--font-nav); font-weight: 700; }
        
        .map-section { padding-top: 100px; text-align: center; }
        .location-header { margin-bottom: 4rem; }
        .pin-circle { width: 80px; height: 80px; background: var(--orange); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 2rem; }
        .address-display { font-size: 2.5rem; font-weight: 700; margin-top: 0.5rem; }
        .map-wrapper { width: 100%; background: #eee; }
        .map-cta-container { padding: 60px 0; background: var(--cream); }
        
        @media (max-width: 968px) {
          .find-hero { flex-direction: column; }
          .hero-split-right { padding: 100px 0; }
          .hours-card { padding: 2rem; }
          .hours-table td { font-size: 1.1rem; padding: 1rem; }
        }
      `}} />
    </div>
  );
};

export default FindUs;
