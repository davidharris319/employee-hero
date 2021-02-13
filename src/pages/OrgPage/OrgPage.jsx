import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import './OrgPage.css';

class OrgPage extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''}
  }
 
  render() {
    return (
      <div className="OrgPage">
        <div className="flex-h align-flex-end">
        <p>Welcome to Employee Hero. Please add your oganization below.</p>
        </div>
      </div>
    );
  }
};

export default OrgPage;