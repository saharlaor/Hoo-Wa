import React, { useState } from "react";
import onClickOutside from "react-onclickoutside";

function Dropdown({ title, items, multiSelect = false }) {
  const [open, setOpen] = useState(false);
  const [languages, setLanguages] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  const singleLanguage = (language) => setLanguages([language]);
  const multiLanguages = (language) => setLanguages([...languages, language]);
  const removeLanguage = (language) => {
    const newLanguagesSelected = languages.filter(
      (currentLanguage) => currentLanguage.id === language.id
    );
    setLanguages(newLanguagesSelected);
  };

  const renderLanguages = (language) => {
    const { value, id } = language;
    return (
      <li className="dd-list-item" key={id}>
        <button onClick={() => handleOnClick(language)}>
          <span>{value}</span>
          <span>{isLanguageInSelection(language) && "Selected"}</span>
        </button>
      </li>
    );
  };

  function handleOnClick(language) {
    const isLanguageExist = languages.some(
      (currentLanguage) => currentLanguage.id === language.id
    );
    if (!isLanguageExist) {
      if (!multiSelect) {
        singleLanguage(language);
      } else if (multiSelect) {
        multiLanguages(language);
      }
    } else {
      removeLanguage(languages);
    }
  }

  // Check if each item is selected
  function isLanguageInSelection(language) {
    const isLanguageExist = languages.some(
      (currentLanguage) => currentLanguage.id === language.id
    );
    if (isLanguageExist) return true;

    return false;
  }


  return (
    <div className="dd-wrapper">
      <div
        tabIndex={0}
        className="dd-header"
        role="button"
        onKeyPress={toggle}
        onClick={toggle}
      >
        <div className="dd-header__title">
          <p className="dd-header__title--bold">{title}</p>
        </div>
        <div className="dd-header__action">
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && <ul className="dd-list"> {items.map(renderLanguages)} </ul>}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
