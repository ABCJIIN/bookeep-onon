import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import styled from "styled-components";
import useBooks from "../hooks/useBooks";
import BookList from "./BookList";

const LiBrary = () => {
  const { searchBook } = useBooks();
  const [text, setText] = useState("");

  const onEnter = (e) => {
    if (e.keyCode === 13) {
      searchBook(text);
    }
  };

  const onTextUpdate = (e) => {
    setText(e.target.value);
  };

  return (
    <LiBraryWrapper>
      <h1 className="title">LIBRARY</h1>
      <div className="searchBox">
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          name="query"
          onKeyDown={onEnter}
          onChange={onTextUpdate}
          value={text}
          className="input_search"
        />
        <FaSearch className="icon" />
      </div>
      <BookListWrapper>
        <BookList />
      </BookListWrapper>
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
    font-size: 40px;
    margin-top: 0px;
    padding-top: 50px;
    padding-bottom: 20px;
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
    margin-bottom: 30px;
    width: 80%;
    height: 40px;
    border-style: solid;
    border-width: 1px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: 400;
    padding: 0;
    text-indent: 20px;
    box-shadow: 3px 3px 20px 3px #eeeeee;
  }
  .icon {
    font-size: 22px;
    position: relative;
    left: -40px;
    top: 5px;
  }
`;

const BookListWrapper = styled.ul`
  margin: 0 auto;
  padding: 0 0 40px 0;
  width: 100%;
`;

export default LiBrary;
