import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { signUp } from './utils.js';
import { TextField, Button, Typography } from '@material-ui/core';

export default class AuthPage extends Component {
    state = {
        email: '',
        password: ''
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { token } = await signUp(this.state.email, this.state.password);
        this.props.handleToken(token)
        this.props.history.push('/todos')
    }

    handleEmail = async (e) => {
        this.setState({ email: e.target.value })
    }

    handlePassword = async (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        return (
            <div className="todo-list">
                <Typography variant="h1" component="h1" className='h1'>
                    ToDo List
                </Typography>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" onChange={this.handleEmail} type="email" size='small' />
                        {/* <input onChange={this.handleEmail} type="email" placeholder='Enter Email' /> */}
                    </label>
                    <label>
                        {/* <input onChange={this.handlePassword} type="password" placeholder='Enter Password' /> */}
                        <TextField id="outlined-basic" label="Enter Password" variant="outlined" onChange={this.handlePassword} type="password" size='small' />
                    </label>
                    <Button variant='contained' type='submit' color='secondary'> Sign Up</Button>
                </form>
                <div className="account">
                    <Link className='account' to='/login'> Have Account? Login Here! </Link>
                </div>


            </div>
        )
    }
}
