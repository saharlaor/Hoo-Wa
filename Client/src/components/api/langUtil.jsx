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
    setSourceLanguage(e.target.value);
  };

  const onChangeTargetLanguage = (e) => {
    setTargetLanguage(e.target.value);
  };

  const onChangeEnteredText = (e) => {
    setEnteredText(e.target.value);
  };

  return (
   "moo"
  );
}
