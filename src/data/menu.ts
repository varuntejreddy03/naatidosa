export type MenuItem = {
  id: number;
  name: string;
  desc: string;
  price: string;
};

export type MenuCategoryMap = Record<string, MenuItem[]>;

const DEFAULT_MENU_IMAGE = '/plaindosa.jpg';

const menuImageMap: Record<number, string> = {
  101: '/plaindosa.jpg',
  102: '/eggdosa.jpg',
  103: '/gheekharamdosa.jpg',
  104: '/Ghee%20Pudi%20Dosa.jpg',
  105: '/Set%20Dosa.jpg',
  106: '/Cheeze%20Dosa.jpg',
  107: '/Onion%20Dosa.jpg',
  108: '/Cheeze%20Dosa.jpg',

  201: '/Benne%20Dosa.jpg',
  202: '/Mysore%20Masala%20Dosa.jpg',
  203: '/Pudina%20Dosa.jpg',

  301: '/Chef%27s%20Special%20Dosa.jpg',

  401: '/thatte%20idli.jpg',
  402: '/gheepodiidli.jpg',
  403: '/gheepodiidli.jpg',
  404: '/sambar%20idli.jpg',

  501: '/mini%20idli%20ghee%20podi.jpg',
  502: '/Ghee%20Pudi%20Chitti%20Idli.jpg',
  503: '/Ghee%20Karam%20Chitti%20Idli.jpg',
  504: '/sambar%20idli.jpg',

  601: '/pani%20puri.jpg',
  602: '/masala%20puri.jpg',
  603: '/dahi%20puri.jpg',
  604: '/bhel%20puri.jpg',
  605: '/samosa%20chaat.jpg',
  606: '/samosa%20chaat.jpg',
  607: '/mirchi%20bajji.jpg',
  608: '/samosa%20chaat.jpg',

  701: '/bhel%20puri.jpg',

  801: '/chikku%20shake.jpg',
  802: '/falooda.jpg',
  803: '/fresh%20lime%20soda.jpg',
  804: '/tea.jpg',
  805: '/south%20indian%20filter%20coffee.jpg',

  901: '/Bun%20Maska.jpg',

  1001: '/chicken%20momos.jpg',
  1002: '/veg%20momos.jpg',

  1101: '/chicken%20puff%20bakery.jpg',
  1102: '/chicken%20puff%20bakery.jpg',
  1103: '/Paneer%20Puff.jpg',

  1201: '/mirchi%20bajji.jpg',
  1202: '/Egg%20Bajji.jpg',
};

