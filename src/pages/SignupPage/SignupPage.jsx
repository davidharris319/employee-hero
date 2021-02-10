import React, { Component } from 'react';
import SignupForm from '../../components/SignupForm/SignupForm';
import './SignupPage.css';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }

  render() {
    return (
      <div className='SignupPage'>
        <SignupForm {...this.props} />
      </div>
    )
  }
}

export default SignupPage;