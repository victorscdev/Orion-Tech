import { FORMATAR__numero_em_dinheiro } from "../../model/global_functions.js";

export function CRIAR__tabela_funcionarios(array) {
    const table = document.createElement('table')
    table.classList.add("table", "table-striped", "table-hover")
    table.id = "table_employee"

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Nome do Funcionario</th>
                <th>Data de Admissão</th>
                <th>Valor por Hora(R$)</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((employee) => `
            <tr class="table-secondary">
                <td>${employee.nome}</td>
                <td>${employee.data_admissao}</td>
                <td>${FORMATAR__numero_em_dinheiro(employee.vlr_hora)}</td>
            </tr>  
            `).join('')}
        </tbody>
        `;

    return table
}

export function ATUALIZAR__tabela_funcionarios(array) {
    const table = document.getElementById("table_employee")
    table.classList.add("table", "table-striped", "table-dark", "table-hover")
    
    table.innerHTML = "";

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Nome do Funcionario</th>
                <th>Data de Admissão</th>
                <th>Valor por Hora(R$)</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((employee) => `
            <tr class="table-secondary">
                <td>${employee.nome}</td>
                <td>${employee.data_admissao}</td>
                <td>${FORMATAR__numero_em_dinheiro(employee.vlr_hora)}</td>
            </tr>  
            `).join('')}
        </tbody>
    `;
}

export function CRIAR__tabela_demonstrativo_de_ferias(array) {
    const table = document.createElement('table')
    table.classList.add("table", "table-striped", "table-hover")
    table.id = "table_demonstrativo"

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Data de Admissao</th>
                <th>Data de Ferias</th>
                <th>Data Limite</th>
                <th>Data de Inicio</th>
                <th>Data de Fim</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((demonstrativo) => `
            <tr class="table-secondary">
                <td>${demonstrativo.data_admissao}</td>
                <td>${demonstrativo.data_ferias}</td>
                <td>${demonstrativo.data_limite}</td>
                <td>${demonstrativo.data_inicio}</td>
                <td>${demonstrativo.data_fim}</td>
            </tr>  
            `).join('')}
        </tbody>
        `;

    return table
}