export const menuCategories: MenuCategoryMap = {
  Dosa: [
    { id: 101, name: 'Plain Dosa', desc: 'Crispy thin rice & lentil crepe.', price: '$9.99' },
    { id: 102, name: 'Egg Dosa', desc: 'Topped with spiced beaten eggs.', price: '$12.49' },
    { id: 103, name: 'Ghee Karam Dosa', desc: 'Spicy karam podi with pure ghee.', price: '$11.99' },
    { id: 104, name: 'Ghee Pudi Dosa', desc: 'Crispy dosa with gunpowder & ghee.', price: '$11.99' },
    { id: 105, name: 'Set Dosa', desc: 'Soft, spongy thick dosas (3 pcs).', price: '$11.99' },
    { id: 106, name: 'Cheeze Dosa', desc: 'Melting cheese blend inside.', price: '$13.49' },
    { id: 107, name: 'Onion Dosa', desc: 'Crispy dosa with caramelised onions.', price: '$11.49' },
    { id: 108, name: 'Paneer Dosa', desc: 'Spiced cottage cheese filling.', price: '$13.99' },
  ],
  'Karnataka Specials': [
    { id: 201, name: 'Benne Dosa', desc: 'Davangere style butter dosa.', price: '$12.99' },
    { id: 202, name: 'Mysore Masala Dosa', desc: 'Spicy red chutney & potato filling.', price: '$13.99' },
    { id: 203, name: 'Pudina Dosa', desc: 'Fresh mint and green herb dosa.', price: '$11.49' },
  ],
  "Chef's Special Dosa": [
    { id: 301, name: "Chef's Special Dosa", desc: "Ask your server for today's special.", price: '$15.99' },
  ],
  Idli: [
    { id: 401, name: 'Thatte Idli', desc: 'Plate-sized soft steamed cake.', price: '$6.99' },
    { id: 402, name: 'Ghee Pudi Thatte Idli', desc: 'With ghee and spicy podi.', price: '$7.99' },
    { id: 403, name: 'Ghee Karam Thatte Idli', desc: 'Thatte idli with karam & ghee.', price: '$7.99' },
    { id: 404, name: 'Sambar Thatte Idli', desc: 'Served with rich lentil sambar.', price: '$7.49' },
  ],
  'Guntur Specials': [
    { id: 501, name: 'Chitti Idli', desc: 'Bite-sized mini steamed idlis.', price: '$7.99' },
    { id: 502, name: 'Ghee Pudi Chitti Idli', desc: 'Mini idlis tossed in ghee & podi.', price: '$8.99' },
    { id: 503, name: 'Ghee Karam Chitti Idli', desc: 'Mini idlis with spicy karam ghee.', price: '$8.99' },
    { id: 504, name: 'Sambar Idli', desc: 'Soft idlis dunked in sambar.', price: '$7.49' },
  ],
  Chats: [
    { id: 601, name: 'Pani Puri', desc: 'Crispy puris with spiced water.', price: '$8.99' },
    { id: 602, name: 'Masala Puri', desc: 'Crushed puris with hot peas gravy.', price: '$8.99' },
    { id: 603, name: 'Dahi Puri', desc: 'Sweet yogurt and tangy chutneys.', price: '$9.99' },
    { id: 604, name: 'Bhel Puri', desc: 'Puffed rice mixed with chutneys.', price: '$8.49' },
    { id: 605, name: 'Samosa Chat', desc: 'Crispy samosa with chaat toppings.', price: '$9.49' },
    { id: 606, name: 'Samosa Dahi Chat', desc: 'Samosa with yogurt & chutneys.', price: '$9.99' },
    { id: 607, name: 'Bajji Chat', desc: 'Fritters topped with chaat masala.', price: '$8.99' },
    { id: 608, name: 'Aloo Samosa', desc: 'Classic potato-filled pastry.', price: '$3.99' },
  ],
  'Vizag Specials': [
    { id: 701, name: 'Muri Mixture', desc: 'Puffed rice with spicy Vizag masala.', price: '$7.99' },
  ],
  Drinks: [
    { id: 801, name: 'Chikku Shake', desc: 'Creamy sapota milkshake.', price: '$5.99' },
    { id: 802, name: 'Falooda', desc: 'Layered rose & vermicelli dessert drink.', price: '$8.99' },
    { id: 803, name: 'Fresh Lime Soda', desc: 'Chilled lime with soda & salt.', price: '$3.99' },
    { id: 804, name: 'Tea', desc: 'Hand-crafted aromatic spiced tea.', price: '$3.49' },
    { id: 805, name: 'Filter Coffee', desc: 'Traditional South Indian coffee.', price: '$3.99' },
  ],
  'Hyderabadi Specials': [
    { id: 901, name: 'Bun Maska', desc: 'Soft bun with generous butter.', price: '$4.99' },
  ],
  Momos: [
    { id: 1001, name: 'Chicken Momos', desc: 'Juicy steamed chicken dumplings.', price: '$11.99' },
    { id: 1002, name: 'Veg Momos', desc: 'Steamed vegetable dumplings.', price: '$10.99' },
  ],
  Puffs: [
    { id: 1101, name: 'Chicken Puff', desc: 'Flaky pastry with spiced chicken.', price: '$4.49' },
    { id: 1102, name: 'Egg Puff', desc: 'Classic bakery style egg pastry.', price: '$3.99' },
    { id: 1103, name: 'Paneer Puff', desc: 'Savory paneer masala filling.', price: '$4.49' },
  ],
  Bajji: [
    { id: 1201, name: 'Mirchi Bajji', desc: 'Reg / Stuffed / Cut chili fritters.', price: '$7.99' },
    { id: 1202, name: 'Egg Bajji', desc: 'Boiled egg halves in chickpea batter.', price: '$8.49' },
  ],
};

