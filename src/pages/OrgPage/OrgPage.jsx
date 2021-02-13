import React, { Component } from 'react';
import OrgSignupForm from '../../components/OrgSignupForm/OrgSignupForm';
import './OrgPage.css';

class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
 
  render() {
    return (
      <div className="OrgPage">
        <div className="flex-h Welcome">
          <p>Welcome to Employee Hero. Please add your oganization below.</p>
          <OrgSignUpForm {...this.props} updateMessage={this.updateMessage}/>
          <p>{this.state.message}</p>
        </div>
      </div>
    );
  }
};

export default OrgPage;