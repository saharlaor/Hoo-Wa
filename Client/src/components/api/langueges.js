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

export default switchCode;
