import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from './LogoutButton';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* DONE: if the user is logged in, render a navigation link to profile page */}


        {
          this.props.auth0.isAuthenticated &&
          <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
          
        }
        {/* DONE: if the user is logged in, render the `LogoutButton` */}
        {
          this.props.user &&
          <LogoutButton onLogout={this.props.onLogout}/>
        }
      </Navbar>
    );
  }
}

export default withAuth0(Header);
