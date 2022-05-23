import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import LogoImgFile from "../assets/logo.png";
import React from "react";
import styled from "styled-components";

const Base = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 300px;
  /* background-color: #af4; */
  background-color: #f2f2f2;
  text-align: center;
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 1200px;
`;

const HeaderWrapper = styled.div``;

const Logo = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const LogoImg = styled.img.attrs({
  src: `${LogoImgFile}`,
})`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 100%;
`;

const SearchForm = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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

function Header() {
  return (
    <Base>
      <Section>
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <LogoImg />
            </Link>
          </Logo>
          <SearchContainer>
            <SearchForm>
              <SearchInput placeholder="제목을 입력하세요." autoFocus />
              <FaSearch className="icon" />
            </SearchForm>
          </SearchContainer>
        </HeaderWrapper>
      </Section>
    </Base>
  );
}

export default Header;

/* <a href="/" target="_self" rel="noreferrer">
  <img src="img/logo.png" alt="logo"></img>
</a> */
