import React from "react";
import styled from "styled-components";
import NavMenuContents from "./NavMenuContents";

const Base = styled.nav`
  width: 20%;
  float: left;
  margin: 0 auto;
  height: 420px;
  background-color: green;
`;

function NavMenu() {
  return (
    <Base>
      <NavMenuContents />
    </Base>
  );
}

export default NavMenu;
