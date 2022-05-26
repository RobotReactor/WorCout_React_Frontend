import axios from 'axios'

export const BASE_URL = 'https://localhost:44304/';

export const ENDPOINTS = {
    workouts: 'workouts'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newEntry => axios.post(url, newEntry),
        put: (id, updateEntry) => axios.put(url + id, updateEntry),
        delete: id => axios.delete(url + id), 
    }
}