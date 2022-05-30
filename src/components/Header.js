import { Link } from "react-router-dom";
import LogoImgFile from "../assets/logo.png";
import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook, FaTwitterSquare } from "react-icons/fa";

const Base = styled.header`
  position: relative;
  width: 100%;
  height: 200px;
  background-color: #ffffff;
`;

const Section = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 55%;
  /* box-shadow: 0px 1px 1px #f2f2f2; */
  box-shadow: 0px 3px 5px #cccccc;
`;

const HeaderWrapper = styled.div`
  width: 20%;
  height: 200px;
`;

const Logo = styled.div`
  display: inline-block;
  position: absolute;
  top: 25px;
  left: 60px;
`;

const LogoImg = styled.img.attrs({
  src: `${LogoImgFile}`,
})`
  width: 120px;
  opacity: 100%;

  &:hover {
    opacity: 70%;
  }
`;

const Twitter = styled.div`
  position: absolute;
  display: inline-block;
  right: 410px;
  top: 40px;

  .twitterIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const FaceBook = styled.div`
  position: absolute;
  display: inline-block;
  right: 380px;
  top: 40px;

  .facebookIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const Insta = styled.div`
  position: absolute;
  display: inline-block;
  right: 350px;
  top: 40px;

  .instaIcon {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

const MyPage = styled.div`
  display: inline-block;
  position: absolute;
  right: 240px;
  top: 40px;
`;

const MyPageContent = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  font-size: 14px;
`;

const Join = styled.div`
  display: inline-block;
  position: absolute;
  right: 155px;
  top: 40px;
`;

const JoinContent = styled.a`
  text-decoration: none;
  font-weight: 600;
  color: #000000;
  font-size: 14px;
`;

const Login = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
  top: 15px;
`;

const LoginButton = styled.button`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 10%;
  text-align: center;
  width: 100px;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 35px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 40px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(
    to right,
    #000000,
    #333333,
    #666666,
    #999999
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  &:focus {
    outline: none;
  }
`;

function Header() {
  return (
    <Base>
      <Section>
        <HeaderWrapper>
          <Logo>
            <Link to="/">
              <LogoImg />
            </Link>
          </Logo>
          <Twitter>
            <FaTwitterSquare className="twitterIcon" />
          </Twitter>
          <FaceBook>
            <FaFacebook className="facebookIcon" />
          </FaceBook>
          <Insta>
            <FaInstagram className="instaIcon" />
          </Insta>
          <MyPage>
            <MyPageContent href="#" target="_self">
              마이페이지
            </MyPageContent>
          </MyPage>
          <Join>
            <JoinContent href="#" target="_self">
              회원가입
            </JoinContent>
          </Join>
          <Login>
            <LoginButton>로그인</LoginButton>
          </Login>
        </HeaderWrapper>
      </Section>
    </Base>
  );
}

export default Header;
