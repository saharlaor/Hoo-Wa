const puppeteer = require("puppeteer");

const BASE_URL = "https://mamalisa.com";
const LANGUAGE_LIST_URI = "?t=el";

async function getLanguages(page) {
  await page.goto(`${BASE_URL}/${LANGUAGE_LIST_URI}`);
  const languages = await page.evaluate(() => {
    const links = document.querySelectorAll("#main .row a");
    [...links].map(({ href, innerText }) => {
      return { url: href, name: innerText };
    });
  });

  return languages;
}

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const languages = await getLanguages(page);

  // TODO: getLanguageSongs

  // TODO: getSongContent

  // TODO: Save to DB

  await browser.close();
}

main();
