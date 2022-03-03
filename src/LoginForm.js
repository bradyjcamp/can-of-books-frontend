import { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class LoginForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let user ={
      name: e.target.name.value,
      email: e.target.email.value
    }
    this.props.loginHandler(user);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name" >
        <Form.Label >Name</Form.Label>
        <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="email" >
          <Form.Label >Email</Form.Label>
            <Form.Control type="text" />
            </Form.Group>
          <Button type="submit">Login</Button>
      </Form>
    );
  }
};

export default LoginForm;
