import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import styled from "styled-components";
import useBooks from "../hooks/useBooks";
import BookList from "./BookList";

const LiBrary = () => {
  const { searchBook } = useBooks();
  const [text, setText] = useState("");

  // 엔터를 눌렀을 때 호출되는 함수
  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  };
  // text 검색어가 바뀔 때 호출되는 함수
  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  return (
    <LiBraryWrapper>
      <h1 className="title">LIBRARY</h1>
      <div className="searchBox">
        <input
          type="search"
          placeholder="검색어를 입력해 주세요."
          name="query"
          onKeyDown={onEnter} // enter
          onChange={onTextUpdate} // change
          value={text} // view
          className="input_search"
        />
        <FaSearch className="icon" />
      </div>
      <ul>
        <BookList />
      </ul>
    </LiBraryWrapper>
  );
};
const LiBraryWrapper = styled.div`
  width: 100%;
  margin: 0 auto;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
  }
  .books {
    display: flex;
  }
  .searchBox {
    position: relative;
    width: 100%;
    text-align: center;
  }
  .input_search {
    width: 50%;
    height: 40px;
    border-style: solid;
    border-width: 1px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    text-indent: 20px;
  }
  .icon {
    font-size: 22px;
    position: relative;
    left: -40px;
    top: 2px;
  }
`;

export default LiBrary;
