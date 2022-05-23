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
  padding: 20px 0 20px 20px;
  margin: 40px auto;
  width: 80%;
  box-sizing: border-box;
  border-radius: 50px;

  .icon {
    width: 28px;
    height: 28px;
    position: absolute;
  }

  &:after {
    background: none repeat scroll 0 0 transparent;
    content: "";
    background-color: #acdcff;
    position: absolute;
    width: 80%;
    box-sizing: border-box;
    border-radius: 50px;
    width: 0;
    height: 100%;
    left: 50%;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
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
