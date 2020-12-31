import axios from 'axios'
import {API_URL, API_URL_JPA} from '../../Constants.js'


class TodoDataService {

    retrieveAllTodos(name) {
        return axios.get(`${API_URL_JPA}/users/${name}/todos`)
    }

    retrieveTodo(name, id) {
        return axios.get(`${API_URL_JPA}/users/${name}/todos/${id}`)
    }

    deleteTodo(name, id) {
        return axios.delete(`${API_URL_JPA}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo) {
        return axios.put(`${API_URL_JPA}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, todo) {
        return axios.post(`${API_URL_JPA}/users/${name}/todos`, todo)
    }
    

}

export default new TodoDataService()