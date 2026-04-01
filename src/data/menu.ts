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
  '🥞 DOSA (Crispy South Indian Crepes)': [
    { id: 101, name: 'Plain Dosa', desc: 'A classic South Indian crepe made from fermented rice and lentils, cooked until golden and crispy on the outside with a light, slightly tangy flavor. Served with two house-made chutneys and sambar.', price: '$9.99' },
    { id: 102, name: 'Egg Dosa', desc: 'A crispy dosa cooked with a freshly cracked egg spread on top, creating a soft, savory layer combined with the crisp crepe underneath. Served with two house-made chutneys and sambar.', price: '$12.49' },
    { id: 103, name: 'Ghee Karam Dosa', desc: 'A bold and flavorful dosa spread with spicy chili-garlic paste and finished with rich clarified butter (ghee) for a spicy, buttery taste. Served with two house-made chutneys and sambar.', price: '$11.99' },
    { id: 104, name: 'Ghee Pudi Dosa', desc: 'Crispy dosa coated with aromatic spiced lentil powder (gunpowder spice mix) and drizzled with melted ghee for a rich, nutty flavor. Served with two house-made chutneys and sambar.', price: '$11.99' },
    { id: 105, name: 'Set Dosa', desc: 'Soft, thick, and fluffy mini dosas served in a set of three. These are lighter and more bread-like compared to crispy dosas. Served with two house-made chutneys and sambar.', price: '$11.99' },
    { id: 106, name: 'Cheese Dosa', desc: 'Crispy dosa filled with melted cheese, creating a fusion-style dish that is crunchy outside and creamy inside. Served with two house-made chutneys and sambar.', price: '$13.49' },
    { id: 107, name: 'Onion Dosa', desc: 'Crispy dosa topped with caramelized sautéed onions that add sweetness and crunch to every bite. Served with two house-made chutneys and sambar.', price: '$11.49' },
    { id: 108, name: 'Paneer Dosa', desc: 'A stuffed dosa filled with seasoned Indian cottage cheese (paneer), sautéed with mild spices and herbs. Served with two house-made chutneys and sambar.', price: '$13.99' },
  ],
  '🌟 KARNATAKA SPECIALS': [
    { id: 201, name: 'Benne Dosa', desc: 'A famous buttery dosa from Karnataka made with extra butter, giving it a rich aroma, crispy edges, and soft center. Served with two house-made chutneys and sambar.', price: '$12.99' },
    { id: 202, name: 'Mysore Masala Dosa', desc: 'A spicy variation of dosa spread with fiery red chili chutney and stuffed with lightly spiced mashed potato filling. Served with two house-made chutneys and sambar.', price: '$13.99' },
    { id: 203, name: 'Pudina Dosa', desc: 'A refreshing dosa infused with fresh mint leaves and mild spices, giving it a cool and aromatic flavor. Served with two house-made chutneys and sambar.', price: '$11.49' },
  ],
  '👨🍳 CHEF’S SPECIAL DOSA': [
    { id: 301, name: "Chef's Special Dosa", desc: 'A rotating signature dosa created by our chef using seasonal ingredients and unique flavor combinations. Served with two house-made chutneys and sambar.', price: '$15.99' },
  ],
  '🍽️ IDLI (Steamed Rice Cakes)': [
    { id: 401, name: 'Thatte Idli', desc: 'A large, plate-sized soft steamed rice cake that is airy, spongy, and slightly tangy in flavor, served hot with two house-made chutneys and sambar.', price: '$6.99' },
    { id: 402, name: 'Ghee Pudi Thatte Idli', desc: 'Large steamed idli topped generously with spiced lentil powder and hot melted ghee, giving a rich, nutty, and spicy taste. Served with two house-made chutneys and sambar.', price: '$7.99' },
    { id: 403, name: 'Ghee Karam Thatte Idli', desc: 'Soft large idli tossed in a spicy chili-garlic mix and finished with ghee for a bold and flavorful kick. Served with two house-made chutneys and sambar.', price: '$7.99' },
    { id: 404, name: 'Sambar Thatte Idli', desc: 'Large soft idli soaked in warm lentil soup (sambar), making it soft, flavorful, and comforting. Served with two house-made chutneys.', price: '$7.49' },
  ],
  '🔥 GUNTUR SPECIALS': [
    { id: 501, name: 'Chitti Idli', desc: 'Small bite-sized steamed rice cakes that are soft and fluffy, often enjoyed as a snack or street-style dish. Served with two house-made chutneys and sambar.', price: '$7.99' },
    { id: 502, name: 'Ghee Pudi Chitti Idli', desc: 'Mini idlis coated in spicy lentil powder and tossed with ghee for a rich, flavorful bite-sized snack. Served with two house-made chutneys and sambar.', price: '$8.99' },
    { id: 503, name: 'Ghee Karam Chitti Idli', desc: 'Mini idlis mixed with spicy chili seasoning and ghee, creating a bold, street-style flavor. Served with two house-made chutneys and sambar.', price: '$8.99' },
    { id: 504, name: 'Sambar Idli', desc: 'Soft steamed idlis soaked in hot, mildly spiced lentil soup for a comforting and filling dish. Served with two house-made chutneys.', price: '$7.49' },
  ],
  '🥙 CHAATS (Indian Street Snacks)': [
    { id: 601, name: 'Pani Puri', desc: 'Crispy hollow shells filled with spicy, tangy flavored water, mashed potatoes, and chickpeas for a burst of flavor in every bite.', price: '$8.99' },
    { id: 602, name: 'Masala Puri', desc: 'Crushed crispy puris topped with warm spiced peas curry, onions, and tangy chutneys.', price: '$8.99' },
    { id: 603, name: 'Dahi Puri', desc: 'Crispy puris filled with potatoes, yogurt, sweet and spicy chutneys, and crunchy toppings.', price: '$9.99' },
    { id: 604, name: 'Bhel Puri', desc: 'A light and crunchy mix of puffed rice, onions, tomatoes, chutneys, and spices.', price: '$8.49' },
    { id: 605, name: 'Samosa Chaat', desc: 'Crushed crispy samosa topped with chickpeas, onions, and sweet & tangy chutneys, finished with fresh herbs and spices.', price: '$9.49' },
    { id: 606, name: 'Samosa Dahi Chaat', desc: 'Samosa served with creamy yogurt, tamarind chutney, and spices for a rich flavor mix.', price: '$9.99' },
    { id: 607, name: 'Bajji Chaat', desc: 'Crispy fried fritters topped with chutneys, onions, and spices in chaat style.', price: '$8.99' },
    { id: 608, name: 'Aloo Samosa', desc: 'Deep-fried pastry filled with seasoned mashed potatoes and spices.', price: '$3.99' },
  ],
  '🌊 VIZAG SPECIAL': [
    { id: 701, name: 'Muri Mixture', desc: 'A crunchy and spicy snack made with puffed rice, peanuts, onions, fresh raw mango pieces, curry leaves, and traditional Indian spices.', price: '$7.99' },
  ],
  '🥤 DRINKS': [
    { id: 801, name: 'Chikoo Shake', desc: 'A thick and creamy milkshake made from chikoo (sapodilla), a naturally sweet tropical fruit.', price: '$5.99' },
    { id: 802, name: 'Falooda', desc: 'A rich and indulgent dessert drink made with sweet milk, basil seeds, vermicelli, rose syrup, and ice cream.', price: '$8.99' },
    { id: 803, name: 'Fresh Lime Soda', desc: 'A refreshing drink made with fresh lime juice, soda, and a choice of sweet or salty flavor.', price: '$3.99' },
    { id: 804, name: 'Tea', desc: 'Traditional Indian milk tea brewed with aromatic spices for a strong and comforting flavor.', price: '$3.49' },
    { id: 805, name: 'Filter Coffee', desc: 'Authentic South Indian coffee brewed using a metal filter and mixed with hot milk for a strong, rich taste.', price: '$3.99' },
  ],
  '🥯 HYDERABADI SPECIAL': [
    { id: 901, name: 'Bun Maska', desc: 'Soft bakery bun lightly toasted and generously spread with butter, traditionally served with hot tea.', price: '$4.99' },
  ],
  '🥟 MOMOS (Steamed Dumplings)': [
    { id: 1001, name: 'Chicken Momos', desc: 'Soft steamed dumplings filled with finely seasoned chicken and spices.', price: '$11.99' },
    { id: 1002, name: 'Veg Momos', desc: 'Steamed dumplings filled with mixed vegetables and mild seasoning.', price: '$10.99' },
  ],
  '🥐 PUFFS (Flaky Pastries)': [
    { id: 1101, name: 'Chicken Puff', desc: 'Crispy, flaky pastry filled with spiced chicken filling.', price: '$4.49' },
    { id: 1102, name: 'Egg Puff', desc: 'Golden baked pastry filled with boiled egg and aromatic spices.', price: '$3.99' },
    { id: 1103, name: 'Paneer Puff', desc: 'Flaky pastry filled with seasoned paneer and mild spices.', price: '$4.49' },
  ],
  '🌶️ BAJJI (FRIED SNACKS)': [
    { id: 1201, name: 'Mirchi Bajji', desc: 'Green chilies dipped in spiced batter and deep fried, crispy on the outside with a mild spicy kick inside.', price: '$7.99' },
    { id: 1202, name: 'Egg Bajji', desc: 'Boiled egg coated in seasoned batter and deep fried until crispy and golden.', price: '$8.49' },
  ],
};

