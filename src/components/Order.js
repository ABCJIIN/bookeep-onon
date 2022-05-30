import React, { useMemo } from "react";
import styled from "styled-components";
import useActions from "../hooks/useActions";
import useBooks from "../hooks/useBooks";
import useOrders from "../hooks/useOrders";
import BackImg from "../assets/add_cart.png";
import CancelImg from "../assets/cancel.png";

const Order = () => {
  const orders = useOrders();
  const { books } = useBooks();
  const { remove, removeAll } = useActions();
  const totalPrice = useMemo(() => {
    return orders
      .map((order) => {
        const { isbn, quantity } = order;
        const book = books.find((b) => b.isbn === isbn);
        return book.sale_price * quantity;
      })
      .reduce((l, r) => l + r, 0);
  }, [orders, books]);
  if (orders.length === 0) {
    return (
      <OrderWrapper>
        <BackgroundImg>
          <Title> You Don't have any orders</Title>
          <SubTitle>책을 추가해주세요</SubTitle>
        </BackgroundImg>
      </OrderWrapper>
    );
  }

  return (
    <>
      <OrderWrapper>
        <NewTitle>장바구니</NewTitle>
        {orders.map((order) => {
          const { isbn } = order;
          const book = books.find((b) => b.isbn === isbn);
          const click = () => {
            remove(isbn);
          };
          return (
            <>
              <div className="item" key={isbn}>
                <div className="bookImg">
                  <img src={book.thumbnail} alt={book.thumbnail} />
                </div>
                <div className="content">
                  <p className="bookTitle">
                    {book.title} {order.quantity}
                  </p>
                  <p className="bookPrice">
                    &#8361; {book.sale_price * order.quantity}
                  </p>
                </div>
                <div className="icon">
                  <img src={CancelImg} alt="cancel" onClick={click} />
                </div>
              </div>
            </>
          );
        })}
        <div>
          <hr />
          <div className="totalItem">
            <div className="total">Total</div>
            <div className="PriceBox">
              <div className="bookTotalPrice"> &#8361; {totalPrice}</div>
              <div className="endIcon">
                <img src={CancelImg} alt="cancel" onClick={removeAll} />
              </div>
            </div>
          </div>
        </div>
      </OrderWrapper>
    </>
  );
};

const OrderWrapper = styled.aside`
  /* height: 50%; */
  width: 80%;
  margin: 0 auto;
  min-height: 150px;
  /* background-color: #ffffff; */
  border-radius: 10px;
  box-shadow: 20px 10px 10px #f2f2f2;
  overflow: hidden;

  h1 {
    text-align: center;
  }
  .item {
    display: flex;
    /* border: solid 1px; */
  }
  .bookImg {
    img {
      width: 60px;
      vertical-align: middle;
      margin: 5px;
    }
  }
  .content {
    font-size: 12px;
    width: 60%;

    .bookTitle {
      font-size: 10px;
      font-weight: 500;
      margin-left: 5px;
    }
    .bookPrice {
      font-size: 12px;
      font-weight: 600;
      margin-left: 5px;
    }
  }
  .icon {
    margin: 5px 5px auto auto;
    img {
      width: 12px;
      height: 12px;
    }
  }
  .totalItem {
    margin: 10px;
    display: flex;
    .total {
      font-weight: 600;
      font-size: 18px;
    }
    .PriceBox {
      margin-left: 10px;

      display: flex;
      .bookTotalPrice {
        font-weight: 600;
        font-size: 18px;
      }
      .endIcon {
        position: absolute;
        right: 0;
        margin-right: 40px;

        img {
          width: 16px;
          height: 16px;
          margin-top: 3px;
        }
      }
    }
  }
`;

const BackgroundImg = styled.div`
  margin: 0 auto;
  width: 160px;
  height: 160px;
  position: relative;
  &:after {
    content: "";
    width: 160px;
    height: 160px;
    background-image: url(${BackImg});
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 20%;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  position: absolute;
  top: 20px;
`;

const NewTitle = styled.div`
  font-size: 20px;
  font-weight: 800;
  text-align: center;
  margin: 20px auto;
`;

const SubTitle = styled.div`
  margin: 0 auto;
  font-size: 16px;
  font-weight: 600;
  position: absolute;
  bottom: 20px;
  left: 15px;
`;

export default Order;
