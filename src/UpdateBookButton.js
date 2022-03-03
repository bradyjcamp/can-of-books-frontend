import React from "react";
import Button from "react-bootstrap/Button";
import UpdateBookModal from "./UpdateBookModal";


class UpdateBookButton extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  render() {
    return (
      <>
        {
          this.state.show ? (
            <UpdateBookModal
              book={this.props.book}
              user={this.props.user}
              book_id={this.props.book_id}
              updateBook={this.props.updateBook}
              show={this.state.show}
              close={this.handleClose}
            />
          ) : (
            <Button variant="primary" onClick={this.handleShow}>
              Update Book
            </Button>
          )
        }
      </>
    );
  }
}

export default UpdateBookButton;