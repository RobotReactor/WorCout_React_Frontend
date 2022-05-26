import React from 'react';
import axios from 'axios';

export const BASE_URL = 'https://localhost:4000/';

export const ENDPOINTS = {
    workouts: 'workouts'
}

function createAPIEndpoint (endpoint) {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newEntry => axios.post(url, newEntry),
        put: (id, updateEntry) => axios.put(url + id, updateEntry),
        delete: id => axios.delete(url + id), 
    }
}

export { createAPIEndpoint };