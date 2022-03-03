import { Component } from 'react';

class Profile extends Component {

  render() {
    return <p>{this.props.user.name} can be reached at {this.props.user.email}</p>
  }
};

export default Profile;
