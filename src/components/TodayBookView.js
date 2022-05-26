import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  float: right;
  height: 100%;
`;

const H1 = styled.h1`
  margin-left: 10px;
  font-size: 25px;
`;

const H4 = styled.h4`
  font-size: 18px;
  margin: 0 12px;
`;

const Author = styled.p`
  font-size: 12px;
  margin-left: 12px;
`;

const Price = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-left: 12px;
`;

const About = styled.p`
  font-size: 13px;
  margin: auto 12px;
`;

const TodayBookView = ({ currItem }) => {
  const { title, author, publisher, price, about } = currItem;
  return (
    <Article className="author">
      <H1>오늘의 책</H1>
      <H4>{title}</H4>
      <Author>
        {author} / {publisher}
      </Author>
      <Price>{price}</Price>
      <About>{about}</About>
    </Article>
  );
};

export default TodayBookView;
