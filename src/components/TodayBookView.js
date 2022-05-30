import React from "react";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  float: right;
  height: 100%;
`;

const H1 = styled.h1`
  margin-left: 20px;
  font-size: 25px;
`;

const H4 = styled.h4`
  font-size: 18px;
  margin: 0 20px;
`;

const Author = styled.p`
  font-size: 14px;
  margin-left: 20px;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin-left: 20px;
`;

const About = styled.div`
  font-size: 14px;
  margin-left: 20px;
  margin-right: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
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
