import React from "react";
import styled from "styled-components";

const TodayBook = styled.section`
  width: 100%;
  height: 220px;
`;

function BookAbout({ bookabout }) {
  return (
    <TodayBook>
      <h4>제목 : {bookabout.title}</h4>
      <h4>저자 : {bookabout.author}</h4>
      <h4>출판사 : {bookabout.publisher}</h4>
      <h4>가격: {bookabout.price}</h4>
      <h4>소개: {bookabout.about}</h4>
    </TodayBook>
  );
}

export default BookAbout;
