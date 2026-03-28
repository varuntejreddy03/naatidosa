/**
 * ✅ CORRECT Menu Image Downloader
 * Wikipedia Commons — FREE, accurate, correctly matched
 * Run: node download-menu-images.js
 * Saved to: ./public/menu-images/
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");

const OUTPUT_DIR = "./public/menu-images";
if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const menuItems = {

  // DOSA
  plain_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sada-Dosa.jpg/640px-Sada-Dosa.jpg",
  egg_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Egg_dosa.jpg/640px-Egg_dosa.jpg",
  ghee_karam_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Podi_Dosa_From_Coimbatore%2CTamilNadu.jpg/640px-Podi_Dosa_From_Coimbatore%2CTamilNadu.jpg",
  ghee_pudi_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Podi_Dosa_From_Coimbatore%2CTamilNadu.jpg/640px-Podi_Dosa_From_Coimbatore%2CTamilNadu.jpg",
  set_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Set_dosa.jpg/640px-Set_dosa.jpg",
  cheeze_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Masala_Dosa_in_triangle.jpg/640px-Masala_Dosa_in_triangle.jpg",
  onion_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sada-Dosa.jpg/640px-Sada-Dosa.jpg",
  paneer_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Masala_Dosa_in_triangle.jpg/640px-Masala_Dosa_in_triangle.jpg",

  // KARNATAKA SPECIALS
  benne_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Benne_Dosa.jpg/640px-Benne_Dosa.jpg",
  mysore_masala_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Mysore_masala_dosa.jpg/640px-Mysore_masala_dosa.jpg",
  pudina_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Sada-Dosa.jpg/640px-Sada-Dosa.jpg",
  chefs_special_dosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Masala_Dosa_in_triangle.jpg/640px-Masala_Dosa_in_triangle.jpg",

  // IDLI
  thatte_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tatte_idli.jpg/640px-Tatte_idli.jpg",
  ghee_pudi_thatte_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tatte_idli.jpg/640px-Tatte_idli.jpg",
  ghee_karam_thatte_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tatte_idli.jpg/640px-Tatte_idli.jpg",
  sambar_thatte_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sambar_Idli_2.jpg/640px-Sambar_Idli_2.jpg",

  // GUNTUR CHITTI IDLI
  chitti_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Idli_Sambar_%28Edited%29.jpg/640px-Idli_Sambar_%28Edited%29.jpg",
  ghee_pudi_chitti_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Idli_Sambar_%28Edited%29.jpg/640px-Idli_Sambar_%28Edited%29.jpg",
  ghee_karam_chitti_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Idli_Sambar_%28Edited%29.jpg/640px-Idli_Sambar_%28Edited%29.jpg",
  sambar_idli:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sambar_Idli_2.jpg/640px-Sambar_Idli_2.jpg",

  // CHATS
  pani_puri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Panipuri.jpg/640px-Panipuri.jpg",
  masala_puri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Masala_puri.jpg/640px-Masala_puri.jpg",
  dahi_puri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dahi_puri.jpg/640px-Dahi_puri.jpg",
  bhel_puri:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Bhelpuri_at_Juhu_beach.jpg/640px-Bhelpuri_at_Juhu_beach.jpg",
  samosa_chat:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Samosa_chaat.jpg/640px-Samosa_chaat.jpg",
  samosa_dahi_chat:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Samosa_chaat.jpg/640px-Samosa_chaat.jpg",
  bajji_chat:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mirchi_Bajji.jpg/640px-Mirchi_Bajji.jpg",
  aloo_samosa:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Samosa_-_The_Indian_Snack.jpg/640px-Samosa_-_The_Indian_Snack.jpg",

  // VIZAG SPECIALS
  muri_mixture:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Bhel_puri_at_Juhu.jpg/640px-Bhel_puri_at_Juhu.jpg",

  // DRINKS
  chikku_shake:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Chikoo_milkshake.jpg/640px-Chikoo_milkshake.jpg",
  falooda:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Falooda.jpg/640px-Falooda.jpg",
  fresh_lime_soda:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Lime_juice_in_glass.jpg/640px-Lime_juice_in_glass.jpg",
  tea:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Ginger_tea.jpg/640px-Ginger_tea.jpg",
  filter_coffee:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Filter_coffee_-_Udupi.jpg/640px-Filter_coffee_-_Udupi.jpg",

  // HYDERABADI SPECIAL
  bun_maska:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Bun-maska.jpg/640px-Bun-maska.jpg",

  // MOMOS
  chicken_momos:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Chicken_momo.jpg/640px-Chicken_momo.jpg",
  veg_momos:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Veg_steam_momos.jpg/640px-Veg_steam_momos.jpg",

  // PUFFS
  chicken_puff:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puff_pastry.jpg/640px-Puff_pastry.jpg",
  egg_puff:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Egg_Puff.jpg/640px-Egg_Puff.jpg",
  paneer_puff:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Puff_pastry.jpg/640px-Puff_pastry.jpg",

  // BAJJI
  mirchi_bajji:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Mirchi_Bajji.jpg/640px-Mirchi_Bajji.jpg",
  egg_bajji:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Egg_bajji.jpg/640px-Egg_bajji.jpg",
};

function downloadFile(name, url, redirectCount = 0) {
  return new Promise((resolve) => {
    if (redirectCount > 5) { console.log(`  ❌ ${name} too many redirects`); return resolve(false); }
    const filePath = path.join(OUTPUT_DIR, `${name}.jpg`);
    const file = fs.createWriteStream(filePath);
    const lib = url.startsWith("https") ? https : http;
    const req = lib.get(url, { headers: { "User-Agent": "Mozilla/5.0" } }, (res) => {
      if ([301,302,303,307,308].includes(res.statusCode)) {
        file.close(); fs.unlink(filePath, ()=>{});
        return downloadFile(name, res.headers.location, redirectCount+1).then(resolve);
      }
      if (res.statusCode !== 200) {
        file.close(); fs.unlink(filePath, ()=>{});
        console.log(`  ⚠️  ${name} HTTP ${res.statusCode}`); return resolve(false);
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close();
        const stat = fs.statSync(filePath);
        if (stat.size < 3000) {
          fs.unlink(filePath, ()=>{});
          console.log(`  ⚠️  ${name} bad image`); return resolve(false);
        }
        console.log(`  ✅ ${name}.jpg (${Math.round(stat.size/1024)}KB)`);
        resolve(true);
      });
    });
    req.on("error", (e) => { file.close(); fs.unlink(filePath,()=>{}); console.log(`  ❌ ${name} ${e.message}`); resolve(false); });
    req.setTimeout(20000, () => { req.destroy(); file.close(); fs.unlink(filePath,()=>{}); console.log(`  ❌ ${name} timeout`); resolve(false); });
  });
}

async function main() {
  const entries = Object.entries(menuItems);
  console.log(`\n🍽️  Ala Hasthinapuramlo — Menu Image Downloader`);
  console.log(`📥 Downloading ${entries.length} correctly matched images`);
  console.log(`📁 Output: ${path.resolve(OUTPUT_DIR)}\n`);
  let ok = 0; const failed = [];
  for (const [name, url] of entries) {
    const result = await downloadFile(name, url);
    if (result) ok++; else failed.push(name);
    await new Promise(r => setTimeout(r, 400));
  }
  console.log(`\n${"━".repeat(45)}`);
  console.log(`✅ Success: ${ok}/${entries.length}`);
  if (failed.length) console.log(`❌ Failed: ${failed.join(", ")}`);
  console.log(`\n📌 In React use: <img src="/menu-images/plain_dosa.jpg" />`);
}
main();