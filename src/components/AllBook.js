import React from "react";
import BookList from "./BookList";
import LiBrary from "../components/LiBrary";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  /* box-shadow: 15px 10px 10px #cccccc; */
  box-shadow: 3px 3px 20px 3px #dddddd;
  min-height: 800px;
`;

const AllBook = () => {
  return (
    <>
      <Base>
        <LiBrary>
          <BookList />
        </LiBrary>
      </Base>
    </>
  );
};

export default AllBook;
