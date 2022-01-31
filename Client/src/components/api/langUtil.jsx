import { getTranslation } from "./api";
import React, { useState } from "react";


export default function App() {
  const [sourceLanguage, setSourceLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const translation = await getTranslation(
      sourceLanguage,
      targetLanguage,
      enteredText
    );
    setTranslatedText(translation.text);
  };
  const onChangeSourceLanguage = (e) => {
    setSourceLanguage(switchCode(e.languege));
  };
  const onChangeTargetLanguage = (e) => {
    setTargetLanguage(e.target.id);
  };
  const onChangeEnteredText = (e) => {
    setEnteredText(e.value);
  };
  return (
   "moo"
  );
}

function switchCode(expression) {

  switch (expression) {
    case "Hebrew":
      return "he";
    case "Amharic":
      return "ar";
    case "English":
      return "en";
    case "Arabic":
      return "ar";
    case "Russian":
      return "ru";
    default:
      return "";
  }
}



