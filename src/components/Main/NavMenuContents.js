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
  background-color: tomato;
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
  margin 30px 0 30px 50px;
`;

const NavWrapper = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 20px;
  font-weight: 600;

  .icon {
    width: 28px;
    height: 28px;
  }
`;

function NavMenuContents() {
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

export default NavMenuContents;
