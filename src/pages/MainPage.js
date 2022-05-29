import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

import NavMenu from "../components/NavMenu";
import AsideMenu from "../components/AsideMenu";
import TodayBook from "../components/TodayBook";
import AllBook from "../components/AllBook";

const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  /* height: 1200px; */
`;

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <NavMenu />
        <AsideMenu />
        <TodayBook />
        <AllBook />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
