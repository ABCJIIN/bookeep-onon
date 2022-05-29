import React from "react";
import BookList from "./BookList";
import LiBrary from "../components/LiBrary";

const AllBook = () => {
  return (
    <>
      <LiBrary>
        <BookList />
      </LiBrary>
    </>
  );
};

export default AllBook;
