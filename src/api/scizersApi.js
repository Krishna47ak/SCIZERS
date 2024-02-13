import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://swapi.dev/api/people'
})

export default instance;