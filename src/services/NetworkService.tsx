import react from 'react';

export default class NetworkService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    
    fetch(alias: string, parameters?: object, body?: any, type?: string) {
        const Options = {
            method: type,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body
        };

        return (
            fetch(`${this.endpoint}${alias}`, Options)
                .then((response) => response.json())
        );
    }
}