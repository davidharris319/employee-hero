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
import EmployeeDetailsPage from '../EmployeeDetailsPage/EmployeeDetailsPage';
import OrganizationQuestionPage from '../OrganizationQuestionPage/OrganizationQuestionPage';
import EditQuestionPage from '../EditQuestionPage/EditQuestionPage';
import CreateUserProfilePage from '../CreateUserProfilePage/CreateUserProfilePage';
import UserProfilePage from '../UserProfilePage/UserProfilePage';
import EditAnswerPage from '../EditAnswerPage/EditAnswerPage';
import AddNewAnswerForm from '../AddNewAnswerForm/AddNewAnswerForm';
import LandingPage from '../LandingPage/LandingPage';
import questionService from '../../utils/questionService';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      organization: {
        employees: []
      },
      questions: []
    };
  }
  
  updateOrganization = (organization) => this.setState({ organization })

  updateUser = (user) => this.setState({ user })

  handleLogout = () => {
    userService.logout();
    this.setState({ 
      user: null, 
      organization: { 
        employees: []
    }
   });
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }


  setUserOrganization = async () => {
    if (!this.state.organization.name && this.state.user && this.state.user.organization) {
      const organization = await orgService.getOrg();
      this.setState({ organization });
    } 
  }

  /*--- Lifecycle Methods ---*/
  componentDidMount() {
    this.setUserOrganization();
  }

  componentDidUpdate() {
    this.setUserOrganization();
    }

  render() {
    return (
      <div className="App">
        <header className="header-footer title">
          Employee Hero

        </header>
        <NavBar 
        user={this.state.user}
        organization={this.state.organization}
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
          <Route exact path='/' render={props => 
            <LandingPage
            {...props}
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
          <Route exact path='/organization/employee/details' render={props => 
            userService.getUser() ? 
            <EmployeeDetailsPage
            {...props}
            organization={this.state.organization}
            user={this.state.user}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/organization/questions' render={props => 
            userService.getUser() ?
            <OrganizationQuestionPage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/organization/question/edit' render={props => 
            userService.getUser() ?
            <EditQuestionPage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/user/profile/create' render={props => 
            userService.getUser() ?
            <CreateUserProfilePage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/user/profile/' render={props => 
            userService.getUser() ?
            <UserProfilePage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/user/profile/edit' render={props => 
            userService.getUser() ?
            <EditAnswerPage
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
          <Route exact path='/user/profile/create/answer' render={props => 
            userService.getUser() ?
            <AddNewAnswerForm
            {...props}
            user={this.state.user}
            organization={this.state.organization}
            /> :
            <Redirect to='/login'/>
          }/>
        </Switch>
      </div>
    );
  } 
}

export default App;
