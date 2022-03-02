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
    console.log("AddBookButton state: ", this.state);
    return (
      <>
        {
          // need conditional to render add book modal
          this.state.show ? (
            <UpdateBookModal
              user={this.props.user}
              book_id={this.props.book_id}
              // this below will change to this.props.updateBook
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