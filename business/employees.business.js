// import { GlobalFunctions } from "../model/global_functions.js";
// import { EmployeesService } from "../services/employees.service.js";
// import { DialogHTML } from "../components/HTML/dialogs/dialogs.js";
// import { TablesHTML } from "../components/HTML/tables/tables.js";

import { db_create, db_read, db_create_response, db_read_response } from "../services/employees.service.js"
import { FECHAR__modal_novo_funcionario } from "../app/components/dialogs/dialogs.js";
import { ATUALIZAR__tabela_funcionarios } from "../app/components/tables/tables.js";
import { FORMATAR__data } from "../app/model/global_functions.js";

export let read_data;

export async function create(employee) {
    for (let key in employee) {
        if (
            employee[key] === "" ||
            employee[key] === null ||
            employee[key] === 0
        ) {
            return alert(`Preencha o campo "${key}" corretamente`)
        }
    }

    await db_create(set_new(employee));

    if(db_create_response.ok) {
       await db_read()
        
        FECHAR__modal_novo_funcionario()
        ATUALIZAR__tabela_funcionarios(db_read_response)
    }
}

export async function read() {
    await db_read()

    const response = db_read_response

    if (!response.length) {
        alert(`error na listagem de funcionarios`)
        read_data = db_read_response
    } else {
        read_data = db_read_response
    }
}

function set_new(information) {
    const info = {
        nome: information.nome,
        data_admissao: FORMATAR__data(information.data_admissao),
        vlr_hora: information.vlr_hora,
    }

    return info
}
function set_salary_deduction(wage, deduction) {
    return wage - deduction
}

function set_net_salary(wage) {
    if (wage > 0 && wage < 2112) return wage
    else if (wage > 2112.01 && wage < 2826.65) return wage - (wage * (7.5 / 100))
    else if (wage > 2826.66 && wage < 3751.05) return wage - (wage * (15.0 / 100))
    else if (wage > 3751.06 && wage < 4664.68) return wage - (wage * (22.5 / 100))
    else if (wage > 4664.68) return wage - (wage * (27.5 / 100))
}