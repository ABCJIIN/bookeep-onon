import React from "react";
import TodayBookItem from "./TodayBookItem";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  width: 100%;
  background-color: pink;
  text-align: center;
`;

const Img = styled.img`
  margin: 10px auto;
  width: 90%;
`;

const UlWrapper = styled.div`
  background-color: #ffffff;

  /* background-color: yellow; */
  width: 330%;
  position: relative;
  margin-left: 5px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TodayBookList = ({ datas, currItem, onView }) => {
  const { img, title } = currItem;

  return (
    <Article className="left">
      <ImgWrapper>
        <Img src={"assets/" + img} alt={title} />
      </ImgWrapper>
      <UlWrapper>
        <Ul>
          {datas.map((item) => (
            <TodayBookItem key={item.id} item={item} onView={onView} />
          ))}
        </Ul>
      </UlWrapper>
    </Article>
  );
};

export default TodayBookList;
