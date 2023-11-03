function url(endpoint) { return `https://6520eac8a4199548356ca415.mockapi.io/api/${endpoint}` }

function options(http, payload) {
    return {
        method: http,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer token'
        },
        body: JSON.stringify(payload)
    };
}

export async function get(endpoint, method) { return await fetch(url(endpoint), options(method)) }

export async function post(endpoint, method, payload) { return await fetch(url(endpoint), options(method, payload)) }