import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <header>
      <div className="logo">
        <a href="/" target="_self" rel="noreferrer">
          <img src="img/logo.png" alt="logo"></img>
        </a>
      </div>
      <div className="search">
        <form>
          <input type="text" placeholder="제목을 입력하세요." autoFocus></input>
        </form>
      </div>
    </header>
  );
}

export default Header;
