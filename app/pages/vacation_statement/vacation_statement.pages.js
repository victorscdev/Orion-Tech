import { ORDENAR__arrayd_de_objetos_por_nome } from "../../model/global_functions.js"
import { db_read, db_read_response } from "../../../services/employees.service.js"
import { db_read_vs, db_read_response_vs } from "../../../services/vacation_statement.service.js"
import { CRIAR__select_df } from "../../components/select/select.component.js"
import { HTML__botao_gerar_demonstrativo_ferias_por_funcionario } from "../../components/buttons/buttons.js"
import { CRIAR__tabela_demonstrativo_de_ferias } from "../../components/tables/tables.js"

export async function HTML__adiciona_info_de_demonstrativo_ferias() {

    const div = document.createElement('div')
    await db_read()

    const head_vs = document.createElement('div')
    head_vs.classList.add("d-flex", "justify-content-between")
    head_vs.append(CRIAR__select_df(ORDENAR__arrayd_de_objetos_por_nome(db_read_response)), HTML__botao_gerar_demonstrativo_ferias_por_funcionario(EVENTO__gerar_demonstrativo))

    div.append(head_vs)

    return div
}

async function EVENTO__gerar_demonstrativo() {
    const select = document.querySelector("#demonstrativo_ferias")
    const main = document.querySelector('main .container')
    const table = document.querySelector("main .container table")

    if(table === null) {
        await db_read_vs(select.value)
        main.append(CRIAR__tabela_demonstrativo_de_ferias(db_read_response_vs))
    } else {
        table.remove()
        await db_read_vs(select.value)
        main.append(CRIAR__tabela_demonstrativo_de_ferias(db_read_response_vs))
    }
}