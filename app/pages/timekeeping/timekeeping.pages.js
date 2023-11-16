import { ORDENAR__arrayd_de_objetos_por_nome } from "../../model/global_functions.js"
import { db_read, db_read_response } from "../../../services/employees.service.js"
import { db_read_timekeeping, db_read_response_timekeeping } from "../../../services/timekeeping.service.js"
import { CRIAR__select_funcionarios } from "../../components/select/select.component.js"
import { HTML__botao_gerar_apontamento_horas } from "../../components/buttons/buttons.js"
import { CRIAR__tabela_apontamento_horas } from "../../components/tables/tables.js"

export async function HTML__adiciona_info_de_apontamento_horas() {

    const div = document.createElement('div')
    await db_read()

    const head_apontamento = document.createElement('div')
    head_apontamento.classList.add("d-flex", "justify-content-between")
    head_apontamento.append(CRIAR__select_funcionarios(ORDENAR__arrayd_de_objetos_por_nome(db_read_response)), HTML__botao_gerar_apontamento_horas(EVENTO__gerar_apontamento))

    div.append(head_apontamento)

    return div
}

async function EVENTO__gerar_apontamento() {
    const select = document.querySelector("#select_funcionarios")
    const main = document.querySelector('main .container')
    const table = document.querySelector("main .container table")

    if(table === null) {
        await db_read_timekeeping(select.value)
        main.append(CRIAR__tabela_apontamento_horas(db_read_response_timekeeping))
    } else {
        table.remove()
        await db_read_timekeeping(select.value)
        main.append(CRIAR__tabela_apontamento_horas(db_read_response_timekeeping))
    }
}