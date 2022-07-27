import react from 'react';

export default class NetworkService {
    endpoint: string;
    token: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken(url: string, body: any, type: string) {
        const token = localStorage.getItem('token') as string;

        if (body.email === 'user' && body.password === 'user') {
            return token;
        }
    }
    
    fetch(url: string, body: any, type: string) {
        const Options = {
            method: type,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'token': this.token
            },
            body
        };

        return (
            fetch(`${this.endpoint}${url}`, Options)
                .then((response) => response.json())
        );
    }
    }