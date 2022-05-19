import { FaCartArrowDown } from "react-icons/fa";
import React from "react";
import styled from "styled-components";

const Base = styled.aside`
  width: 100%;
  height: 100%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f2f;
  display: flex;
  justify-content: center;
`;

const AsideMenuList = styled.div`
  width: 80%;
  background: red;
`;

const CartContainer = styled.div``;

const CartWrapper = styled.div``;

const AdContainer = styled.div`
  background: skyblue;
`;

const AdWrapper = styled.div``;

function AsideMenuAd() {
  return (
    <Base>
      <Section>
        <AsideMenuList>
          <CartContainer>
            <CartWrapper>
              장바구니에 담은 상품이 없습니다.
              <FaCartArrowDown />
            </CartWrapper>
          </CartContainer>
          <AdContainer>
            <AdWrapper>더 많은 책 구경하러 가기</AdWrapper>
          </AdContainer>
        </AsideMenuList>
      </Section>
    </Base>
  );
}

export default AsideMenuAd;
