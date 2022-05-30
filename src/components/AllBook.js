import React from "react";
import BookList from "./BookList";
import LiBrary from "../components/LiBrary";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  /* margin: 0 auto; */
  margin: 100px auto auto;
  /* background-color: orange; */
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 20px 10px 10px #f2f2f2;
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
