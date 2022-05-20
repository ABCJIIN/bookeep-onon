import React from "react";
import styled from "styled-components";
import AsideMenuCart from "./AsideMenuCart";
import AsideMenuAd from "./AsideMenuAd";

const Base = styled.aside`
  width: 20%;
  float: right;
  margin: 0 auto;
  height: 1200px;
  background-color: yellow;
`;

function AsideMenu() {
  return (
    <Base>
      <AsideMenuCart />
      <AsideMenuAd />
    </Base>
  );
}

export default AsideMenu;
