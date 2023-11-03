import {  get } from "../db/dataBase.js"

export let db_read_response_vs;

export async function db_read_vs(id) {
    await get(`funcionarios/${id}/ferias`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response_vs = response)
        .catch((error) => console.error(error))
}