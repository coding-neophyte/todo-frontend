import './App.css';

import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, NavLink, Route } from 'react-router-dom';
import AuthPage from './AuthPage';
import LoginPage from './LoginPage';
import TodoPage from './TodoPage';
import { Redirect } from 'react-router';
import { Typography } from '@material-ui/core';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const TOKEN = 'TOKEN'

export default class App extends Component {


  state = {
    token: localStorage.getItem(TOKEN) || ''
  }


  handleToken = token => {
    localStorage.setItem(TOKEN, token)
    this.setState({ token: token })
  }


  render() {
    return (
      <div>
        <Router>
          <NavLink className='nav' to='/auth'> <Typography variant="button" >
            Sign UP
          </Typography> <LoginIcon fontSize='small' />   </NavLink>

          <NavLink className='nav' to='/login'> <Typography variant="button" >
            Login
          </Typography> <AssignmentIndIcon fontSize='small' />   </NavLink>

          <NavLink className='nav' to='/todos'>  <Typography variant="button">
            Todos
          </Typography> <ListAltIcon fontSize='small' /> </NavLink>


          <Switch>
            <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage handleToken={this.handleToken}  {...routerProps} />}
            />
            <Route
              path="/auth"
              exact
              render={(routerProps) => <AuthPage handleToken={this.handleToken} {...routerProps} />}
            />

            <Route
              path="/todos"
              exact
              render={(routerProps) => this.state.token ? <TodoPage token={this.state.token} {...routerProps} /> : <Redirect to='/auth' />}
            />



          </Switch>

        </Router>
      </div>
    )
  }
}
