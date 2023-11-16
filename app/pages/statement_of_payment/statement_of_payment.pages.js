import { CRIAR__select_funcionarios, CRIAR__select_data } from "../../components/select/select.component.js"
import { HTML__botao_gerar_demonstrativo_de_pagamento } from "../../components/buttons/buttons.js"
import { ORDENAR__arrayd_de_objetos_por_nome } from "../../model/global_functions.js"
import { db_read, db_read_response } from "../../../services/employees.service.js"
import { db_read_timekeeping, db_read_response_timekeeping } from "../../../services/timekeeping.service.js"
import { FILTRAR__demontrativo_por_data_e_horas_trabalhadas, demontrativo_de_pagamento } from "../../../business/statement_of_payment.business.js"
import { CRIAR__tabela_demontrativo_de_pagamento } from "../../components/tables/tables.js"

export async function HTML__adiciona_info_de_demonstrativo_de_pagamento() {
    const div = document.createElement('div')
    await db_read()

    const head_demonstrativo_de_pagamento = document.createElement('div')
    head_demonstrativo_de_pagamento.classList.add("d-flex", "justify-content-between")
    head_demonstrativo_de_pagamento.append(CRIAR__select_funcionarios(ORDENAR__arrayd_de_objetos_por_nome(db_read_response)), CRIAR__select_data(), HTML__botao_gerar_demonstrativo_de_pagamento(EVENTO__gerar_demonstrativo_de_pagamento))

    div.append(head_demonstrativo_de_pagamento)

    return div
}

async function EVENTO__gerar_demonstrativo_de_pagamento() {
    const select = document.querySelector("#select_funcionarios")
    const inputDate = document.querySelector("#inputData")
    const main = document.querySelector('main .container')
    const table = document.querySelector("main .container table")

    await db_read_timekeeping(select.value)
    FILTRAR__demontrativo_por_data_e_horas_trabalhadas(db_read_response_timekeeping, inputDate.value, select.value)

    
    setTimeout(() => {
        if(demontrativo_de_pagamento.length === 0) {
            alert("Demonstrativo de Pagamento indisponivel")
            if (table === null) {
                main.append(CRIAR__tabela_demontrativo_de_pagamento(demontrativo_de_pagamento))
            } else {
                table.remove()
                main.append(CRIAR__tabela_demontrativo_de_pagamento(demontrativo_de_pagamento))
            }
        } else {
            if (table === null) {
                main.append(CRIAR__tabela_demontrativo_de_pagamento(demontrativo_de_pagamento))
            } else {
                table.remove()
                main.append(CRIAR__tabela_demontrativo_de_pagamento(demontrativo_de_pagamento))
            }
        }
    }, 1000)
}