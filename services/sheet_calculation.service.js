import {  get, post } from "../db/dataBase.js"

export let db_read_response_sheet_calculation;

export async function db_read_sheet_calculation(id) {
    await get(`funcionarios/${id}/calculofolha`)
        .then((objectAssync) => objectAssync.json())
        .then((response) => db_read_response_sheet_calculation = response)
        .catch((error) => console.error(error))
}