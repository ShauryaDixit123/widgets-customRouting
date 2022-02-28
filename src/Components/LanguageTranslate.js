import React, { useState } from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";

const langOpt = [
  {
    label: "hindi",
    value: "hi",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "afrikaans",
    value: "af",
  },
];

function LanguageTranslate() {
  const [selectedLang, setSelectedLang] = useState(langOpt[0]);
  const [text, setText] = useState("");
  const onButtonClick = (e) => {
    console.log(text);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="translate it!"
          ></input>
          <button
            onClick={(e) => {
              onButtonClick(e);
            }}
          >
            Translate
          </button>
        </div>
      </div>
      <DropDown
        options={langOpt}
        selectedOption={selectedLang}
        selectedOptionChange={setSelectedLang}
        label={"select the language!"}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={selectedLang} />
    </div>
  );
}
export default LanguageTranslate;
