import React from "react";
import styled from "styled-components";

const Base = styled.main`
  width: 100%;
  height: 20%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: aqua;
`;

const TodayBookContainer = styled.div``;

const TodayBookMain = styled.div``;

const TodayBookTitle = styled.h1`
  margin: 0 auto;
`;

const TodayBookMainDetail = styled.div``;

const TodayBookContents = styled.div``;

function MainTodayBook() {
  return (
    <Base>
      <Section>
        <TodayBookContainer>
          <TodayBookMain></TodayBookMain>
          <TodayBookTitle>오늘의 책</TodayBookTitle>
          <TodayBookMainDetail></TodayBookMainDetail>
          <TodayBookContents></TodayBookContents>
        </TodayBookContainer>
      </Section>
    </Base>
  );
}

export default MainTodayBook;
