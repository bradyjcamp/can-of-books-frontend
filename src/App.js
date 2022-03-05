import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import AuthProfile from './AuthProfile';
import AuthLogoutButton from './AuthLogoutButton';
import AuthLoginButton from './AuthLoginButton';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // add user for Auth0
      user: {
        email: 'bradyjcamp@gmail.com'
        // props.auth0.user.email
      }
    };
  }

  loginHandler = (user) => {
    this.setState({
      user,
    });
  }

  logoutHandler = () => {
    this.setState({
      user: null
    });
  }

  render() {

    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          {this.props.auth0.isAuthenticated ? <AuthLogoutButton /> : <AuthLoginButton />}
          <Switch>
            <Route exact path='/'>
              {this.props.auth0.isAuthenticated && <BestBooks user={this.state.user} />}
            </Route>
            <Route exact path='/profile'>
              
    
                <AuthProfile  />
              
            </Route>
          </Switch>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);

