import { motion } from 'framer-motion';

const menuItems = [
  { id: 1, name: "Classic Plain Dosa", desc: "Thin, golden, crispy crepe made from fermented rice and lentil batter.", price: "$9.99", tags: ["Classic", "Vegan"], emoji: "🥞" },
  { id: 2, name: "Masala Dosa", desc: "Our signature crispy dosa stuffed with spiced potato mash and onions.", price: "$12.99", tags: ["Bestseller"], emoji: "🧅" },
  { id: 3, name: "Spicy Onion Dosa", desc: "Infused with caramelized onions and a bold, house-made chili spice blend.", price: "$11.99", tags: ["Spicy"], emoji: "🌶️" },
  { id: 4, name: "Mysore Masala Dosa", desc: "Lined with a special spicy red garlic chutney, Karnataka style.", price: "$13.99", tags: ["Bestseller", "Spicy"], emoji: "🍃" },
  { id: 5, name: "Rava Dosa", desc: "Semolina and rice flour lace dosa, ultra-crispy with hints of cumin.", price: "$12.49", tags: ["Classic"], emoji: "🫓" },
  { id: 6, name: "Combo Platter", desc: "Choice of Dosa served with generous sides of coconut chutney and sambar bowl.", price: "$15.99", tags: ["Bestseller"], emoji: "🫙" },
  { id: 7, name: "Coconut Chutney", desc: "Freshly grated coconut blended with ginger and green chilies.", price: "$2.49", tags: ["Vegan"], emoji: "🥥" },
  { id: 8, name: "Sambar Bowl", desc: "Slow-cooked lentil and vegetable stew with a proprietary spice blend.", price: "$4.99", tags: ["Vegan"], emoji: "🍲" }
];

const Menu = () => {
  return (
    <div className="menu-page bg-cream">
      {/* Decorative Blobs */}
      <div className="blob blob-orange blob-pulse" style={{ top: '10%', right: '-10%' }}></div>
      <div className="blob blob-brown blob-pulse" style={{ bottom: '20%', left: '-10%', opacity: 0.1 }}></div>

      {/* Hero */}
      <section className="menu-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-brown giant-heading">
              Signature <br />
              <span className="text-orange italic">Dosas</span>
            </h1>
            <div className="hero-divider"></div>
            <p className="menu-subtitle text-brown">Crispy, golden, made fresh — every single time.</p>
          </motion.div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="menu-grid-section">
        <div className="container">
          <div className="menu-grid">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="menu-card"
              >
                <div className="card-inner">
                  <div className="menu-card-header">
                    <span className="menu-emoji">{item.emoji}</span>
                    <div className="menu-title-row">
                      <h3>{item.name}</h3>
                      <span className="menu-price">{item.price}</span>
                    </div>
                  </div>
                  <p className="menu-desc italic">{item.desc}</p>
                  <div className="menu-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className={`menu-tag ${tag.toLowerCase()}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dietary Legend */}
      <div className="dietary-legend">
        <div className="container legend-content">
          <span className="legend-item">🟢 Vegan Friendly</span>
          <span className="legend-divider">|</span>
          <span className="legend-item">🌶️ Spicy Options</span>
          <span className="legend-divider">|</span>
          <span className="legend-item">⭐ Customer Favorites</span>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <section className="menu-cta-banner bg-brown text-cream">
        <div className="container text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="cta-title"
          >
            Can't decide? <span className="text-orange">Try the Combo Platter.</span>
          </motion.h2>
          <div className="cta-actions">
            <a href="tel:5616695387" className="button-pill bg-orange text-white">
              Call to Order: (561) 669-5387
            </a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{
        __html: `
        .menu-page {
          position: relative;
          overflow: hidden;
          padding-top: 60px;
        }
        .giant-heading {
          font-size: clamp(4rem, 10vw, 7rem);
          line-height: 0.9;
          font-weight: 900;
          margin-bottom: 2rem;
        }
        .menu-hero {
          padding: 120px 0 80px;
          text-align: center;
        }
        .hero-divider {
          width: 80px;
          height: 4px;
          background: var(--orange);
          margin: 0 auto 2.5rem;
          border-radius: 2px;
        }
        .menu-subtitle {
          font-size: 1.5rem;
          font-weight: 500;
          opacity: 0.8;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          padding-bottom: 120px;
        }
        .menu-card {
          position: relative;
          background: var(--white);
          border-radius: 30px;
          box-shadow: 0 15px 40px rgba(107, 58, 31, 0.06);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }
        .menu-card:hover {
          box-shadow: 0 30px 60px rgba(245, 166, 35, 0.15);
        }
        .card-inner {
          padding: 3rem;
          height: 100%;
          display: flex;
          flex-direction: column;
          z-index: 2;
          position: relative;
        }
        .menu-card:hover:after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid var(--orange);
          border-radius: 30px;
          pointer-events: none;
        }
        
        .menu-card-header {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }
        .menu-emoji {
          font-size: 3.5rem;
          filter: drop-shadow(0 5px 10px rgba(0,0,0,0.1));
        }
        .menu-title-row {
          flex: 1;
        }
        .menu-card h3 {
          color: var(--brown);
          font-size: 2.2rem;
          line-height: 1.1;
          margin-bottom: 0.5rem;
        }
        .menu-price {
          font-family: var(--font-nav);
          font-weight: 800;
          color: var(--orange);
          font-size: 1.4rem;
          display: block;
        }
        
        .menu-desc {
          color: var(--espresso);
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
          opacity: 0.8;
          flex: 1;
        }
        
        .menu-tags {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .menu-tag {
          font-family: var(--font-nav);
          font-weight: 700;
          font-size: 0.8rem;
          text-transform: uppercase;
          padding: 0.5rem 1.2rem;
          border-radius: 50px;
          letter-spacing: 0.5px;
        }
        .menu-tag.bestseller { background: rgba(245, 166, 35, 0.1); color: var(--orange); border: 1px solid var(--orange); }
        .menu-tag.spicy { background: rgba(231, 76, 60, 0.1); color: #E74C3C; border: 1px solid #E74C3C; }
        .menu-tag.classic { background: rgba(107, 58, 31, 0.1); color: var(--brown); border: 1px solid var(--brown); }
        .menu-tag.vegan { background: rgba(39, 174, 96, 0.1); color: #27AE60; border: 1px solid #27AE60; }
        
        .dietary-legend {
          padding: 60px 0 100px;
          border-top: 1px solid rgba(107, 58, 31, 0.05);
        }
        .legend-content {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          color: var(--brown);
          font-family: var(--font-nav);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          opacity: 0.6;
        }
        .legend-divider { opacity: 0.2; }
        
        .menu-cta-banner {
          padding: 100px 0;
        }
        .cta-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 3rem;
        }
        
        .blob {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(120px);
          z-index: 1;
        }
        .blob-orange { background: rgba(245, 166, 35, 0.15); }
        .blob-brown { background: rgba(107, 58, 31, 0.1); }
        
        @media (max-width: 1100px) {
          .menu-grid { grid-template-columns: 1fr; max-width: 800px; margin: 0 auto 100px; }
          .menu-card-header { gap: 1.5rem; }
          .menu-emoji { font-size: 3rem; }
          .menu-card h3 { font-size: 1.8rem; }
        }
        @media (max-width: 768px) {
          .legend-content { flex-direction: column; gap: 1rem; }
          .legend-divider { display: none; }
          .card-inner { padding: 2rem; }
        }
      `}} />
    </div>
  );
};

export default Menu;
