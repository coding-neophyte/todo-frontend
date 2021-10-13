import React, { Component } from 'react'
import { signIn } from './utils.js'
import { TextField, Button, Typography } from '@material-ui/core'

export default class LoginPage extends Component {

    state = {
        email: '',
        password: ''
    }
    handleEmail = async (e) => {
        this.setState({ email: e.target.value })
    }

    handlePassword = async (e) => {
        this.setState({ password: e.target.value })
    }

    handleLogin = async (e) => {
        e.preventDefault();
        const { token } = await signIn(this.state.email, this.state.password);
        this.props.handleToken(token)
        this.props.history.push('/todos')
    }

    render() {
        return (
            <div className='todo-list'>
                <Typography variant="h1" component="h1" className='h1'>
                    ToDo List
                </Typography>
                <form onSubmit={this.handleLogin}>
                    <label>
                        <TextField id="outlined-basic" label="Enter Email" variant="outlined" onChange={this.handleEmail} type="email" size='small' />
                        {/* <input onChange={this.handleEmail} type='email' placeholder='Enter Email' /> */}
                    </label>

                    <label>
                        <TextField id="outlined-basic" label="Enter Password" variant="outlined" onChange={this.handlePassword} type="password" size='small' />
                        {/* <input onChange={this.handlePassword} type='password' placeholder='Enter Password' /> */}
                    </label>
                    <Button variant='contained' type='submit' color='secondary'> Log In</Button>
                </form>
            </div>
        )
    }
}
