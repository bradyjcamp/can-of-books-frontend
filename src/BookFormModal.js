import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

class BookFormModal extends React.Component {
  render() {
    return (
      <>
        {/* title email desciption */}
        <Modal onHide={this.props.close} show={this.props.show}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="title">
              <Form.Label>Book Title:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="description">
              <Form.Label>Description:</Form.Label>
              <Form.Control type="text" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
          {/* onSubmit={this.handleBookSubmit} */}
            <Button variant="primary" type="submit">Add Book</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default BookFormModal;
