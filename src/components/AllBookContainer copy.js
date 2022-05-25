import { FaSearch } from "react-icons/fa";
import React from "react";
import styled from "styled-components";
// import Test from "./Test";

const Base = styled.main`
  width: 100%;
  height: 1000px;
  /* margin: 0 auto; */
  /* background-color: #ffffff; */
  /* margin-top: 100px; */
  background-color: aqua;
  /* display: flex; */
`;

const Section = styled.section`
  width: 100%;
  height: 1000px;
`;

const AllBooksContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const AllBookTitle = styled.h2``;

const SearchForm = styled.form`
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */

  .icon {
    font-size: 22px;
    position: relative;
    left: -40px;
  }
`;

const SearchInput = styled.input`
  width: 1000px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 400;
  padding: 0;
  text-indent: 20px;
`;

function AllBookContainer() {
  return (
    <Base>
      <Section>
        <AllBooksContainer>
          <AllBookTitle>Library</AllBookTitle>
        </AllBooksContainer>
        <SearchContainer>
          <SearchForm>
            <SearchInput placeholder="제목을 입력하세요." autoFocus />
            <FaSearch className="icon" />
          </SearchForm>
        </SearchContainer>
        {/* <Test /> */}
      </Section>
    </Base>
  );
}

export default AllBookContainer;
