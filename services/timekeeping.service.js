import {  get, post } from "../db/dataBase.js"

export let db_create_response_timekeeping;
export let db_read_response_timekeeping;

export async function db_create_timekeeping(payload, id) {
    await post(`funcionarios/${id}/apontamentos`, `POST`, payload)
        .then((objectAssync) => db_create_response_timekeeping = objectAssync)
        .catch((error) => console.error(error))
}

export async function db_read_timekeeping(id) {
    await get(`funcionarios/${id}/apontamentos`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response_timekeeping = response)
        .catch((error) => console.error(error))
}