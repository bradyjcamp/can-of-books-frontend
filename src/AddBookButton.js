import React from "react";
import Button from "react-bootstrap/Button";
import BookFormModal from "./BookFormModal";

class AddBookButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({
      show: false
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    });
  }

  render(){
    return(
      <>
      {
        // need conditional to render add book modal
        this.state.show ?
        <BookFormModal
        show={this.handleShow}
        close={this.handleClose}/> : 
        <Button variant="primary" onClick={this.handleShow}>Add Book</Button>
      }
      </>
    );
  }
}


export default AddBookButton;