const menuExplainers: Record<string, string> = {
  Dosa: 'A thin, golden crepe made from fermented rice and lentils, known for its crisp edges and light texture.',
  'Karnataka Specials': 'A regional South Indian dosa style built on fermented rice-and-lentil batter, layered with bold house flavors.',
  "Chef's Special Dosa": 'A rotating chef-driven version of the classic South Indian dosa, made from fermented rice and lentils.',
  Idli: 'Soft, fluffy steamed cakes made from fermented rice and lentils, loved as a classic South Indian comfort food.',
  'Guntur Specials': 'Mini South Indian idlis with bold Andhra-style seasoning, designed for a richer and spicier bite.',
  Chats: 'A popular Indian street-food snack category known for crunchy textures, chutneys, and bright sweet-tangy-spicy flavors.',
  'Vizag Specials': 'A crunchy Andhra-style snack mix with bold seasoning and a light, airy bite.',
  Drinks: 'An Indian-style beverage selection made to refresh the palate and balance the meal.',
  'Hyderabadi Specials': 'A simple cafe-style comfort snack rooted in everyday Hyderabad bakery culture.',
  Momos: 'Soft dumplings packed with savory filling and cooked until tender and juicy.',
  Puffs: 'A bakery-style savory pastry with flaky layers and a warm, spiced filling.',
  Bajji: 'A South Indian fritter made by coating the main ingredient in chickpea batter and frying it until crisp.',
};

const menuFinishes: Record<string, string> = {
  Dosa: 'A popular South Indian favorite served with house chutney and sambar.',
  'Karnataka Specials': 'A regional favorite served hot with house chutney and sambar.',
  "Chef's Special Dosa": 'Ask about the current variation for the full flavor profile and accompaniments.',
  Idli: 'Soft, mild, and easy to enjoy, typically paired with house chutney and sambar.',
  'Guntur Specials': 'Expect a richer seasoning profile and a comforting, bite-sized South Indian classic.',
  Chats: 'Expect a layered street-food bite that is crunchy, lively, and full of contrast.',
  'Vizag Specials': 'Light, savory, and easy to snack on.',
  Drinks: 'A good match for spicy dishes and a smooth way to round out the meal.',
  'Hyderabadi Specials': 'Simple, buttery, and especially good with tea or coffee.',
  Momos: 'A satisfying snack or shareable side with a tender bite.',
  Puffs: 'Warm, flaky, and easy to grab as a quick snack or side.',
  Bajji: 'Served hot for a crunchy, spicy bite.',
};

function ensureSentence(text: string) {
  const trimmed = text.trim();

  if (!trimmed) {
    return '';
  }

  return /[.!?]$/.test(trimmed) ? trimmed : `${trimmed}.`;
}

export function getMenuImage(itemId: number) {
  return menuImageMap[itemId] || DEFAULT_MENU_IMAGE;
}

export function getMenuCategorySlug(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getExpandedMenuDescription(category: string, item: MenuItem) {
  const intro =
    item.id === 105
      ? 'A soft, fluffy, thicker style of dosa served as a comforting trio, made from fermented rice and lentils.'
      : item.id === 802
        ? 'A layered South Asian dessert drink with sweet rose notes, silky textures, and chilled richness.'
        : menuExplainers[category] || 'A South Indian specialty made with traditional ingredients and bold flavor.';

  const finish =
    item.id === 301
      ? 'The exact combination changes, so it is a good pick if you want something signature to the kitchen.'
      : item.id === 901
        ? 'Comforting, buttery, and ideal when you want something simple alongside tea or coffee.'
        : menuFinishes[category] || 'A flavorful pick that introduces the style clearly for first-time guests.';

  return [ensureSentence(intro), ensureSentence(item.desc), ensureSentence(finish)].join(' ');
}
