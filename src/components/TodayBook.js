import React, { useState } from "react";
import TodayBookList from "./TodayBookList";
import TodayBookView from "./TodayBookView";
// import TodayBookItem from "./TodayBookItem"
import data from "../assets/api/images";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
`;

const Wrap = styled.div`
  width: 100%;
  /* background-color: brown; */
`;

const TodayBookListWrapper = styled.div`
  width: 30%;
  float: left;
`;

const TodayBookViewWrapper = styled.div`
  width: 70%;
  float: right;
  /* background-color: orange; */
  height: 380px;
  /* position: relative; */
  vertical-align: bottom;
  /* overflow: hidden;
  text-overflow: ellipsis; */
`;

const TodayBook = () => {
  const [datas, setDatas] = useState(data);
  const [currItem, setCurrItem] = useState(datas[0]);

  const onView = (id) => {
    setCurrItem(datas.find((item) => item.id === id));
  };

  return (
    <Base>
      <Section>
        <Wrap className="wrap">
          <TodayBookListWrapper>
            <TodayBookList datas={datas} onView={onView} currItem={currItem} />
          </TodayBookListWrapper>
          <TodayBookViewWrapper>
            <TodayBookView currItem={currItem} />
          </TodayBookViewWrapper>
        </Wrap>
      </Section>
    </Base>
  );
};

export default TodayBook;
