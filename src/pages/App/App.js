import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  
  render() {


    return (
      <div className="App">
        <header className="App-header">
          Welcome to your React App
          <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='' className='NavBar-link'>LOG OUT</Link>
          </div>
        </header>
        <Switch>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
            history={history}
            /> 
          }/>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
            history={history}
            /> 
          }/>
        </Switch>
      </div>
    );
  } 
}

export default App;
