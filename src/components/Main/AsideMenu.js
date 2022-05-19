import React from "react";
import styled from "styled-components";
import AsideMenuCart from "./AsideMenuCart";

const Base = styled.aside`
  width: 20%;
  float: right;
  margin: 0 auto;
  height: 420px;
  background-color: yellow;
`;

function AsideMenu() {
  return (
    <Base>
      <AsideMenuCart />
    </Base>
  );
}

export default AsideMenu;
