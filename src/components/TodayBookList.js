import React from "react";
import TodayBookItem from "./TodayBookItem";
import styled from "styled-components";

const Base = styled.main`
  width: 100%;
  margin: 0 auto;
  height: 450px;
  background-color: #ffffff;
`;

const Section = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
`;

const Article = styled.article``;

const ImgWrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
  width: 200px;
`;

const UlWrapper = styled.div`
  width: 1000px;
  height: 200px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
`;

const TodayBookList = ({ datas, currItem, onView }) => {
  const { img, title } = currItem;

  return (
    <Base>
      <Section>
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
      </Section>
    </Base>
  );
};

export default TodayBookList;
