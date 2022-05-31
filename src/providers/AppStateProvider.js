import React, { useCallback, useEffect, useState } from "react";
import { bookSearch } from "../api";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true);
    }
  }, [query]);

  const bookSearchHttpHandler = async (query, reset) => {
    console.log("query", query);

    const params = {
      query: query,
      sort: "accuracy",
      page: 1,
      size: 12,
    };

    const { data } = await bookSearch(params);
    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  const searchBook = (text) => {
    setQuery(text);
  };
  const [orders, setOrders] = useState([]);

  const addToOrder = useCallback((isbn) => {
    setOrders((orders) => {
      const finded = orders.find((order) => order.isbn === isbn);

      if (finded === undefined) {
        return [...orders, { isbn, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.isbn === isbn) {
            return {
              isbn,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);

  const remove = useCallback((isbn) => {
    setOrders((orders) => {
      return orders.filter((order) => order.isbn !== isbn);
    });
  }, []);

  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        books,
        searchBook,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
