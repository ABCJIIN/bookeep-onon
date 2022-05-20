import YesLogoSrc from "../../assets/yes24.png";
import AladinLogoSrc from "../../assets/aladin.png";
import KyoboLogoSrc from "../../assets/kyobo.png";
import MillieLogoSrc from "../../assets/millie.png";
import { FaDoorOpen } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.aside`
  width: 100%;
  height: 50%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: skyblue;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const AdContainer = styled.div`
  width: 300px;
  height: 450px;
  background: red;
`;

const AdTitle = styled.div`
  width: 100%;
  height: 50px;
  font-size: 18px;
  text-align: center;

  .icon {
    width: 22px;
    height: 22px;
    padding-left: 10px;
  }
`;

const AdPageContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AdPageWrapper = styled.li`
  width: 100%;
  text-align: center;
`;

const YesLogo = styled.img`
  width: 80%;
`;

const AladinLogo = styled.img`
  width: 65%;
`;

const KyoboLogo = styled.img`
  width: 50%;
`;

const MillieLogo = styled.img`
  width: 60%;
`;

function AsideMenuAd() {
  return (
    <Base>
      <Section>
        <AdContainer>
          <AdTitle>
            더 많은 책 구경하러 가기
            <FaDoorOpen className="icon" />
          </AdTitle>
          <AdPageContainer>
            <AdPageWrapper>
              <YesLogo src={YesLogoSrc} />
            </AdPageWrapper>
            <AdPageWrapper>
              <AladinLogo src={AladinLogoSrc} />
            </AdPageWrapper>
            <AdPageWrapper>
              <KyoboLogo src={KyoboLogoSrc} />
            </AdPageWrapper>
            <AdPageWrapper>
              <MillieLogo src={MillieLogoSrc} />
            </AdPageWrapper>
          </AdPageContainer>
        </AdContainer>
      </Section>
    </Base>
  );
}

export default AsideMenuAd;
