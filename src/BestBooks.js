import axios from "axios";
import React from "react";
import AddBookButton from "./AddBookButton";
import Carousel from "react-bootstrap/Carousel";
import bookImg from './booksmall.jpg';
import DeleteButton from "./DeleteButton";
import UpdateBookButton from "./UpdateBookButton";
import { withAuth0 } from '@auth0/auth0-react';

let SERVER = process.env.REACT_APP_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  // getBooks = async () => {
  //   try {
  //     let url = `${SERVER}/books?email=${this.props.user.email}`
  //     let results = await axios.get(url);
  //     this.setState({
  //       books: results.data,
  //     });
  //   } catch (error) {
  //     console.log("Error: ", error.message);
  //   }
  // };
  // ------ auth0 refactoring
  getBooks = async () => {
    try {
      if(this.props.auth0.isAuthenticated){
        //get token
        const res = await this.props.auth0.getIdTokenClaims();
        const jwt = res.__raw;
        console.log(jwt);
        let url = `${SERVER}/books?email=${this.props.user.email}`
        let results = await axios(url);
        this.setState({
          books: results.data,
        });
      }
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  postBook = async (newBook) => {
    try{
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch(error){
      console.log(' There is an error: ', error.message);
    }
  }


  deleteBook = async (id) => {
    try{
      let url = `${SERVER}/books/${id}`;
      await axios.delete(url)
      const updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      })
    } catch(error){
      console.log(' There is an error: ', error.message);
    }
  }

  updateBook = async (bookToUpdate) => {
    try{
      let url = `${SERVER}/books/${bookToUpdate._id}`;
      let updatedBook = await axios.put(url, bookToUpdate);
      let updatedBookData = this.state.books.map(existingBook => existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook);
      this.setState({
        books: updatedBookData
      });
    } catch(error){
      console.log(' There is an error: ', error.message);
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddBookButton
        user={this.props.user} 
        handleBookSubmit ={this.postBook}
        />
        {this.state.books.length > 0 ? (
        <Carousel>
          {this.state.books.map(book =>(
          <Carousel.Item className="h-100"
          key={book._id}>
            <img
            className="d-block w-75 h-50 m-auto"
            src={bookImg}
            alt={book.title}
            />
            <Carousel.Caption>
              <h1>{book.title}</h1>
              <h3>{book.description}</h3>
              <DeleteButton
              book_id={book._id}
              deleteBook={this.deleteBook}/>
              <UpdateBookButton
              book={book}
              user={this.props.user}
              book_id={book._id}
              updateBook={this.updateBook}
              />
            </Carousel.Caption>
          </Carousel.Item>))}
        </Carousel>
        ) : (
          <h3>No Books Found :</h3>
        )}
      </>
    );
  }
}

export default withAuth0(BestBooks);
