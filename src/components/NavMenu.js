import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.nav`
  position: absolute;
  width: 20%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const NavMenuList = styled.div`
  width: 80%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 3px 3px 20px 3px #dddddd;
`;

const NavContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavWrapper = styled.li`
  font-size: 18px;
  font-weight: 600;
  position: relative;
  padding: 30px 0 30px 0;
  margin: 40px auto;
  width: 60%;
  box-sizing: border-box;
  border-radius: 50px;
  transition-duration: 0.5s;
  transition-property: width, background-color;

  .icon {
    width: 26px;
    height: 26px;
    position: absolute;
    padding-left: 10px;
  }

  &:hover {
    background-color: #acdcff;
    width: 90%;
    padding-left: 30px;
  }
`;

function NavMenu() {
  return (
    <Base>
      <Section>
        <NavMenuList>
          <NavContainer>
            <Link
              // to={`/${process.env.REACT_APP_HOST}`}
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavWrapper>
                오늘의책
                <FaAngleRight className="icon" />
              </NavWrapper>
            </Link>
            <Link
              to="/library"
              style={{ textDecoration: "none", color: "black" }}
            >
              <NavWrapper>
                도서검색
                <FaAngleRight className="icon" />
              </NavWrapper>
            </Link>
          </NavContainer>
        </NavMenuList>
      </Section>
    </Base>
  );
}

export default NavMenu;
