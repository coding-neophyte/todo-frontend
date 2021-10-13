import request from "superagent"



export async function getTodos(token) {
    console.log(token)
    const response = await request.get('https://tranquil-cove-41425.herokuapp.com/api/todos')
        .set('Authorization', token)

    return response.body
}

export async function updateTodo(id, todo, completed, token) {
    const response = await request.put(`https://tranquil-cove-41425.herokuapp.com/api/todos/${id}`)
        .set('Authorization', token)
        .send({ todo: todo, completed: completed })

    return response.body
}

export async function createTodo(todo, token, completed) {
    const response = await request.post(`https://tranquil-cove-41425.herokuapp.com/api/todos`)
        .set('Authorization', token)
        .send({ todo: todo, completed: completed })
    console.log(response.body)
    return response.body
}

export async function signIn(email, password) {
    const response = await request.post(`https://tranquil-cove-41425.herokuapp.com/auth/signin`)
        .send({ email, password })

    return response.body
}


export async function signUp(email, password) {
    const response = await request.post(`https://tranquil-cove-41425.herokuapp.com/auth/signup`)
        .send({ email, password })

    return response.body
}
