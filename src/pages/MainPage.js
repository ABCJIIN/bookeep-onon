import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

import NavMenu from "../components/NavMenu";
import AsideMenu from "../components/AsideMenu";
import TodayBookContainer from "../containers/TodayBookContainer";
import AllBookContainer from "../containers/AllBookContainer";

const Main = styled.main`
  /* margin: 0 auto; */
`;

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <NavMenu />
        <AsideMenu />
        <TodayBookContainer />
        <AllBookContainer />
      </Main>
      <Footer />
    </>
  );
}

export default MainPage;
