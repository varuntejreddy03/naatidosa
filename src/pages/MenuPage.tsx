import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3, MapPin, Plus, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OrderPopup from '../components/OrderPopup';
import {
  getExpandedMenuDescription,
  getMenuCategorySlug,
  getMenuImage,
  menuCategories,
  type MenuItem,
} from '../data/menu';
import { useOrderPopup } from '../hooks/useOrderPopup';

type MenuSection = {
  category: string;
  items: MenuItem[];
  slug: string;
};

const MenuPage = () => {
  const navigate = useNavigate();
  const { closePopup, openPopup, selectedMenuItem, showPopup } = useOrderPopup();
  const [searchTerm, setSearchTerm] = useState('');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const allSections: MenuSection[] = Object.entries(menuCategories).map(([category, items]) => ({
    category,
    items,
    slug: getMenuCategorySlug(category),
  }));

  const normalizedQuery = searchTerm.trim().toLowerCase();

  const filteredSections = allSections
    .map((section) => ({
      ...section,
      items: section.items.filter((item) => {
        if (!normalizedQuery) {
          return true;
        }

        const haystack = [
          section.category,
          item.name,
          item.desc,
          getExpandedMenuDescription(section.category, item),
        ]
          .join(' ')
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      }),
    }))
    .filter((section) => section.items.length > 0);

  const [activeCategory, setActiveCategory] = useState(filteredSections[0]?.slug || allSections[0]?.slug || '');

  useEffect(() => {
    if (!filteredSections.some((section) => section.slug === activeCategory)) {
      setActiveCategory(filteredSections[0]?.slug || '');
    }
  }, [activeCategory, filteredSections]);

  useEffect(() => {
    if (filteredSections.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length === 0) {
          return;
        }

        setActiveCategory(visibleSections[0].target.id.replace('menu-', ''));
      },
      {
        root: null,
        rootMargin: '-180px 0px -55% 0px',
        threshold: [0.12, 0.3, 0.65],
      },
    );

    filteredSections.forEach((section) => {
      const target = sectionRefs.current[section.slug];

      if (target) {
        observer.observe(target);
      }
    });

    return () => observer.disconnect();
  }, [filteredSections]);

  const totalItemCount = allSections.reduce((count, section) => count + section.items.length, 0);
  const visibleItemCount = filteredSections.reduce((count, section) => count + section.items.length, 0);

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);

    const targetSection = sectionRefs.current[slug];

    if (!targetSection) {
      return;
    }

    const navOffset = window.innerWidth <= 900 ? 110 : 156;
    const top = targetSection.getBoundingClientRect().top + window.scrollY - navOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  };

  return (
    <div className="menu-page">
      <OrderPopup
        show={showPopup}
        selectedMenuItem={selectedMenuItem}
        onClose={closePopup}
        onPickup={() => {
          closePopup();
          navigate({ pathname: '/', hash: '#visit' });
        }}
      />

      <section className="menu-order-shell">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="menu-order-top"
          >
            <div className="menu-order-intro">
              <span className="menu-order-kicker">Naati Dosa Menu</span>
              <h1>Scan the menu faster.</h1>
              <p>
                This layout keeps the same dishes and pricing, but presents them like a modern ordering menu with quick
                category jumps, shorter cards, and side-by-side images.
              </p>

              <div className="menu-order-status-row">
                <span className="menu-order-status">
                  <span className="menu-order-status-dot" />
                  Fresh daily
                </span>
                <span className="menu-order-note">
                  <MapPin size={16} />
                  Delray Beach, FL
                </span>
                <span className="menu-order-note">
                  <Clock3 size={16} />
                  Pickup menu
                </span>
              </div>
            </div>

            <div className="menu-order-summary">
              <div className="menu-order-stat">
                <strong>{visibleItemCount}</strong>
                <span>{normalizedQuery ? 'Matching items' : 'Visible now'}</span>
              </div>
              <div className="menu-order-stat">
                <strong>{totalItemCount}</strong>
                <span>Total menu items</span>
              </div>
              <div className="menu-order-stat">
                <strong>{allSections.length}</strong>
                <span>Categories</span>
              </div>
              <button type="button" className="menu-summary-action" onClick={() => openPopup()}>
                Start order
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="menu-toolbar"
          >
            <div className="menu-toolbar-main">
              <label htmlFor="menu-search" className="menu-search-input-wrap">
                <Search size={18} />
                <input
                  id="menu-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search dosa, idli, coffee..."
                />
              </label>

              <div className="menu-toolbar-pills" aria-label="Order details">
                <span className="menu-toolbar-pill active">Pickup</span>
                <span className="menu-toolbar-pill">Made fresh</span>
                <span className="menu-toolbar-pill">
                  <MapPin size={16} />
                  Truck location
                </span>
                <span className="menu-toolbar-pill">
                  <Clock3 size={16} />
                  Order anytime
                </span>
              </div>
            </div>

            <div className="menu-category-strip" aria-label="Menu categories">
              {filteredSections.map((section) => (
                <button
                  key={section.slug}
                  type="button"
                  className={activeCategory === section.slug ? 'active' : ''}
                  onClick={() => handleCategoryClick(section.slug)}
                  aria-pressed={activeCategory === section.slug}
                >
                  <span>{section.category}</span>
                  <strong>{section.items.length}</strong>
                </button>
              ))}
            </div>
          </motion.div>

          <div className="menu-board-content">
            {filteredSections.length === 0 && (
              <div className="menu-empty-state">
                <h2>No matching menu items</h2>
                <p>Try a simpler search like "dosa", "idli", or "coffee".</p>
              </div>
            )}

            {filteredSections.map((section, sectionIndex) => (
              <motion.section
                key={section.slug}
                id={`menu-${section.slug}`}
                className="menu-group"
                ref={(node) => {
                  sectionRefs.current[section.slug] = node;
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: sectionIndex * 0.03 }}
              >
                <div className="menu-group-heading">
                  <div>
                    <span>{section.category}</span>
                    <h2>{section.items.length} dishes</h2>
                  </div>
                  <p>Short descriptions, fast pricing, and image-led cards designed for quicker browsing.</p>
                </div>

                <div className="menu-group-grid">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="menu-item-card"
                      onClick={() => openPopup(item.name)}
                      aria-label={`Order ${item.name}`}
                    >
                      <div className="menu-item-copy">
                        <div className="menu-item-title-block">
                          <h3>{item.name}</h3>
                          <strong>{item.price}</strong>
                        </div>
                        <p>{item.desc}</p>
                        <div className="menu-item-footer">
                          <span className="menu-item-tag">{section.category}</span>
                          <span className="menu-item-add" aria-hidden="true">
                            <Plus size={18} />
                          </span>
                        </div>
                      </div>

                      <div className="menu-item-media">
                        <img
                          src={getMenuImage(item.id)}
                          alt={item.name}
                          onError={(event) => {
                            event.currentTarget.src = '/plaindosa.jpg';
                          }}
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </section>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          .menu-page {
            min-height: calc(100vh - 100px);
            background:
              radial-gradient(circle at top right, rgba(240,165,0,0.18), transparent 26%),
              radial-gradient(circle at top left, rgba(107,58,31,0.08), transparent 24%),
              linear-gradient(180deg, #FDF6EC 0%, #FFF8F1 48%, #F6EBDD 100%);
            color: var(--espresso);
          }
          .menu-order-shell {
            padding: 32px 0 72px;
          }
          .menu-order-top {
            display: grid;
            grid-template-columns: minmax(0, 1.25fr) 340px;
            gap: 1rem;
            margin-bottom: 1rem;
          }
          .menu-order-intro,
          .menu-order-summary,
          .menu-toolbar,
          .menu-group,
          .menu-empty-state {
            background: rgba(255,255,255,0.74);
            border: 1px solid rgba(107,58,31,0.1);
            box-shadow: 0 20px 44px rgba(107,58,31,0.08);
            backdrop-filter: blur(12px);
          }
          .menu-order-intro {
            border-radius: 30px;
            padding: 2rem 2.2rem;
          }
          .menu-order-kicker {
            display: inline-flex;
            align-items: center;
            padding: 0.45rem 0.8rem;
            border-radius: 999px;
            background: rgba(240,165,0,0.12);
            color: var(--brown);
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .menu-order-intro h1 {
            margin-top: 0.9rem;
            font-size: clamp(2.7rem, 5vw, 4.5rem);
            line-height: 0.92;
            color: var(--espresso);
          }
          .menu-order-intro p {
            max-width: 56ch;
            margin-top: 1rem;
            font-size: 1.02rem;
            line-height: 1.75;
            color: rgba(62,31,8,0.72);
          }
          .menu-order-status-row {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
            margin-top: 1.6rem;
          }
          .menu-order-status,
          .menu-order-note {
            display: inline-flex;
            align-items: center;
            gap: 0.55rem;
            padding: 0.7rem 0.95rem;
            border-radius: 999px;
            background: rgba(107,58,31,0.05);
            border: 1px solid rgba(107,58,31,0.1);
            font-size: 0.92rem;
            font-weight: 600;
            color: rgba(62,31,8,0.82);
          }
          .menu-order-status {
            background: rgba(240,165,0,0.12);
            border-color: rgba(240,165,0,0.26);
            color: var(--brown);
          }
          .menu-order-status-dot {
            width: 10px;
            height: 10px;
            border-radius: 999px;
            background: #3BB273;
            box-shadow: 0 0 0 4px rgba(59,178,115,0.12);
          }
          .menu-order-note svg {
            width: 16px;
            height: 16px;
            color: var(--brown);
          }
          .menu-order-summary {
            border-radius: 30px;
            padding: 1.2rem;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0.85rem;
            align-content: start;
          }
          .menu-order-stat {
            padding: 1rem;
            border-radius: 22px;
            background: rgba(253,246,236,0.9);
            border: 1px solid rgba(107,58,31,0.08);
          }
          .menu-order-stat strong {
            display: block;
            font-size: 1.8rem;
            line-height: 1;
            color: var(--brown);
          }
          .menu-order-stat span {
            display: block;
            margin-top: 0.35rem;
            font-size: 0.88rem;
            line-height: 1.45;
            color: rgba(62,31,8,0.66);
          }
          .menu-summary-action {
            grid-column: 1 / -1;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 1rem 1.1rem;
            border-radius: 20px;
            background: var(--brown);
            color: var(--cream);
            font-family: var(--font-body);
            font-size: 0.94rem;
            font-weight: 700;
            letter-spacing: 0.02em;
          }
          .menu-summary-action:hover {
            background: var(--espresso);
            transform: translateY(-2px);
          }
          .menu-toolbar {
            position: sticky;
            top: 112px;
            z-index: 12;
            border-radius: 30px;
            padding: 1rem;
            margin-bottom: 1rem;
            background: rgba(253,246,236,0.92);
          }
          .menu-toolbar-main {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            gap: 0.9rem;
          }
          .menu-search-input-wrap {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            flex: 1 1 320px;
            padding: 0.95rem 1rem;
            border-radius: 18px;
            background: #fff;
            border: 1px solid rgba(107,58,31,0.1);
            color: rgba(62,31,8,0.48);
          }
          .menu-search-input-wrap svg {
            width: 18px;
            height: 18px;
            color: rgba(107,58,31,0.58);
            flex-shrink: 0;
          }
          .menu-search-input-wrap input {
            width: 100%;
            border: none;
            outline: none;
            background: transparent;
            color: var(--espresso);
            font-size: 0.98rem;
            font-family: var(--font-body);
          }
          .menu-search-input-wrap input::placeholder {
            color: rgba(62,31,8,0.38);
          }
          .menu-toolbar-pills {
            display: flex;
            flex-wrap: wrap;
            gap: 0.75rem;
          }
          .menu-toolbar-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.82rem 0.95rem;
            border-radius: 999px;
            background: rgba(107,58,31,0.05);
            border: 1px solid rgba(107,58,31,0.1);
            color: rgba(62,31,8,0.78);
            font-size: 0.9rem;
            font-weight: 600;
            white-space: nowrap;
          }
          .menu-toolbar-pill.active {
            background: var(--brown);
            border-color: var(--brown);
            color: var(--cream);
          }
          .menu-toolbar-pill svg {
            width: 16px;
            height: 16px;
          }
          .menu-category-strip {
            display: flex;
            gap: 0.75rem;
            overflow-x: auto;
            padding-top: 1rem;
            scrollbar-width: none;
          }
          .menu-category-strip::-webkit-scrollbar {
            display: none;
          }
          .menu-category-strip button {
            flex: 0 0 auto;
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.82rem 1rem;
            border-radius: 999px;
            background: #fff;
            border: 1px solid rgba(107,58,31,0.1);
            color: var(--espresso);
            font-family: var(--font-body);
            font-size: 0.93rem;
            font-weight: 700;
          }
          .menu-category-strip button strong {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 30px;
            height: 30px;
            padding: 0 0.55rem;
            border-radius: 999px;
            background: rgba(240,165,0,0.12);
            color: var(--brown);
            font-size: 0.82rem;
          }
          .menu-category-strip button.active,
          .menu-category-strip button:hover {
            background: rgba(240,165,0,0.14);
            border-color: rgba(240,165,0,0.36);
            color: var(--brown);
            transform: translateY(-1px);
          }
          .menu-category-strip button.active strong,
          .menu-category-strip button:hover strong {
            background: var(--brown);
            color: var(--cream);
          }
          .menu-board-content {
            display: grid;
            gap: 1rem;
          }
          .menu-empty-state,
          .menu-group {
            border-radius: 30px;
            padding: 1.35rem;
            scroll-margin-top: 176px;
          }
          .menu-empty-state {
            text-align: center;
            padding: 3rem 1.5rem;
          }
          .menu-empty-state h2 {
            font-size: 1.9rem;
            color: var(--espresso);
          }
          .menu-empty-state p {
            margin-top: 0.75rem;
            color: rgba(62,31,8,0.68);
          }
          .menu-group-heading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1.1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(107,58,31,0.1);
          }
          .menu-group-heading span {
            display: block;
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--brown);
          }
          .menu-group-heading h2 {
            margin-top: 0.35rem;
            font-size: 1.9rem;
            line-height: 1.05;
            color: var(--espresso);
          }
          .menu-group-heading p {
            max-width: 34ch;
            font-size: 0.95rem;
            line-height: 1.6;
            color: rgba(62,31,8,0.62);
          }
          .menu-group-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1rem;
          }
          .menu-item-card {
            display: grid;
            grid-template-columns: minmax(0, 1fr) 152px;
            gap: 1rem;
            min-height: 190px;
            padding: 1rem;
            border-radius: 24px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(250,244,236,0.98) 100%);
            border: 1px solid rgba(107,58,31,0.1);
            color: var(--espresso);
            text-align: left;
            font-family: var(--font-body);
            box-shadow: 0 12px 28px rgba(107,58,31,0.07);
          }
          .menu-item-card:hover {
            transform: translateY(-3px);
            border-color: rgba(240,165,0,0.35);
            box-shadow: 0 18px 34px rgba(107,58,31,0.12);
          }
          .menu-item-copy {
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .menu-item-title-block h3 {
            font-size: 1.45rem;
            line-height: 1.08;
            color: var(--espresso);
          }
          .menu-item-title-block strong {
            display: block;
            margin-top: 0.35rem;
            font-family: var(--font-body);
            font-size: 1.05rem;
            font-weight: 800;
            color: var(--brown);
          }
          .menu-item-copy p {
            margin-top: 0.8rem;
            font-size: 0.95rem;
            line-height: 1.65;
            color: rgba(62,31,8,0.68);
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .menu-item-footer {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 0.75rem;
            margin-top: auto;
            padding-top: 1rem;
          }
          .menu-item-tag {
            display: inline-flex;
            align-items: center;
            padding: 0.45rem 0.78rem;
            border-radius: 999px;
            background: rgba(240,165,0,0.12);
            color: var(--brown);
            font-size: 0.76rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .menu-item-add {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 14px;
            background: var(--brown);
            color: var(--cream);
            box-shadow: 0 10px 18px rgba(107,58,31,0.18);
            flex-shrink: 0;
          }
          .menu-item-media {
            min-height: 158px;
            height: 100%;
          }
          .menu-item-media img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 18px;
            background: rgba(107,58,31,0.08);
          }
          @media (max-width: 1200px) {
            .menu-order-top,
            .menu-group-grid {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 900px) {
            .menu-page {
              min-height: calc(100vh - 80px);
            }
            .menu-order-shell {
              padding-top: 24px;
            }
            .menu-toolbar {
              top: 84px;
            }
            .menu-order-intro,
            .menu-order-summary,
            .menu-toolbar,
            .menu-group,
            .menu-empty-state {
              border-radius: 24px;
            }
            .menu-order-intro {
              padding: 1.6rem;
            }
            .menu-group-heading {
              flex-direction: column;
              align-items: flex-start;
            }
            .menu-item-card {
              grid-template-columns: minmax(0, 1fr) 140px;
            }
          }
          @media (max-width: 640px) {
            .menu-order-intro h1 {
              font-size: 2.4rem;
            }
            .menu-order-summary {
              grid-template-columns: 1fr;
            }
            .menu-toolbar {
              padding: 0.9rem;
            }
            .menu-toolbar-main {
              flex-direction: column;
              align-items: stretch;
            }
            .menu-search-input-wrap {
              flex-basis: auto;
            }
            .menu-toolbar-pills {
              overflow-x: auto;
              flex-wrap: nowrap;
              padding-bottom: 0.15rem;
              scrollbar-width: none;
            }
            .menu-toolbar-pills::-webkit-scrollbar {
              display: none;
            }
            .menu-empty-state,
            .menu-group {
              padding: 1rem;
            }
            .menu-group-heading h2 {
              font-size: 1.55rem;
            }
            .menu-item-card {
              grid-template-columns: 1fr;
            }
            .menu-item-media {
              order: -1;
              min-height: 190px;
            }
            .menu-item-title-block h3 {
              font-size: 1.28rem;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default MenuPage;
