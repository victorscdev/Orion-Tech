import {  get, post } from "../db/dataBase.js"

export let db_create_response;
export let db_read_response;

export async function db_create(payload) {
    await post(`funcionarios`, `POST`, payload)
        .then((objectAssync) => db_create_response = objectAssync)
        .catch((error) => console.error(error))
}

export async function db_read() {
    await get(`funcionarios`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response = response)
        .catch((error) => console.error(error))
}
