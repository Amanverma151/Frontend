import Card from "./Card";
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";



function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      getAllBooks()
    }, []);



function getAllBooks(){
  axios
  .get('https://server-6dqy.onrender.com/')
  .then((res) => {
    setBooks(res.data);
  })
  .catch((err) => {
    console.log('Error from BookList');
  });
}
    const deleteBook = (id)=> {
      console.log(id)

      axios
      .delete('https://server-6dqy.onrender.com/'+id)
      .then((res) => {
        getAllBooks()
        console.log(res.data)
      })
      .catch((err) => {
        console.log('Error from add book');
      });

    }
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <Card 
        book={book} 
        key={k}
        deleteBook={() => deleteBook(book._id)} />);
  
    return (
      <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
  
          <div className='list'>{bookList}</div>
        </div>
      </div>
    );
  }
  
  export default BookList;