import React, { useState } from "react";
import LanguageTranslate from "./Components/LanguageTranslate";
import Search from "./Components/Search";
import Accordian from "./Components/Accordian";
import DropDown from "./Components/DropDown";
import Route from "./Components/Route";
import Header from "./Components/Header";
const items = [
  {
    title: "What is react",
    content: "React is a front end library of javascript",
  },
  {
    title: "Why do we use react?",
    content:
      "React is a used to develop fast front end Single page applications",
  },
  {
    title: "Who made react?",
    content:
      "React is developed by facebook and is used by facebook till this date!",
  },
];
const options = [
  {
    label: "The color is Red",
    value: "red",
  },
  {
    label: "The color is Green",
    value: "green",
  },
  {
    label: "The color is yellow",
    value: "yellow",
  },
];

function App() {
  const [selectedColor, setselectedColor] = useState(options[0]);

  const showAccordian = () => {
    if (window.location.pathname === "/") {
      return <Accordian items={items} />;
    }
  };
  const showList = () => {
    if (window.location.pathname === "/list") {
      return <DropDown options={options} />;
    }
  };

  const showSearch = () => {
    if (window.location.pathname === "/search") {
      return <Search />;
    }
  };

  return (
    <div>
      <Header />
      <Route path={"/"}>
        <Accordian items={items} />
      </Route>
      <Route path={"/dropdown"}>
        <DropDown
          label={"Selet the color"}
          options={options}
          selectedOption={selectedColor}
          selectedOptionChange={setselectedColor}
        />
      </Route>
      <Route path={"/search"}>
        <Search />
      </Route>
    </div>
  );
}
export default App;
