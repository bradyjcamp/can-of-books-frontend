import { Component } from 'react';
import Button from 'react-bootstrap/Button';
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props){
    super(props);
    this.state= {
      show: false,
    }
  }

  render() {
    return(
      <>
      {
        this.state.show ?
        <LoginForm loginHandler={this.props.loginHandler}/> : 
        <Button variant="primary" onClick={() => this.setState({ show : true})}>Login</Button>
      }
      </>
    );
  }
}
