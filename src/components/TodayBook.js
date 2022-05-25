import FineDustSrc from "../assets/finedust.png";
import ScissorsSrc from "../assets/scissors.png";
import CaptainHoneySrc from "../assets/captainhoney.png";
import CocktailSrc from "../assets/cocktail.png";
import FridaySrc from "../assets/friday.png";
import PunchSrc from "../assets/punch.png";

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

const SelectBookContainer = styled.div`
  width: 30%;
  height: 400px;
  background-color: brown;
  display: flex;
  align-items: center;
`;

const SelectBook = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 350px;
  background-color: green;
`;

const BookDetailContainer = styled.div`
  background-color: pink;
  width: 70%;
  height: 400px;
`;

const BookDetail = styled.div`
  width: 100%;
  height: 200px;
`;

const TodayBookTitle = styled.h1`
  font-size: 30px;
  margin: 0 auto;
`;

const TodayBookMainDetail = styled.div``;

const TodayBookContents = styled.div``;

const BookPosterContainer = styled.div`
  background-color: yellow;
  width: 100%;
  height: 200px;
`;

const BookPosters = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const BookPosterWrapper = styled.li``;

const FineDust = styled.img`
  width: 80%;
`;

const Scissors = styled.img`
  width: 80%;
`;

const CaptainHoney = styled.img`
  width: 80%;
`;

const Cocktail = styled.img`
  width: 80%;
`;

const Friday = styled.img`
  width: 80%;
`;

const Punch = styled.img`
  width: 80%;
`;

function TodayBook() {
  return (
    <Base>
      <Section>
        <SelectBookContainer>
          <SelectBook></SelectBook>
        </SelectBookContainer>
        <BookDetailContainer>
          <BookDetail>
            <TodayBookTitle>오늘의 책</TodayBookTitle>
            <TodayBookMainDetail></TodayBookMainDetail>
            <TodayBookContents></TodayBookContents>
          </BookDetail>
          <BookPosterContainer>
            <BookPosters>
              <BookPosterWrapper>
                <FineDust src={FineDustSrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Scissors src={ScissorsSrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <CaptainHoney src={CaptainHoneySrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Cocktail src={CocktailSrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Friday src={FridaySrc} />
              </BookPosterWrapper>
              <BookPosterWrapper>
                <Punch src={PunchSrc} />
              </BookPosterWrapper>
            </BookPosters>
          </BookPosterContainer>
        </BookDetailContainer>
      </Section>
    </Base>
  );
}

export default TodayBook;
