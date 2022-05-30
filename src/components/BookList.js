import React from "react";
import styled from "styled-components";
import useBooks from "../hooks/useBooks";
import useActions from "../hooks/useActions";
import CartImg from "../assets/add-in-shopping-cart.png";

const BookList = () => {
  const { books } = useBooks();
  const { addToOrder } = useActions();

  return (
    <BookListWrapper>
      {books.map((book) => {
        const { isbn, thumbnail, title, price, sale_price, publisher, url } =
          book;
        const click = () => {
          addToOrder(isbn);
        };

        return (
          <BookItem key={isbn}>
            <div className="bookImg">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={thumbnail} alt={thumbnail} />
              </a>
            </div>

            <div className="bookContents">
              <a
                className="DetailLink"
                href={url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="bookPublisher">{publisher}</div>
                <div className="bookTitle">{title}</div>
                <div className="bookPrice">
                  &#8361; {sale_price.toLocaleString()} /
                  <strike>{price.toLocaleString()}</strike>{" "}
                </div>
              </a>
              <div className="icons">
                <img
                  className="AddCart"
                  src={CartImg}
                  alt="cart"
                  onClick={click}
                />
              </div>
            </div>
          </BookItem>
        );
      })}
    </BookListWrapper>
  );
};

const BookListWrapper = styled.li`
  display: grid;
  width: 80%;
  margin: auto;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
`;
const BookItem = styled.dl`
  position: relative;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 15px 15px 12px #666666;
  .bookImg {
    img {
      width: 100%;
    }
  }
  .bookContents {
    position: absolute;
    text-align: left;
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    padding: 10px;
    opacity: 0;
    visibility: visible;
    width: 100%;
    background-color: #ffffff;
  }
  &:hover {
    .bookImg {
      img {
        opacity: 0.5;
      }
    }
    .bookContents {
      opacity: 1;
      transition: all 0.6s 0s;
      .DetailLink {
        text-decoration: none;
        color: #000000;
      }
      .bookPublisher {
        margin: 5px auto;
        font-size: 12px;
        font-weight: 500;
      }
      .bookTitle {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 800;
      }
      .bookPrice {
        margin-bottom: 5px;
        font-size: 16px;
        font-weight: 600;
        strike {
          font-size: 13px;
          margin-left: 5px;
          color: #888888;
        }
      }
      .icons {
        display: flex;
        cursor: pointer;
        justify-content: flex-end;
        .AddCart {
          width: 32px;
          height: 32px;
          margin-right: 20px;
        }
      }
    }
  }
`;

export default BookList;
