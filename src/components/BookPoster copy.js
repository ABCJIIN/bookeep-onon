// import FineDustSrc from "../assets/finedust.png";
// import ScissorsSrc from "../assets/scissors.png";
// import CaptainHoneySrc from "../assets/captainhoney.png";
// import CocktailSrc from "../assets/cocktail.png";
// import FridaySrc from "../assets/friday.png";
// import PunchSrc from "../assets/punch.png";

import React from "react";
import styled from "styled-components";

const TodayBook = styled.section`
  width: 100%;
  height: 100%;
`;

const PosterWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PosterSrc = styled.img`
  width: 100%;
  height: 100%;
`;

function BookPoster({ bookposter }) {
  return (
    <TodayBook>
      <PosterWrapper>
        <PosterSrc src={bookposter.poster} alt="포스터" />
      </PosterWrapper>
    </TodayBook>
  );
}

export default BookPoster;
