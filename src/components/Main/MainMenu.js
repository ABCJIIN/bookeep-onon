import React from "react";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  height: 1200px;
  background-color: orange;
  text-align: center;
`;

const Section = styled.section``;

function MainMenu() {
  return (
    <>
      <Base>
        <Section></Section>
      </Base>
    </>
  );
}

export default MainMenu;
