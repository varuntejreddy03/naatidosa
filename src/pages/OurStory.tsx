import { motion } from 'framer-motion';
const truckImg = '/images/food-truck.jpg';

const OurStory = () => {
  return (
    <div className="story-page">
      {/* Hero Section */}
      <section className="story-hero bg-brown text-cream">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="story-headline"
          >
            Born from Tradition, <br />
            <span className="text-orange italic">Served with Love.</span>
          </motion.h1>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="story-main bg-cream">
        <div className="container story-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="story-image-wrap"
          >
            <img src={truckImg} alt="Naati Dosa Truck" className="story-img" />
          </motion.div>

          <div className="story-text-wrap">
            <div className="story-block">
              <h2 className="text-brown">Why Naati Dosa?</h2>
              <div className="divider"></div>
              <p>
                Founded on the belief that the best food comes from recipes passed down through generations.
                Our journey started in the heart of Karnataka, where the art of the perfect dosa is a daily ritual.
                Now, we've brought those authentic flavors to the sun-drenched streets of Delray Beach, Florida.
              </p>
            </div>

            <div className="story-block">
              <h2 className="text-brown">Our Promise</h2>
              <div className="divider"></div>
              <p>
                Fresh batter made every single morning. Authentic spices sourced directly from South India.
                No shortcuts, no compromises. Just the crispy, golden goodness you'd find in a traditional Indian kitchen.
              </p>
            </div>

            <div className="story-block">
              <h2 className="text-brown">The Truck</h2>
              <div className="divider"></div>
              <p>
                Estd 2026, Naati Dosa is more than just a food truck — it's a mobile celebration of South Indian culture.
                Whether you're a dosa regular or trying it for the first time, we treat everyone like family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Row */}
      <section className="values-section bg-cream">
        <div className="container values-grid">
          <div className="value-card">
            <span className="value-icon">🌿</span>
            <h3>Fresh Ingredients</h3>
            <p>Locally sourced produce and traditional spices.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🔥</span>
            <h3>Cooked to Order</h3>
            <p>Every dosa is made fresh the moment you order.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🤝</span>
            <h3>Community First</h3>
            <p>Supporting and feeding our Delray Beach neighbors.</p>
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="pull-quote bg-orange">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="quote-text text-white italic"
          >
            "Every dosa tells a story of home."
          </motion.h2>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .story-hero {
          padding: 120px 0;
          text-align: center;
        }
        .story-headline {
          font-size: clamp(3.5rem, 8vw, 6rem);
          font-family: var(--font-heading);
          font-weight: 800;
          line-height: 1.1;
        }
        
        .story-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: flex-start;
          padding: 100px 0;
        }
        .story-img {
          width: 100%;
          border-radius: 20px;
          height: 800px;
          object-fit: cover;
          box-shadow: 20px 20px 0 var(--orange);
        }
        
        .story-block {
          margin-bottom: 4rem;
        }
        .story-block h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .divider {
          width: 60px;
          height: 3px;
          background: var(--orange);
          margin-bottom: 1.5rem;
        }
        .story-block p {
          font-size: 1.2rem;
          opacity: 0.8;
          line-height: 1.8;
        }
        
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding-bottom: 100px;
        }
        .value-card {
          background: var(--white);
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .value-icon { font-size: 3rem; margin-bottom: 1.5rem; display: block; }
        .value-card h3 { font-size: 1.5rem; margin-bottom: 1rem; color: var(--brown); }
        .value-card p { opacity: 0.7; }
        
        .pull-quote {
          text-align: center;
          padding: 100px 0;
        }
        .quote-text {
          font-family: var(--font-heading);
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 700;
        }
        
        @media (max-width: 968px) {
          .story-content { grid-template-columns: 1fr; gap: 4rem; }
          .story-img { height: 500px; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}} />
    </div>
  );
};

export default OurStory;
