import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class OrgSignUpForm extends Component {

  state = {
    name: '',
    industry: '',
    administrator: '' // TODO update this section to automatically make whoever is adding the org to be the administrator
  }

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await orgService.signup(this.state);
      this.props.history.push('/organization-page');
      // TODO do i need a handleSignupOrLogin handler here? 
    } catch (err) {
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.industry);
  }

  render() {
    return (
      <div>
        <header className="header-footer">Add Your org</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="org Name" value={this.state.name} name="name" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Industry" value={this.state.industry} name="industry" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input type="text" className="form-control" placeholder="Administrator" value={this.state.administrator} name="industry" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up org</button>&nbsp;&nbsp;
            </div>
        </form>
      </div>
    );
  }
}

export default OrgSignUpForm;