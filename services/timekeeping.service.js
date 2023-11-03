import {  get } from "../db/dataBase.js"

export let db_read_response_timekeeping;

export async function db_read_timekeeping(id) {
    await get(`funcionarios/${id}/apontamentos`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response_timekeeping = response)
        .catch((error) => console.error(error))
}