import { Link } from "react-router-dom";
import LogoImgFile from "../assets/logo.png";
import React from "react";
import styled from "styled-components";

const Base = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 55%;
  box-shadow: 0px 3px 8px #f2f2f2;
`;

const HeaderWrapper = styled.div`
  width: 20%;
  height: 200px;
`;

const Logo = styled.div`
  display: inline-block;
  position: absolute;
  top: 25px;
  left: 60px;
`;

const LogoImg = styled.img.attrs({
  src: `${LogoImgFile}`,
})`
  width: 120px;
  opacity: 100%;

  &:hover {
    opacity: 70%;
  }
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
        </HeaderWrapper>
      </Section>
    </Base>
  );
}

export default Header;
