import GreyLogoImgFile from "../assets/logo.png";
import React from "react";
import styled from "styled-components";

const Base = styled.footer`
  width: 100%;
  display: block;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Section = styled.section``;

const Empty = styled.section`
  height: 20px;
`;

const EmptyUnderHr = styled.hr`
  border: dashed 1px #e3e3e3;
  text-align: center;
  width: 90%;
`;

const Top = styled.section`
  width: 100%;
  height: 20px;
  line-height: 20px;
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
  color: #999999;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  vertical-align: top;
  cursor: pointer;
  &:not(:last-of-type) {
    &:after {
      content: "";
      display: inline-block;
      background: #d1d1d1;
      vertical-align: top;
      width: 1.8px;
      height: 16px;
      margin: 0 8px;
    }
  }
`;

const TopUnderHr = styled.hr`
  border: dashed 1px #e3e3e3;
  text-align: center;
  width: 26.5%;
`;

const Bottom = styled.section``;

const Left = styled.section`
  width: 50%;
  height: 180px;
  float: left;
  display: flex;
  justify-content: right;
  align-items: center;
  &:after {
    content: "";
    border-right: dashed 2px #e3e3e3;
    height: 130px;
    margin-bottom: 20px;
  }
`;

const CompanyTitle = styled.div`
  height: 140px;
  text-align: right;
  padding-right: 40px;
`;

const CompanyTitleLogo = styled.img.attrs({
  src: `${GreyLogoImgFile}`,
})`
  width: 50%;
  opacity: 40%;
`;

const Br = styled.br``;

const CompanyTitleText = styled.div`
  color: #a9a9a9;
  font-size: 16px;
  padding-top: 10px;
`;

const Right = styled.section`
  width: 50%;
  height: 180px;
  float: right;
  display: flex;
  justify-content: left;
`;

const CompanyInfo = styled.div`
  padding-left: 40px;
  padding-top: 20px;
`;

const CompanyInfoName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #a9a9a9;
  padding-bottom: 10px;
`;

const CompanyInfoDetails = styled.div`
  font-size: 12px;
  color: #a9a9a9;
`;

function Footer() {
  return (
    <Base>
      <Section>
        <Empty></Empty>
        <EmptyUnderHr />
        <Top>
          <TermsOfService>
            <TermsOfServiceItem>????????????</TermsOfServiceItem>
            <TermsOfServiceItem>????????????</TermsOfServiceItem>
            <TermsOfServiceItem>????????????????????????</TermsOfServiceItem>
            <TermsOfServiceItem>?????????????????????</TermsOfServiceItem>
            <TermsOfServiceItem>????????????</TermsOfServiceItem>
          </TermsOfService>
        </Top>
        <TopUnderHr />
        <Bottom>
          <Left>
            <CompanyTitle>
              <CompanyTitleLogo />
              <Br />
              <CompanyTitleText>????????? ????????? ??????</CompanyTitleText>
            </CompanyTitle>
          </Left>
          <Right>
            <CompanyInfo>
              <CompanyInfoName>(???)???????????????</CompanyInfoName>
              <CompanyInfoDetails>
                ??????????????? ????????? 00??? 000?????? 00-00
                <Br />
                ?????? : ????????? bookeepononhelp@bookeeponon.com
                <Br />
                ????????????????????? : 000-00-00000 ????????????????????? : ??? 0000-00000???
                <Br />
                ????????? ?????????????????? : (???)???????????????
                <Br />
                Copyright ??? bookeeponon Crop. All Rights Reserved.
              </CompanyInfoDetails>
            </CompanyInfo>
          </Right>
        </Bottom>
      </Section>
    </Base>
  );
}

export default Footer;
