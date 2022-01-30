const puppeteer = require("puppeteer");

const BASE_URL = "https://mamalisa.com";
const LANGUAGE_URI = "?t=el";

async function getLanguages(page) {
  await page.goto(`${BASE_URL}/${LANGUAGE_URI}`);
  const languages = await page.evaluate(() => {
    const links = document.querySelectorAll("#main .row a");
    [...links].map(({ href, innerText }) => {
      return { url: href, name: innerText };
    });
  });

  return languages;
}

async function getLanguageSongs(page, languages) {
  const songs = await languages.map(async ({ url, name }) => {
    await page.goto(url);
    const langSongs = await page.evaluate(() => {
      const links = document.querySelectorAll("#main .row a");
      [...links].map((link) => {
        const originalTitle = link.querySelector("h2").innerText;
        const englishTitle = link.querySelector("p").innerText;
        return { url: link.href, originalTitle, englishTitle, language: name };
      });
    });
    return langSongs;
  });

  return songs;
}

async function main() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  const languages = await getLanguages(page);

  // TODO: getLanguageSongs
  const songs = await getLanguageSongs(page, languages);

  // TODO: getSongContent

  // TODO: Save to DB

  await browser.close();
}

main();
