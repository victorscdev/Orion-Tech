import { HTML__botao_novo_funcionario } from "../../components/buttons/buttons.js"
import { read, read_data } from "../../../business/employees.business.js"
import { CRIAR__tabela_funcionarios } from "../../components/tables/tables.js"
import { ABRIR__modal_novo_funcionario } from "../../components/dialogs/dialogs.js"

export async function HTML__adiciona_info_de_funcionarios() {
    await read()

    const div = document.createElement('div')
    div.append(HTML__botao_novo_funcionario(EVENTO__abrir_modal), CRIAR__tabela_funcionarios(read_data))

    return div
}

function EVENTO__abrir_modal() {
    ABRIR__modal_novo_funcionario()
}