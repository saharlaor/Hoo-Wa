import { getTranslation } from "./api";
import React, { useState } from "react";
import {switchCode} from "./langUtil";

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
