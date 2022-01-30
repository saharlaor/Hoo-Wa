const getSelectors = async (page, selector) => await page.$$(selector);
const getSelector = async (page, selector) => await page.$(selector);
const getElementWithText = async (page, selector) => {
  const element = await page.$(selector);
  return element.innerText;
};

module.exports = { getSelectors, getSelector, getElementWithText };
