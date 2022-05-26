import React, { useState } from "react";
import TodayBookList from "./TodayBookList";
import TodayBookView from "./TodayBookView";
import data from "../assets/api/images";
import styled from "styled-components";

const Base = styled.main`
  width: 60%;
  margin: 0 auto;
  height: 450px;
  background-color: #ffffff;
`;

const Section = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
`;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
`;

const TodayBookListWrapper = styled.div`
  width: 30%;
  height: 450px;
  background-color: brown;
  float: left;
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
          <TodayBookView currItem={currItem} />
        </Wrap>
      </Section>
    </Base>
  );
};

export default TodayBook;
