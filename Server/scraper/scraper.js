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
  await page.close();
  return languages;
}

async function getLanguageSongs(browser, languages) {
  const songList = languages.map(async ({ url, name }) => {
    const page = await browser.newPage();
    await page.goto(url);

    const links = await getSelectors(page, "#main > .row a");

    // Validation
    if (!(links instanceof Array)) return console.log("Didn't find links");
    if (links.length === 0) return console.log("array is empty no links");

    const newLinks = await Promise.allSettled(
      links.map(async (link) => {
        const originalTitle = await link.$eval(
          "h2",
          ({ innerText }) => innerText
        );
        const englishTitle = await link.$eval(
          "p",
          ({ innerText }) => innerText
        );
        const href = await (await link.getProperty("href")).jsonValue();
        return { url: href, originalTitle, englishTitle, language: name };
      })
    );
    await page.close();
    return newLinks;
  });
  return songList;
}

async function getSongContent(browser, songs) {
  const songsContent = (
    await Promise.allSettled(
      songs.map(async (songDetails) => {
        const page = await browser.newPage();
        await page.goto(songDetails.url);

        const originalLyricsEl = await getSelector(
          page,
          "#lyrics_original_language_lg"
        );
        const englishLyricsEl = await getSelector(
          page,
          "#lyrics_translation_lg"
        );

        const originalLyrics = await (
          await originalLyricsEl.getProperty("textContent")
        ).jsonValue();
        const englishLyrics = await (
          await englishLyricsEl.getProperty("textContent")
        ).jsonValue();

        const song = {
          originalTitle: songDetails.originalTitle,
          originalLyrics: originalLyrics,
          englishTitle: songDetails.englishTitle,
          englishLyrics: englishLyrics,
          language: songDetails.language,
        };
        await page.close();
        return song;
      })
    )
  ).map(({ value }) => {
    if (!value) return {};
    return value;
  });
  console.log("songsContent", songsContent);
  return songsContent;
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
  const filteredLanguages = languages.filter((lang) =>
    ["Arabic", "English", "Hebrew", "Russian", "Amharic"].includes(lang.name)
  );

  // Get a song list from given languages
  const songsPromiseArr = await getLanguageSongs(browser, filteredLanguages);
  const songList = (await Promise.allSettled(songsPromiseArr))
    .map(({ value }) => {
      if (!value) return {};
      return value
        .filter(({ status }) => status === "fulfilled")
        .map(({ value }) => value);
    })
    .flat();

  // Get all songs' content
  const songs = await getSongContent(browser, songList);
  console.log("songs", songs);

  // TODO: Save to DB

  await browser.close();
}

main();
