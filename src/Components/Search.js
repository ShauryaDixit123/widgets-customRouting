import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayResults from "./displayResults";

const Search = function () {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);

  const getQuerySearch = async () => {
    const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: text,
      },
    });
    setResult(data);
  };

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      getQuerySearch();
    }, 500);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [text]);

  return (
    <div className="ui form">
      <form>
        <h3>Search here!</h3>
        <input
          className="input"
          style={{ width: "20rem" }}
          type="text"
          placeholder="Search for wikipedia"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </form>
      <DisplayResults list={result} />
    </div>
  );
};
export default Search;
