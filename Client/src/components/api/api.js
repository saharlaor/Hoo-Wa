const axios = require("axios").default;
//const path = require("path");
//require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
// const { v4: uuidv4 } = require('uuid');

const CONNECT_PASSWORD ="10113d5770d04986bd2fbf7e027f0548";

var endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
var location = "global";

const getTranslation = async (
  sourceLanguage,
  targetLanguage,
  enteredText
) => {
  const res = await axios({
    baseURL: endpoint,
    url: "/translate",
    method: "post",
    headers: {
      "Ocp-Apim-Subscription-Key": CONNECT_PASSWORD,
      "Ocp-Apim-Subscription-Region": location,
      "Content-type": "application/json",
      //'X-ClientTraceId': process.env.REACT_APP_TRACE_ID,
    },
    params: {
      "api-version": "3.0",
      from: sourceLanguage,
      to: targetLanguage,
    },
    data: [
      {
        text: enteredText,
      },
    ],
    responseType: "json",
  });

  return res.data[0].translations[0];
};
//   <div dir="rtl" style="..."> to print hebrew/arabic
//getTranslation("en","he","big bunny went to bed").then(x =>{ console.log(x) } );
module.exports = getTranslation;