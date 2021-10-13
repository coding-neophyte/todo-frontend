import React, { Component } from 'react'
import { createTodo, getTodos, updateTodo } from './utils'
import './App.css'
import { Button, TextField, Typography } from '@material-ui/core'

export default class TodoPage extends Component {
    state = {
        todos: [],
        newTodo: '',
    }

    componentDidMount = async () => {
        const todos = await getTodos(this.props.token);
        this.setState({ todos: todos })
    }

    handleTodo = (e) => {
        this.setState({ newTodo: e.target.value })
    }
    submitTodo = async (e) => {
        e.preventDefault();
        await createTodo(this.state.newTodo, this.props.token, false)
        const todos = await getTodos(this.props.token);
        this.setState({ todos, newTodo: '' })
    }
    render() {
        return (
            <div className="todo-list">
                <Typography variant="h3" component="h3">
                    Enter Todos
                </Typography>
                <form onSubmit={this.submitTodo}>
                    <TextField id="outlined-basic" label="Enter Todo" variant="outlined" onChange={this.handleTodo} value={this.state.newTodo} size='small' />
                    {/* <input onChange={this.handleTodo} value={this.state.newTodo} /> */}
                    <Button variant='contained' type='submit' color='secondary'> Add Todo </Button>
                </form>
                {this.state.todos.sort((a, b) => a.completed - b.completed).map(item => <div onClick={async () => {
                    await updateTodo(item.id, item.todo, !item.completed, this.props.token)
                    const todos = await getTodos(this.props.token);
                    this.setState({ todos })
                }} className={item.completed ? 'task-complete' : 'task-incomplete'}>
                    {item.todo}
                </div>)}

            </div>
        )
    }
}
