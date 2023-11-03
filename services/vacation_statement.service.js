import { get, post } from "../db/dataBase.js"

export let db_create_response_vs;
export let db_read_response_vs;

export async function db_create_vs(payload, id) {
    await post(`funcionarios/${id}/ferias`, `POST`, payload)
        .then((objectAssync) => db_create_response_vs = objectAssync)
        .catch((error) => console.error(error))
}

export async function db_read_vs(id) {
    await get(`funcionarios/${id}/ferias`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response_vs = response)
        .catch((error) => console.error(error))
}