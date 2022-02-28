import React from "react";

function DisplayResults({ list }) {
  console.log(list.query?.search);
  const data = list.query?.search.map((item) => {
    return (
      <div key={item.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${item.pageid}`}
          >
            GO!
          </a>
        </div>
        <div className="content">
          <div className="header">
            <div>{item.title}</div>
            <span dangerouslySetInnerHTML={{ __html: item.snippet }}></span>
          </div>
        </div>
      </div>
    );
  });
  return <div className="ui celled list">{data}</div>;
}
export default DisplayResults;
