import { FaAngleRight } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.nav`
  width: 30%;
  float: left;
  margin: 0 auto;
  height: 100%;
  background-color: #f2f2f2;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const NavMenuList = styled.div`
  width: 300px;
  height: 100%;
  background: #ffffff;
  margin-left: 50px;
`;

const NavContainer = styled.ul`
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const NavWrapper = styled.li`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  margin-left: 50px;

  .icon {
    width: 28px;
    height: 28px;
  }
`;

function NavMenu() {
  return (
    <Base>
      <Section>
        <NavMenuList>
          <NavContainer>
            <NavWrapper>
              베스트셀러
              <FaAngleRight className="icon" />
            </NavWrapper>
            <NavWrapper>
              신간 전체
              <FaAngleRight className="icon" />
            </NavWrapper>
            <NavWrapper>
              주목할 만한 신간
              <FaAngleRight className="icon" />
            </NavWrapper>
          </NavContainer>
        </NavMenuList>
      </Section>
    </Base>
  );
}

export default NavMenu;
