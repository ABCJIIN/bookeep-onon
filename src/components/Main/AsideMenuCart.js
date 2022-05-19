import React from "react";
import styled from "styled-components";
import BackImg from "../../assets/add_cart.png";

const Base = styled.aside`
  width: 100%;
  height: 50%;
`;

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #f2f;
  display: flex;
  justify-content: center;
`;

const CartContainer = styled.div`
  width: 80%;
  background: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundImg = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  text-align: center;
  position: relative;
  &:after {
    content: "";
    width: 160px;
    height: 160px;
    background-image: url(${BackImg});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 20%;
  }
`;

const CartWrapper = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  opacity: 60%;
`;

function AsideMenuCart() {
  return (
    <Base>
      <Section>
        <CartContainer>
          <BackgroundImg>
            <CartWrapper>
              장바구니에 담은
              <br />
              상품이 없습니다
            </CartWrapper>
          </BackgroundImg>
        </CartContainer>
      </Section>
    </Base>
  );
}

export default AsideMenuCart;
