/* eslint-disable import/no-extraneous-dependencies */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { getBooks, deleteBook, removeBook } from '../redux/books/booksSlice';

const BookItem = ({
  itemId, author, title, category,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <div className="alert alert-success loading" role="alert">Loading...</div>;
  }

  const handleDelete = () => {
    
  }

  return (
    <div className="container-bookItem">
      <div className="book-reference">
        <div className="book-info-card">
          <div className="book-text">
            <p className="category-txt">{category}</p>
            <h4 className="title-txt">{title}</h4>
            <p className="author-txt">{author}</p>
          </div>

          <ul className="ul-actions">
            <li>
              <button type="button" className="link-button"> Comment</button>
            </li>
            <div className="Line-2" />
            <li>
              <button type="button" className="link-button edit"> Edit</button>
            </li>
            <div className="Line-2" />
            <li>

              <button type="button" className="link-button" onClick={handleDelete}>
                Remove
              </button>

            </li>

          </ul>

        </div>
      </div>

      <div className="container-progress-circle">
        <div className="loading-status">

          <div className="spinner">
            <div className="Oval-2" />

          </div>
          <div className="completed-status">
            <span className="-Percent-Complete">
              17%
            </span>
            <span className="Completed Text-Style-2">
              Completed
            </span>
          </div>

        </div>
        <div className="Line-3" />
        <div className="book-status">
          <span className="Current-Chapter Text-Style-7">
            Current Chapter
          </span>
          <span className="Current-Lesson Text-Style-4">
            Chapter3:&ldquo;ALessonLearned&rdquo;
          </span>
          <button type="button" className="btn-update-progress">
            <span className="Update-progress">
              UPDATE PROGRESS
            </span>
          </button>

        </div>

      </div>

    </div>
  );
};
BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
export default BookItem;
