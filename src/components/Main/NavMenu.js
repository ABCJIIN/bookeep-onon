import React from "react";
import styled from "styled-components";
import NavMenuContents from "./NavMenuContents";

const Base = styled.nav`
  width: 20%;
  float: left;
  margin: 0 auto;
  height: 1800px;
  /* background-color: green; */
  background-color: #f2f2f2;
`;

function NavMenu() {
  return (
    <Base>
      <NavMenuContents />
    </Base>
  );
}

export default NavMenu;
