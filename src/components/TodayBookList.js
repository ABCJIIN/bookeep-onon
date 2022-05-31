import React from "react";
import TodayBookItem from "./TodayBookItem";
import styled from "styled-components";

const Article = styled.article`
  width: 100%;
  height: 100%;
`;

const ImgWrapper = styled.div`
  width: 100%;
  text-align: center;
`;

const Img = styled.img`
  margin: 40px auto;
  width: 70%;
  /* box-shadow: 10px 10px 10px 10px #eeeeee; */
  box-shadow: 8px 8px 8px #666666;
`;

const UlWrapper = styled.div`
  background-color: #ffffff;
  width: 330%;
  position: relative;
  margin-left: 5px;
`;

const Ul = styled.ul`
  margin: 20px auto;
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
