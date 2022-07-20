import react from 'react';

export default class NetworkService {
    token: string;
    endpoint: string;

    constructor(endpoint: string, token: string) {
        this.token = token;
        this.endpoint = endpoint;
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
        fetch(`${this.endpoint}${url}`, Options).then(async response => {
            try {
                const data = await response.json()
                console.log('response data?', data)
            } catch(error) {
                console.log('Error happened here!')
                console.error(error)
            }
        })
        );

        // return (
        //     fetch(`${this.endpoint}${url}`, Options)
        //         .then((response) => response.json())
        // );
    }
}