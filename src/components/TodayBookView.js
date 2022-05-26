import React from "react";
import styled from "styled-components";

const Article = styled.article``;

const H3 = styled.h3``;

const P = styled.p``;

const TodayBookView = ({ currItem }) => {
  const { title, author, publisher, price, about } = currItem;
  return (
    <Article className="author">
      <H3>{title}</H3>
      <P>{author}</P>
      <P>{publisher}</P>
      <P>{price}</P>
      <P>{about}</P>
    </Article>
  );
};

export default TodayBookView;
