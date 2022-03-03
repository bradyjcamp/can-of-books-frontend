import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class UpdateBookModal extends React.Component {



  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      email: this.props.user.email,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.checked,
      _id: this.props.book_id,
    };
    this.props.updateBook(bookToUpdate);
    this.props.close();
  };

  render() {
    return (
      <>
        <Modal onHide={this.props.close} show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="title">
                <Form.Label>Book Title:</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.title} />
              </Form.Group>
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" placeholder={this.props.book.description} />
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Check type="checkbox" label="Read" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Update Book
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default UpdateBookModal;