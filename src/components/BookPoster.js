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
