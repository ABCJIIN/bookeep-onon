import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

import NavMenu from "../components/NavMenu";
import AsideMenu from "../components/AsideMenu";
import AllBook from "../components/AllBook";

const Main = styled.main`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

function LibraryPage() {
  return (
    <>
      <Header />
      <Main>
        <NavMenu />
        <AsideMenu />
        <AllBook />
      </Main>
      <Footer />
    </>
  );
}

export default LibraryPage;
