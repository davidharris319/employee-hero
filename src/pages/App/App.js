import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import NavBar from '../../components/NavBar/NavBar';
import AddOrgPage from '../AddOrgPage/AddOrgPage';
import orgService from '../../utils/orgService';
import WelcomePage from '../WelcomePage/WelcomePage';
import RegisterForOrgPage from '../RegisterForOrgPage/RegisterForOrgPage';
import OrganizationHomePage from '../OrganizationHomePage/OrganizationHomePage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      organization: {}
    };
  }
  
  updateOrganization = (organization) => this.setState({ organization })

  updateUser = (user) => this.setState({ user })

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount() {
    

    if (!this.state.organization.name && this.state.user && this.state.user.organization) {
      const organization = await orgService.getOrg();
      this.setState({ organization });
    } 
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
          <Route exact path='/organizations/add' render={props => 
            userService.getUser() ?
            <AddOrgPage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            handleSignupOrLogin={this.handleSignupOrLogin}
            updateOrganization={this.updateOrganization}
            updateUser={this.updateUser}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/welcome-page' render={props =>
          userService.getUser() ? 
          <WelcomePage
          {...props}  
          /> :
          <Redirect to='/login'/>
          }/>
          <Route exact path='/organizations/register' render={props =>
            userService.getUser() ? 
            <RegisterForOrgPage
            {...props}  
            user={this.state.user}
            organization={this.state.organization}
            handleSignupOrLogin={this.handleSignupOrLogin}
            updateOrganization={this.updateOrganization}
            updateUser={this.updateUser}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/organization/employee-list' render={props =>
            userService.getUser() ? 
            <OrganizationHomePage
            {...props}
            organization={this.state.organization}
            user={this.state.user}
            /> :
            <Redirect to='/login'/>
          }/>
        </Switch>
      </div>
    );
  } 
}

export default App;
