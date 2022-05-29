import { Link } from "react-router-dom";
import LogoImgFile from "../assets/logo.png";
import React from "react";
import styled from "styled-components";

const Base = styled.header`
  width: 100%;
  margin: 0 auto;
  height: 250px;
  /* background-color: #af4; */
  background-color: #f2f2f2;
  /* background-color: #111111; */
  text-align: center;
`;

const Section = styled.section`
  margin: 0 auto;
  max-width: 1200px;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  width: 100%;
  height: 200px;
  line-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img.attrs({
  src: `${LogoImgFile}`,
})`
  display: flex;
  justify-content: center;
  align-items: center;
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
