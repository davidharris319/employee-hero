import React, { Component } from 'react';
import './LandingPage.css';

class LandingPage extends Component {

  render() {
    return (
      <div className="LandingPage-card">
        <div className="card card-border">
          <div className="card-body">
            <h5 className="Welcome-text">Welcome to Employee Hero. 
            <br/>
            <br/>
            The Employee Database that gives your organization a unique and customized experience for your employees to get to know each other.</h5>
          </div>
        </div>
      </div>
    );
  }
};

export default LandingPage;