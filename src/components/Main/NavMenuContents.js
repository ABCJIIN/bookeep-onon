import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.nav`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  /* background-color: tomato; */
  display: flex;
  justify-content: center;
`;

const NavMenuList = styled.div`
  width: 80%;
  background: #ffffff;
`;

const NavContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavWrapper = styled.li`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  padding: 30px 0 30px 20px;
  margin: 40px auto;
  text-align: center;
  width: 60%;
  box-sizing: border-box;
  border-radius: 50px;
  /* background-size: 0; */
  transition-duration: 1s;
  transition-property: width, background-color;

  .icon {
    width: 28px;
    height: 28px;
    position: absolute;
  }

  &:hover {
    background-color: #acdcff;
    width: 100%;
    text-align: center;
  }
`;

function NavMenuContents() {
  return (
    <Base>
      <Section>
        <NavMenuList>
          <NavContainer>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <NavWrapper>
                베스트셀러
                <FaAngleRight className="icon" />
              </NavWrapper>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <NavWrapper>
                신간 전체
                <FaAngleRight className="icon" />
              </NavWrapper>
            </Link>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              <NavWrapper>
                주목할 만한 신간
                <FaAngleRight className="icon" />
              </NavWrapper>
            </Link>
          </NavContainer>
        </NavMenuList>
      </Section>
    </Base>
  );
}

export default NavMenuContents;