const menuExplainers: Record<string, string> = {
  Dosa: 'Traditional South Indian crepes made from fermented rice and lentil batter. Naturally gluten-free, light, and crispy. Served with two house-made chutneys and lentil soup (sambar).',
  'Karnataka Specials': 'A famous buttery dosa from Karnataka made with extra butter, giving it a rich aroma, crispy edges, and soft center.',
  "Chef's Special Dosa": 'A rotating signature dosa created by our chef using seasonal ingredients and unique flavor combinations.',
  Idli: 'Soft, fluffy steamed cakes made from fermented rice and lentils. Light, healthy, and easy to digest. Served with two house-made chutneys and lentil soup (sambar).',
  'Guntur Specials': 'Small bite-sized steamed rice cakes that are soft and fluffy, often enjoyed as a snack or street-style dish.',
  Chats: 'Popular Indian street foods known for their mix of sweet, spicy, tangy, and crunchy flavors.',
  'Vizag Special': 'A crunchy and spicy snack made with puffed rice, peanuts, onions, fresh raw mango pieces, curry leaves, and traditional Indian spices.',
  Drinks: 'Refreshing beverages made to perfectly complement our South Indian flavors.',
  'Hyderabadi Special': 'Authentic snacks and comfort foods from the streets of Hyderabad.',
  Momos: 'Soft steamed dumplings filled with savory seasonings, a popular fusion snack.',
  Puffs: 'Flaky, buttery pastries filled with savory spiced fillings, baked to golden perfection.',
  Bajji: 'Classic deep-fried fritters, a staple South Indian street snack.',
};

export function getMenuImage(itemId: number) {
  return menuImageMap[itemId] || DEFAULT_MENU_IMAGE;
}

export function getMenuCategorySlug(category: string) {
  // Extract main word if it has emoji/parenthesis for slugging
  const cleanCategory = category.replace(/[^a-zA-Z0-9\s]/g, '').trim().split(' ')[0] || category;
  return cleanCategory.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function getExpandedMenuDescription(category: string, item: MenuItem) {
  // If we want to keep the logic for expanded descriptions, we can use the item.desc directly since they are more detailed now
  return item.desc;
}
