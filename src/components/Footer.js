import React from "react";
import styled from "styled-components";

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Section = styled.section`
  background-color: #f2f2f2;
`;

const Empty = styled.section`
  height: 40px;
`;

const EmptyUnderHr = styled.hr`
  border: dashed 1px #a9a9a9;
  text-align: center;
  width: 80%;
`;

const Top = styled.section`
  width: 100%;
  height: 40px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TermsOfService = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TermsOfServiceItem = styled.li`
  display: inline-block;
  color: #333333;
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #848485;
      vertical-align: top;
      width: 2px;
      height: 16px;
      margin: 0 8px;
    }
  }
`;

const TopUnderHr = styled.hr`
  border: dashed 1px #a9a9a9;
  text-align: center;
  width: 26.5%;
`;

const Bottom = styled.section`
  height: 200px;
`;

const Left = styled.section`
  width: 50%;
  height: 200px;
`;

const CompanyTitle = styled.div`
  height: 160px;
  border-right: dashed 2px #a9a9a9;
`;

const CompanyTitleLogo = styled.img``;

const CompanyTitleText = styled.p``;

function Footer() {
  return (
    <Base>
      <Section>
        <Empty></Empty>
        <EmptyUnderHr />
        <Top>
          <TermsOfService>
            <TermsOfServiceItem>회사소개</TermsOfServiceItem>
            <TermsOfServiceItem>이용약관</TermsOfServiceItem>
            <TermsOfServiceItem>개인정보처리방침</TermsOfServiceItem>
            <TermsOfServiceItem>청소년보호정책</TermsOfServiceItem>
            <TermsOfServiceItem>중고매장</TermsOfServiceItem>
          </TermsOfService>
        </Top>
        <TopUnderHr />
        <Bottom>
          <Left>
            <CompanyTitle>
              <CompanyTitleLogo
                src="/img/grey_logo.png"
                alt="grey_logo"
              ></CompanyTitleLogo>
              <CompanyTitleText>새로운 인터넷 서점</CompanyTitleText>
            </CompanyTitle>
          </Left>
          {/* <Right>
          <CompanyInfo>
            <CompanyInfoName>(주)북킵온앤온</CompanyInfoName>
            <CompanyInfoDetails>
              인천광역시 계양구 마장로 대표 : 정지인 개인정보보호책임자: 정지인
              bookeepononhelp@bookeeponon.com 사업자등록번호 : 000-00-00000
              통신판매업신고 : 제 0000-00000호 사업자 정보확인 호스팅 서비스업자
              : (주)북킵온앤온 Copyright ⓒ bookeeponon Crop. All Rights
              Reserved.
            </CompanyInfoDetails>
          </CompanyInfo>
        </Right> */}
        </Bottom>
      </Section>
    </Base>
  );
}

export default Footer;
