import axios from "axios";
import React from "react";
import AddBookButton from "./AddBookButton";
import Carousel from "react-bootstrap/Carousel";
import bookImg from './booksmall.jpg';

let SERVER = process.env.REACT_APP_SERVER_URL;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  /* DONE: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    try {
      let url = `${SERVER}/books?email=${this.props.user.email}`
      console.log(url);
      let results = await axios.get(url);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  postBook = async (newBook) => {
    try{
      let url = `${SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      console.log(createdBook.data);
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch(error){
      console.log(' There is an error: ', error.response.data);
    }
  }

  handleBookSubmit = (e) => {
    e.preventDefault();

    let newBook = {
      title: e.target.title.value,
      email: e.target.email.value,
      description: e.target.description
      //status: e.target.status.checked??
    }
    this.postBook(newBook);
  }

  // deleteBook = async (id) => {
  //   try{
  //     let url = `${SERVER}/books/${id}`;
  //     await axios.delete(url)
  //     const updatedBooks = this.state.books.filter(book => book._id !== id);
  //     this.setState({
  //       books: updatedBooks
  //     })
  //   } catch(error){
  //     console.log(' There is an error: ', error.response.data);
  //   }
  // }

  componentDidMount() {
    this.getBooks();
  }

  render() {
    /* DONE: render user's books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        <AddBookButton />
        {this.state.books.length > 0 ? (
        <Carousel>
          {this.state.books.map((book, idx) =>(
          <Carousel.Item className="h-100"
          key={idx}>
            <img
            className="d-block w-100 h-50"
            src={bookImg}
            alt={book.name}
            />
            <Carousel.Caption>
              <h1>{book.title}</h1>
              <h3>{book.description}</h3>
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

export default BestBooks;
