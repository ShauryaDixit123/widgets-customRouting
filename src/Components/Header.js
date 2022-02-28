import React from "react";
import Link from "./Link";
function Header() {
  return (
    <div>
      <div
        className="ui secondry pointing menu"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Link href="/search" className="item">
          Search
        </Link>
        <Link href="/dropdown" className="item">
          DropDown
        </Link>
        <Link href="/" className="item">
          Home
        </Link>
      </div>
    </div>
  );
}

export default Header;
