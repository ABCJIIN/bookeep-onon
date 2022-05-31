import YesLogoSrc from "../assets/yes24.png";
import AladinLogoSrc from "../assets/aladin.png";
import KyoboLogoSrc from "../assets/kyobo.png";
import MillieLogoSrc from "../assets/millie.png";
import { FaDoorOpen } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.aside`
  width: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

const AdContainer = styled.div`
  width: 80%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 10px;
  /* box-shadow: 15px 10px 10px #cccccc; */
  box-shadow: 3px 3px 20px 3px #dddddd;
`;

const AdTitle = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 15px;

  .icon {
    width: 22px;
    height: 22px;
    padding-left: 10px;
  }
`;

const AdPageContainer = styled.ul`
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const AdPageWrapper = styled.li`
  width: 100%;
  text-align: center;
`;

const YesLogo = styled.img`
  width: 50%;
  margin: 15px auto;
  opacity: 100%;
  &:hover {
    opacity: 70%;
  }
`;
const YesLink = styled.a``;

const AladinLogo = styled.img`
  width: 50%;
  margin: 15px auto;
  &:hover {
    opacity: 70%;
  }
`;

const AladinLink = styled.a``;

const KyoboLogo = styled.img`
  width: 40%;
  margin: 15px auto;
  &:hover {
    opacity: 70%;
  }
`;

const KyoboLink = styled.a``;

const MillieLogo = styled.img`
  width: 45%;
  margin: 15px auto;
  &:hover {
    opacity: 70%;
  }
`;

const MillieLink = styled.a``;

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
              <YesLink
                href="http://www.yes24.com/main/default.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <YesLogo src={YesLogoSrc} />
              </YesLink>
            </AdPageWrapper>
            <AdPageWrapper>
              <AladinLink
                href="https://www.aladin.co.kr/home/welcome.aspx"
                target="_blank"
                rel="noreferrer"
              >
                <AladinLogo src={AladinLogoSrc} />
              </AladinLink>
            </AdPageWrapper>
            <AdPageWrapper>
              <KyoboLink
                href="http://www.kyobobook.co.kr/index.laf"
                target="_blank"
                rel="noreferrer"
              >
                <KyoboLogo src={KyoboLogoSrc} />
              </KyoboLink>
            </AdPageWrapper>
            <AdPageWrapper>
              <MillieLink
                href="https://www.millie.co.kr/v3/brand/update#intro"
                target="_blank"
                rel="noreferrer"
              >
                <MillieLogo src={MillieLogoSrc} />
              </MillieLink>
            </AdPageWrapper>
          </AdPageContainer>
        </AdContainer>
      </Section>
    </Base>
  );
}

export default AsideMenuAd;
