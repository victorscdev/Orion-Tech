import { CRIAR__select_funcionarios, CRIAR__select_data } from "../../components/select/select.component.js"
import { HTML__botao_gerar_calculo_de_folha } from "../../components/buttons/buttons.js"
import { ORDENAR__arrayd_de_objetos_por_nome } from "../../model/global_functions.js"
import { db_read, db_read_response } from "../../../services/employees.service.js"
import { db_read_timekeeping, db_read_response_timekeeping } from "../../../services/timekeeping.service.js"
import { FILTRAR__apontamentos_por_data_e_horas_trabalhadas, folha_de_pagamento } from "../../../business/sheet_calculation.business.js"
import { CRIAR__tabela_calculo_de_folha } from "../../components/tables/tables.js"

export async function HTML__adiciona_info_de_calculo_de_folha() {
    const div = document.createElement('div')
    await db_read()

    const head_calculo_de_folha = document.createElement('div')
    head_calculo_de_folha.classList.add("d-flex", "justify-content-between")
    head_calculo_de_folha.append(CRIAR__select_funcionarios(ORDENAR__arrayd_de_objetos_por_nome(db_read_response)), CRIAR__select_data(), HTML__botao_gerar_calculo_de_folha(EVENTO__gerar_calculo_de_folha))

    div.append(head_calculo_de_folha)

    return div
}

async function EVENTO__gerar_calculo_de_folha() {
    const select = document.querySelector("#select_funcionarios")
    const inputDate = document.querySelector("#inputData")
    const main = document.querySelector('main .container')
    const table = document.querySelector("main .container table")

    await db_read_timekeeping(select.value)
    FILTRAR__apontamentos_por_data_e_horas_trabalhadas(db_read_response_timekeeping, inputDate.value, select.value)

    setTimeout(() => {
        if(folha_de_pagamento.length === 0) {
            alert("folha de pagamento indisponivel")
            if (table === null) {
                main.append(CRIAR__tabela_calculo_de_folha(folha_de_pagamento))
            } else {
                table.remove()
                main.append(CRIAR__tabela_calculo_de_folha(folha_de_pagamento))
            }
        } else {
            if (table === null) {
                main.append(CRIAR__tabela_calculo_de_folha(folha_de_pagamento))
            } else {
                table.remove()
                main.append(CRIAR__tabela_calculo_de_folha(folha_de_pagamento))
            }
        }
    }, 1000)
}