import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

import NavMenu from "../components/NavMenu";
import AsideMenuAd from "../components/AsideMenuAd";
import TodayBook from "../components/TodayBook";

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const AsideMenuAdWrapper = styled.aside`
  position: absolute;
  right: 0;
  width: 20%;
  height: 100%;
  display: flex;
`;

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <NavMenu />
        <AsideMenuAdWrapper>
          <AsideMenuAd />
        </AsideMenuAdWrapper>
        <TodayBook />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
