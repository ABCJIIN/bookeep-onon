import React, { useState } from "react";
import TodayBookList from "./TodayBookList";
import TodayBookView from "./TodayBookView";
import data from "../assets/api/images";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 3px 20px 3px #dddddd;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
`;

const Wrap = styled.div`
  width: 100%;
`;

const TodayBookListWrapper = styled.div`
  width: 30%;
  float: left;
`;

const TodayBookViewWrapper = styled.div`
  width: 70%;
  float: right;
  height: 380px;
  vertical-align: bottom;
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
