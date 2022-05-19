import React from "react";
import styled from "styled-components";

const Base = styled.aside`
  width: 30%;
  float: right;
  margin: 0 auto;
  height: 100%;
  background-color: #f2f2f2;
  text-align: center;
`;

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
`;

const AsideMenuList = styled.div`
  width: 300px;
  height: 100%;
  background: #ffffff;
`;

const CartContainer = styled.div`
  width: 100%;
  height: 300px;
`;

const CartWrapper = styled.div``;

const AdContainer = styled.div``;

const AdWrapper = styled.div``;

function AsideMenu() {
  return (
    <Base>
      <Section>
        <AsideMenuList>
          <CartContainer>
            <CartWrapper>장바구니에 담은 상품이 없습니다.</CartWrapper>
          </CartContainer>
          <AdContainer>
            <AdWrapper>더 많은 책 구경하러 가기</AdWrapper>
          </AdContainer>
        </AsideMenuList>
      </Section>
    </Base>
  );
}

export default AsideMenu;
