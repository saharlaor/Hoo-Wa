const puppeteer = require("puppeteer");
const { getSelectors, getSelector, getElementWithText } = require("./utils");

const BASE_URL = "https://mamalisa.com";
const LANGUAGE_URI = "?t=el";

async function getLanguages(browser) {
  const page = await browser.newPage();
  await page.goto(`${BASE_URL}/${LANGUAGE_URI}`);
  const languages = await page.evaluate(() => {
    const links = document.querySelectorAll("#main > .row a");
    return [...links].map(({ href, innerText }) => {
      return { url: href, name: innerText };
    });
  });
  return languages;
}

async function getLanguageSongs(browser, languages) {
  const songList = languages.slice(0, 4).map(async ({ url, name }) => {
    const page = await browser.newPage();
    await page.goto(url);

    const links = await getSelectors(page, "#main > .row a");

    // Validation
    if (!(links instanceof Array)) return console.log("Didn't find links");
    if (links.length === 0) return console.log("array is empty no links");

    const newLinks = links.map(async (link) => {
      const originalTitle = await link.$eval(
        "h2",
        ({ innerText }) => innerText
      );
      const englishTitle = await link.$eval("p", ({ innerText }) => innerText);
      // console.log("englishTitle", englishTitle);
      return { url: link.href, originalTitle, englishTitle, language: name };
    });
    return newLinks;
  });
  return songList;
}

//! Test
// const langSongs = await page.evaluate(async () => {
//   const links = await page.$$();

//   // Foreach song link, save the url, titles and the language of origin
//   return [...links].forEach(async (link) => {
//     const originalTitle = await link.$eval(
//       "h2",
//       (element) => element.innerText
//     );
//     console.log("originalTitle", originalTitle);
//     // link.querySelector("p").innerText;
//     // console.log("englishTitle", englishTitle);
//     return allSongs.push({
//       url: link.href,
//       originalTitle,
//       // englishTitle,
//       language: name,
//     });
//   });
// });
// return allSongs;

async function main() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--disable-dev-shm-usage", "--shm-size=3gb"],
  });

  // Get a language list
  const languages = await getLanguages(browser);

  // Get a song list from given languages
  const songs = await Promise.all(await getLanguageSongs(browser, languages))
    .then((req) => {
      const data = req.flat(3);
      return data;
    })
    .then((songArr) => {
      return songArr;
    });

  // TODO: getSongContent

  // TODO: Save to DB

  await browser.close();
}

main();
