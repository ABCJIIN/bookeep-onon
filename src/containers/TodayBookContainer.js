import React from "react";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  height: 400px;
  background-color: #ffffff;
`;

const Section = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
`;

const TodayBooksContainer = styled.div`
  display: inline-block;
  width: 30%;
  height: 400px;
`;

const TodayBookMain = styled.div`
  display: inline-block;
  width: 280px;
  height: 350px;
  background-color: brown;
  margin-top: 25px;
  margin-left: 25px;
`;

const BookDetail = styled.div`
  width: 70%;
  height: 400px;
`;

const TodayBookTitle = styled.h1`
  font-size: 30px;
`;

const TodayBookMainDetail = styled.div``;

const TodayBookContents = styled.div``;

function TodayBookContainer() {
  return (
    <Base>
      <Section>
        <TodayBooksContainer>
          <TodayBookMain></TodayBookMain>
        </TodayBooksContainer>
        <BookDetail>
          <TodayBookTitle>오늘의 책</TodayBookTitle>
          <TodayBookMainDetail></TodayBookMainDetail>
          <TodayBookContents></TodayBookContents>
        </BookDetail>
      </Section>
    </Base>
  );
}

export default TodayBookContainer;
