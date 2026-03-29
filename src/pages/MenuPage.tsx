import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Search, Sparkles } from 'lucide-react';
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

const previewItemIds = [107, 202, 404];

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

        const nextActive = visibleSections[0].target.id.replace('menu-', '');
        setActiveCategory(nextActive);
      },
      {
        root: null,
        rootMargin: '-140px 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
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
  const browseTarget = activeCategory || filteredSections[0]?.slug || allSections[0]?.slug || '';

  const previewItems = allSections
    .flatMap((section) =>
      section.items
        .filter((item) => previewItemIds.includes(item.id))
        .map((item) => ({ category: section.category, item })),
    )
    .sort((a, b) => previewItemIds.indexOf(a.item.id) - previewItemIds.indexOf(b.item.id));

  const handleCategoryClick = (slug: string) => {
    setActiveCategory(slug);

    const targetSection = sectionRefs.current[slug];

    if (!targetSection) {
      return;
    }

    const navOffset = window.innerWidth <= 1100 ? 96 : 122;
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

      <section className="menu-page-hero">
        <div className="container menu-page-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="menu-page-copy"
          >
            <span className="menu-pill">Naati Dosa Menu</span>
            <h1>
              Bigger cards, clearer descriptions, same <span>menu data</span>.
            </h1>
            <p>
              This page keeps the current items and pricing, but presents them in a dedicated menu layout with fuller
              explanations so first-time guests understand what they are ordering.
            </p>

            <div className="menu-page-actions">
              <button type="button" className="menu-hero-primary" onClick={() => handleCategoryClick(browseTarget)}>
                Browse Menu <ArrowRight size={18} />
              </button>
              <button type="button" className="menu-hero-secondary" onClick={() => openPopup()}>
                Order Online
              </button>
            </div>

            <div className="menu-page-stats">
              <div>
                <strong>{totalItemCount}+</strong>
                <span>Menu items</span>
              </div>
              <div>
                <strong>{allSections.length}</strong>
                <span>Categories</span>
              </div>
              <div>
                <strong>Fresh daily</strong>
                <span>House batter, chutney, sambar</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="menu-preview-panel"
          >
            <div className="menu-preview-header">
              <div>
                <span className="preview-kicker">Guest Favorites</span>
                <h2>What new customers usually ask about first</h2>
              </div>
              <Sparkles size={18} />
            </div>

            <div className="menu-preview-list">
              {previewItems.map(({ category, item }) => (
                <article key={item.id} className="menu-preview-card">
                  <img
                    src={getMenuImage(item.id)}
                    alt={item.name}
                    onError={(event) => {
                      event.currentTarget.src = '/plaindosa.jpg';
                    }}
                  />
                  <div>
                    <div className="menu-preview-topline">
                      <span>{category}</span>
                      <strong>{item.price}</strong>
                    </div>
                    <h3>{item.name}</h3>
                    <p>{getExpandedMenuDescription(category, item)}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="menu-board">
        <div className="container menu-board-shell">
          <aside className="menu-board-sidebar">
            <div className="menu-search-card">
              <label htmlFor="menu-search" className="menu-search-label">
                Search Menu
              </label>
              <div className="menu-search-input-wrap">
                <Search size={18} />
                <input
                  id="menu-search"
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search dosa, idli, coffee..."
                />
              </div>
              <p>Search by item name, category, or description.</p>
            </div>

            <div className="menu-category-card">
              <div className="menu-category-title-row">
                <h3>Categories</h3>
                <span>{filteredSections.length}</span>
              </div>

              <div className="menu-category-list">
                {filteredSections.map((section) => (
                  <button
                    key={section.slug}
                    type="button"
                    className={activeCategory === section.slug ? 'active' : ''}
                    onClick={() => handleCategoryClick(section.slug)}
                  >
                    <span>{section.category}</span>
                    <strong>{section.items.length}</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="menu-sidebar-note">
              <MapPin size={18} />
              <p>Pickup is available from the truck in Delray Beach, FL.</p>
            </div>
          </aside>

          <div className="menu-board-content">
            {filteredSections.length === 0 && (
              <div className="menu-empty-state">
                <h2>No matching menu items</h2>
                <p>Try a simpler search like “dosa”, “idli”, or “coffee”.</p>
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
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: sectionIndex * 0.04 }}
              >
                <div className="menu-group-heading">
                  <div>
                    <span>{section.category}</span>
                    <h2>{section.items.length} items in this section</h2>
                  </div>
                  <p>
                    Larger cards and longer copy help customers understand the dish style before they order.
                  </p>
                </div>

                <div className="menu-group-grid">
                  {section.items.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className="menu-item-card"
                      onClick={() => openPopup(item.name)}
                    >
                      <div className="menu-item-media">
                        <img
                          src={getMenuImage(item.id)}
                          alt={item.name}
                          onError={(event) => {
                            event.currentTarget.src = '/plaindosa.jpg';
                          }}
                        />
                      </div>

                      <div className="menu-item-copy">
                        <div className="menu-item-eyebrow">
                          <span>{section.category}</span>
                        </div>
                        <div className="menu-item-title-row">
                          <h3>{item.name}</h3>
                          <strong>{item.price}</strong>
                        </div>
                        <p>{getExpandedMenuDescription(section.category, item)}</p>
                        <div className="menu-item-meta">
                          <span>{section.category}</span>
                          <span>Tap to order</span>
                        </div>
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
            background:
              radial-gradient(circle at top left, rgba(240,165,0,0.14), transparent 28%),
              linear-gradient(180deg, #221208 0%, #130905 38%, #0C0603 100%);
            color: #FFF6EA;
            min-height: calc(100vh - 100px);
          }
          .menu-page-hero {
            padding: 56px 0 40px;
          }
          .menu-page-hero-grid {
            display: grid;
            grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
            gap: 2rem;
            align-items: stretch;
          }
          .menu-page-copy,
          .menu-preview-panel,
          .menu-search-card,
          .menu-category-card,
          .menu-sidebar-note,
          .menu-group,
          .menu-empty-state {
            border: 1px solid rgba(255,255,255,0.08);
            background: rgba(255,255,255,0.04);
            box-shadow: 0 24px 50px rgba(0,0,0,0.18);
            backdrop-filter: blur(14px);
          }
          .menu-page-copy {
            border-radius: 34px;
            padding: 3rem;
          }
          .menu-pill {
            display: inline-flex;
            align-items: center;
            padding: 0.45rem 0.9rem;
            border-radius: 999px;
            background: rgba(240,165,0,0.16);
            border: 1px solid rgba(240,165,0,0.35);
            color: #FFD289;
            font-size: 0.82rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .menu-page-copy h1 {
            font-size: clamp(3rem, 5vw, 4.9rem);
            line-height: 0.92;
            margin: 1.35rem 0 1rem;
            color: #FFF7ED;
          }
          .menu-page-copy h1 span {
            color: var(--orange);
            font-style: italic;
          }
          .menu-page-copy p {
            max-width: 58ch;
            font-size: 1.08rem;
            line-height: 1.8;
            color: rgba(255,246,234,0.74);
          }
          .menu-page-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-top: 2rem;
          }
          .menu-hero-primary,
          .menu-hero-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.65rem;
            padding: 1rem 1.4rem;
            border-radius: 18px;
            font-size: 0.95rem;
            font-weight: 800;
            letter-spacing: 0.06em;
            text-transform: uppercase;
          }
          .menu-hero-primary {
            background: linear-gradient(135deg, var(--orange) 0%, #F6B93B 100%);
            color: #2C1709;
          }
          .menu-hero-secondary {
            background: transparent;
            color: #FFF1D8;
            border: 1px solid rgba(255,255,255,0.18);
          }
          .menu-page-stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 1rem;
            margin-top: 2.25rem;
          }
          .menu-page-stats div {
            padding: 1rem 1.1rem;
            border-radius: 20px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.06);
          }
          .menu-page-stats strong {
            display: block;
            font-size: 1.1rem;
            color: #FFF4E0;
          }
          .menu-page-stats span {
            display: block;
            margin-top: 0.35rem;
            font-size: 0.9rem;
            color: rgba(255,246,234,0.62);
          }
          .menu-preview-panel {
            border-radius: 34px;
            padding: 2rem;
          }
          .menu-preview-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1.5rem;
            color: #FFD289;
          }
          .preview-kicker {
            display: inline-block;
            margin-bottom: 0.55rem;
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: rgba(255,210,137,0.8);
          }
          .menu-preview-header h2 {
            font-size: 1.7rem;
            line-height: 1.1;
            color: #FFF4E0;
          }
          .menu-preview-list {
            display: grid;
            gap: 1rem;
          }
          .menu-preview-card {
            display: grid;
            grid-template-columns: 122px minmax(0, 1fr);
            gap: 1.1rem;
            align-items: stretch;
            padding: 1.15rem;
            border-radius: 28px;
            background: linear-gradient(180deg, rgba(103,67,31,0.92) 0%, rgba(84,52,23,0.96) 100%);
            border: 1px solid rgba(255,210,137,0.12);
          }
          .menu-preview-card img {
            width: 122px;
            height: 122px;
            object-fit: cover;
            border-radius: 22px;
          }
          .menu-preview-topline {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.8rem;
            margin-bottom: 0.45rem;
          }
          .menu-preview-card span {
            display: inline-block;
            font-size: 0.78rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #FFCC7A;
          }
          .menu-preview-topline strong {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.38rem 0.7rem;
            border-radius: 999px;
            background: rgba(255,210,137,0.12);
            color: #FFF1D8;
            font-size: 0.88rem;
          }
          .menu-preview-card h3 {
            font-size: 1.5rem;
            line-height: 1.1;
            color: #FFF7ED;
          }
          .menu-preview-card p {
            margin-top: 0.55rem;
            font-size: 0.96rem;
            line-height: 1.72;
            color: rgba(255,246,234,0.78);
          }
          .menu-board {
            padding: 0 0 72px;
          }
          .menu-board-shell {
            display: grid;
            grid-template-columns: 290px minmax(0, 1fr);
            gap: 1.4rem;
            align-items: start;
          }
          .menu-board-sidebar {
            position: sticky;
            top: 118px;
            display: grid;
            gap: 1rem;
            max-height: calc(100vh - 136px);
            overflow-y: auto;
            padding-right: 0.35rem;
            scrollbar-width: thin;
            scrollbar-color: rgba(255,210,137,0.28) transparent;
          }
          .menu-board-sidebar::-webkit-scrollbar {
            width: 6px;
          }
          .menu-board-sidebar::-webkit-scrollbar-thumb {
            background: rgba(255,210,137,0.24);
            border-radius: 999px;
          }
          .menu-search-card,
          .menu-category-card,
          .menu-sidebar-note {
            border-radius: 28px;
            padding: 1.25rem;
          }
          .menu-search-label,
          .menu-category-title-row h3 {
            display: block;
            margin-bottom: 0.8rem;
            font-size: 0.9rem;
            font-weight: 800;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: #FFD289;
          }
          .menu-search-input-wrap {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            padding: 0.95rem 1rem;
            border-radius: 16px;
            background: rgba(12,6,3,0.55);
            border: 1px solid rgba(255,255,255,0.08);
            color: rgba(255,246,234,0.55);
          }
          .menu-search-input-wrap input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: #FFF6EA;
            font-size: 0.98rem;
            font-family: var(--font-body);
          }
          .menu-search-input-wrap input::placeholder {
            color: rgba(255,246,234,0.35);
          }
          .menu-search-card p,
          .menu-sidebar-note p {
            margin-top: 0.8rem;
            font-size: 0.9rem;
            line-height: 1.6;
            color: rgba(255,246,234,0.62);
          }
          .menu-category-title-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
          }
          .menu-category-title-row span {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-width: 34px;
            height: 34px;
            padding: 0 0.7rem;
            border-radius: 999px;
            background: rgba(240,165,0,0.16);
            color: #FFD289;
            font-size: 0.84rem;
            font-weight: 800;
          }
          .menu-category-list {
            display: grid;
            gap: 0.6rem;
            margin-top: 0.9rem;
            max-height: 52vh;
            overflow-y: auto;
            padding-right: 0.25rem;
            scrollbar-width: thin;
            scrollbar-color: rgba(255,210,137,0.24) transparent;
          }
          .menu-category-list::-webkit-scrollbar {
            width: 6px;
          }
          .menu-category-list::-webkit-scrollbar-thumb {
            background: rgba(255,210,137,0.22);
            border-radius: 999px;
          }
          .menu-category-list button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            width: 100%;
            padding: 0.9rem 1rem;
            border-radius: 18px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.06);
            color: rgba(255,246,234,0.74);
            text-align: left;
          }
          .menu-category-list button.active,
          .menu-category-list button:hover {
            transform: translateX(4px);
            border-color: rgba(240,165,0,0.38);
            background: rgba(240,165,0,0.12);
            color: #FFF5DF;
          }
          .menu-category-list button span {
            font-size: 0.96rem;
            font-weight: 700;
          }
          .menu-category-list button strong {
            font-size: 0.86rem;
            color: #FFD289;
          }
          .menu-sidebar-note {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            color: #FFD289;
          }
          .menu-board-content {
            display: grid;
            gap: 1rem;
          }
          .menu-group,
          .menu-empty-state {
            border-radius: 34px;
            padding: 1.6rem;
            scroll-margin-top: 136px;
          }
          .menu-empty-state {
            text-align: center;
            padding: 3rem 2rem;
          }
          .menu-empty-state h2 {
            font-size: 2rem;
            color: #FFF4E0;
          }
          .menu-empty-state p {
            margin-top: 0.75rem;
            color: rgba(255,246,234,0.68);
          }
          .menu-group-heading {
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 1.35rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          }
          .menu-group-heading span {
            display: inline-block;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: #FFD289;
          }
          .menu-group-heading h2 {
            margin-top: 0.4rem;
            font-size: 2rem;
            color: #FFF4E0;
          }
          .menu-group-heading p {
            max-width: 36ch;
            font-size: 0.95rem;
            line-height: 1.65;
            color: rgba(255,246,234,0.6);
          }
          .menu-group-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .menu-item-card {
            display: grid;
            grid-template-columns: 170px minmax(0, 1fr);
            gap: 1.35rem;
            min-height: 240px;
            padding: 1.5rem;
            border-radius: 34px;
            background: linear-gradient(180deg, rgba(103,67,31,0.94) 0%, rgba(85,53,24,0.98) 100%);
            border: 1px solid rgba(255,210,137,0.12);
            color: #FFF6EA;
            text-align: left;
          }
          .menu-item-card:hover {
            transform: translateY(-3px);
            border-color: rgba(255,210,137,0.22);
            box-shadow: 0 26px 52px rgba(0,0,0,0.24);
          }
          .menu-item-media img {
            width: 100%;
            height: 170px;
            object-fit: cover;
            border-radius: 26px;
          }
          .menu-item-copy {
            display: flex;
            flex-direction: column;
            min-width: 0;
          }
          .menu-item-eyebrow {
            margin-bottom: 0.75rem;
          }
          .menu-item-eyebrow span {
            display: inline-block;
            font-size: 0.82rem;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: #FFCC7A;
          }
          .menu-item-title-row {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 1rem;
            margin-bottom: 0.95rem;
          }
          .menu-item-title-row h3 {
            font-size: 1.95rem;
            line-height: 1.05;
            color: #FFF7ED;
          }
          .menu-item-title-row strong {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 0.95rem;
            border-radius: 999px;
            background: rgba(255,210,137,0.12);
            color: #FFF1D8;
            font-size: 1rem;
            white-space: nowrap;
          }
          .menu-item-copy p {
            font-size: 1.1rem;
            line-height: 1.8;
            color: rgba(255,246,234,0.82);
          }
          .menu-item-meta {
            display: inline-flex;
            align-items: center;
            gap: 0.65rem;
            justify-content: space-between;
            margin-top: auto;
            padding-top: 1.2rem;
            font-size: 0.82rem;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: #FFD289;
          }
          @media (max-width: 1200px) {
            .menu-page-hero-grid,
            .menu-board-shell,
            .menu-group-grid {
              grid-template-columns: 1fr;
            }
            .menu-board-sidebar {
              position: static;
            }
          }
          @media (max-width: 900px) {
            .menu-page {
              min-height: calc(100vh - 80px);
            }
            .menu-page-copy,
            .menu-preview-panel,
            .menu-group,
            .menu-empty-state {
              border-radius: 28px;
            }
            .menu-board-sidebar {
              max-height: none;
              overflow: visible;
              padding-right: 0;
            }
            .menu-category-list {
              max-height: none;
              overflow: visible;
            }
            .menu-page-copy {
              padding: 2rem;
            }
            .menu-page-stats {
              grid-template-columns: 1fr;
            }
            .menu-group-heading {
              align-items: flex-start;
              flex-direction: column;
            }
            .menu-item-card {
              grid-template-columns: 1fr;
              min-height: 0;
            }
            .menu-item-media img {
              height: 230px;
            }
            .menu-item-title-row {
              flex-direction: column;
              align-items: flex-start;
            }
            .menu-item-title-row h3 {
              font-size: 1.65rem;
            }
          }
          @media (max-width: 640px) {
            .menu-page-hero {
              padding-top: 30px;
            }
            .menu-page-copy h1 {
              font-size: 2.7rem;
            }
            .menu-preview-card {
              grid-template-columns: 1fr;
            }
            .menu-preview-card img {
              width: 100%;
              height: 220px;
            }
            .menu-search-card,
            .menu-category-card,
            .menu-sidebar-note,
            .menu-group,
            .menu-empty-state {
              padding: 1rem;
              border-radius: 24px;
            }
            .menu-group-heading h2 {
              font-size: 1.6rem;
            }
            .menu-item-title-row h3 {
              font-size: 1.45rem;
            }
            .menu-item-copy p {
              font-size: 1rem;
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default MenuPage;
