import React from "react";
import styled from "styled-components";
import MainTodayBook from "./MainTodayBook";
import MainMenuContents from "./MainMenuContents";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  height: 1800px;
  background-color: orange;
  text-align: center;
`;

function MainMenu() {
  return (
    <>
      <Base>
        <MainTodayBook />
        <MainMenuContents />
      </Base>
    </>
  );
}

export default MainMenu;
