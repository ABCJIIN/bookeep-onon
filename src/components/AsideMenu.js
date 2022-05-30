import React from "react";
import styled from "styled-components";
import Order from "./Order";
import AsideMenuAd from "./AsideMenuAd";

const Base = styled.aside`
  position: absolute;
  right: 0;
  width: 20%;
  height: 100%;
  /* background-color: #f2f2f2; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function AsideMenu() {
  return (
    <Base>
      <AsideMenuAd />
      <Order />
    </Base>
  );
}

export default AsideMenu;
