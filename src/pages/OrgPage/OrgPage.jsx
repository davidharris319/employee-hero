import React, { Component } from 'react';
import RegisterOrgForm from '../../components/RegisterOrgForm/RegisterOrgForm';
import './OrgPage.css';

class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
 
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  render() {
    return (
      <div className="OrgPage">
        {this.props.user.organization ?
        <div>
          <p>Welcome to Employee Hero. Your company is {this.props.user.organization}</p>
        </div>
        :
        <div>
          <div className="flex-h Welcome">
          <p>Welcome to Employee Hero. Please add your oganization below.</p>
          </div>
          <RegisterOrgForm {...this.props} updateMessage={this.updateMessage}/>
          <p>{this.state.message}</p>
        </div>
        }
      </div>
    );
  }
};

export default OrgPage;