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

export function CRIAR__tabela_apontamento_horas(array) {
    const table = document.createElement('table')
    table.classList.add("table", "table-striped", "table-hover")
    table.id = "table_apontamento"

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Data</th>
                <th>Entrada</th>
                <th>Saida</th>
                <th>intervalo</th>
                <th>Horas Trabalhadas</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((apontamento) => `
            <tr class="table-secondary">
                <td>${apontamento.data_dia}</td>
                <td>${apontamento.hora_entrada}</td>
                <td>${apontamento.hora_saida}</td>
                <td>${apontamento.intervalo}</td>
                <td>${apontamento.horas_trabalhadas}</td>
            </tr>  
            `).join('')}
        </tbody>
        `;

    return table
}

export function CRIAR__tabela_calculo_de_folha(array) {
    const table = document.createElement('table')
    table.classList.add("table", "table-striped", "table-hover")
    table.id = "table_calculo_de_floha"

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Valor Hora(R$)</th>
                <th>Qtds de Horas Trabalhadas</th>
                <th>Salario Bruto(R$)</th>
                <th>Desconto do INSS(R$)</th>
                <th>Desconto do IR(R$)</th>
                <th>Salario Liquido(R$)</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((calculo_folha) => `
            <tr class="table-secondary">
                <td>${FORMATAR__numero_em_dinheiro(calculo_folha.valor_hora)}</td>
                <td>${calculo_folha.quantidade_horas}h</td>
                <td>${FORMATAR__numero_em_dinheiro(calculo_folha.salario_bruto)}</td>
                <td>${FORMATAR__numero_em_dinheiro(calculo_folha.desconto_inss)}</td>
                <td>${FORMATAR__numero_em_dinheiro(calculo_folha.desconto_ir)}</td>
                <td>${FORMATAR__numero_em_dinheiro(calculo_folha.salario_liquido)}</td>
            </tr>  
            `).join('')}
        </tbody>
        `;

    return table
}

export function CRIAR__tabela_demontrativo_de_pagamento(array) {
    const table = document.createElement('table')
    table.classList.add("table", "table-striped", "table-hover")
    table.id = "table_demontrativo_de_pagamento"

    table.innerHTML = `
        <thead>
            <tr class="table-dark">
                <th>Descrição</th>
                <th>Referencia</th>
                <th>Vencimentos</th>
                <th>Descontos</th>
            </tr>
        </thead>
        <tbody>
            ${array.map((demonstrativo) => `
                <tr class="table-secondary">
                    <td>Salario(Bruto)</td>
                    <td>${demonstrativo.dias_trabalhadas}d</td>
                    <td>${FORMATAR__numero_em_dinheiro(demonstrativo.salario_bruto)}</td>
                    <td></td>
                </tr>
                <tr class="table-secondary">
                    <td>INSS</td>
                    <td>${demonstrativo.desconto_inss_porcentagem}</td>
                    <td></td>
                    <td>${FORMATAR__numero_em_dinheiro(demonstrativo.desconto_inss)}</td>
                </tr>
                <tr class="table-secondary">
                    <td>IRFF</td>
                    <td>${demonstrativo.desconto_ir_porcentagem}</td>
                    <td></td>
                    <td>${FORMATAR__numero_em_dinheiro(demonstrativo.desconto_ir)}</td>
                </tr>
            `).join('')}
        </tbody>
        <tfooter>
            ${array.map((demonstrativo) => `
            <tr class="table-dark">
                <th></th>
                <th>Total de Vencimentos</th>
                <th>Total de Descontos</th>
                <th>Valor Liquido</th>
            </tr>
            <tr class="table-warning">
                <td></td>
                <td>${FORMATAR__numero_em_dinheiro(demonstrativo.salario_bruto)}</td>
                <td>${FORMATAR__numero_em_dinheiro(demonstrativo.desconto_inss + demonstrativo.desconto_ir)}</td>
                <td>${FORMATAR__numero_em_dinheiro(demonstrativo.salario_liquido)}</td>
            </tr>
            `).join('')}
        </tfooter>
        `;

    return table
}