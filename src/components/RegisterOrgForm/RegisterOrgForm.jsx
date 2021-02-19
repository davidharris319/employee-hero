import React, { Component } from 'react';
import orgService from '../../utils/orgService';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';


class RegisterOrgForm extends Component {

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
      const { user, token, organization } = await orgService.signup(this.state);
      this.props.updateOrganization(organization);
      tokenService.setToken(token)
      this.props.updateUser(user);
      this.props.history.push('/organization/questions');
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
        <header className="header-footer">Organization</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit} >
          <div className="form-group">
            <div className="col-sm-12 mt-2">
              <input type="text" className="form-control" placeholder="Organization Name" value={this.state.name} name="name" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 mt-2">
              <input type="text" className="form-control" placeholder="Industry" value={this.state.industry} name="industry" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group mt-2">
            <div className="col-sm-12 text-center">
              <button className="btn SubmitButton" disabled={this.isFormInvalid()}>Sign Up Organization</button>&nbsp;&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterOrgForm;