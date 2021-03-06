import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';


class LoginPage extends Component {

  state = {
    email: '',
    pw: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/organization/employee-list');
    } catch (err) {
      alert('Invalid Credentials!');
    }
  }

  render() {
    return (
      <div className="LoginPage">
        <header className="header-footer">Log In</header>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group mt-2">
            <div className="col-sm-12">
              <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group mt-2">
            <div className="col-sm-12">
              <input type="password" className="form-control" placeholder="Password" value={this.state.pw} name="pw" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group mt-2">
            <div className="col-sm-12 text-center">
              <button className="btn SubmitButton">Log In</button>&nbsp;&nbsp;&nbsp;
              <button className="CancelButton btn">
                <Link className="CancelLink" to='/'>Cancel</Link>
              </button>
            </div>
          </div>
        </form>
        
      </div>
    )
  }
}

export default LoginPage;