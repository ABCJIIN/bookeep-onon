import React from "react";
import styled from "styled-components";

const Base = styled.main`
  width: 100%;
  height: 80%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: gray;
`;

function MainMenuContents() {
  return (
    <Base>
      <Section></Section>
    </Base>
  );
}

export default MainMenuContents;
