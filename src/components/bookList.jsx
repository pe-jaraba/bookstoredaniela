import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Form from "./form";
import BookItem from "./bookItem";
import { startLoading, endLoading, setBooks } from "../redux/books/booksSlice";
import { getBooksApi } from "../api/bookApi";

const Books = () => {
  const { bookList, isLoading } = useSelector((store) => store.book);
  const dispatch = useDispatch();

  const fetchBooks = async () => {
    dispatch(startLoading());
    const books = await getBooksApi();
    dispatch(endLoading());
    dispatch(setBooks(books));
  };

  useEffect(() => {
    fetchBooks();
  }, [dispatch, startLoading, endLoading, setBooks, getBooksApi]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (bookList && !isLoading) {
    return (
      <div className="book-container-list">
        {Object.entries(bookList).map(([key, bookArray]) =>
          bookArray.map((book) => (
            <BookItem
              key={key}
              itemId={key}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          ))
        )}
        <div className="Line" />
        <Form />
      </div>
    );
  }
};

export default Books;
