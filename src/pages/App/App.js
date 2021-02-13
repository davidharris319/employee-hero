import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import OrgPage from '../../pages/OrgPage/OrgPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }
  
  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  render() {
    return (
      <div className="App">
        <header className="header-footer">
          Employee Hero

        </header>
        <NavBar 
        user={this.state.user}
        handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            handleSignupOrLogin={this.handleSignupOrLogin}
            /> 
          }/>
          <Route exact path='/login' render={props => 
            <LoginPage
            {...props}
            handleSignupOrLogin={this.handleSignupOrLogin}
            /> 
          }/>
          <Route exact path='/organization-page' render={props => 
            userService.getUser() ?
            <OrgPage
            {...props}
            user={this.state.user}
            handleSignupOrLogin={this.handleSignupOrLogin}
            /> :
            <Redirect to='/login'/>
          }/>
        </Switch>
      </div>
    );
  } 
}

export default App;
