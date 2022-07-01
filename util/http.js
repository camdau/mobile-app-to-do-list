import axios from 'axios';

const BACKEND_URL = 'http://192.168.4.20/api'

export function storeToDo(enteredGoalText) {


    axios.post(
        BACKEND_URL + '/createtodo',
        { todo: enteredGoalText }
    )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}

export async function fetchToDos() {
    try {
        const response = await axios.get(BACKEND_URL + '/todo')
        console.log(response)
        const todos = [];

        for (const key in response.data) {
            const todoObj = {
                id: key,
                text: response.data[key].todo
            };
            todos.push(todoObj);
        }

        return todos;
    }
    catch (e) {
        console.log(e);
    }

}