// HANDLERS
import { 
    LER__funcionarios,
    LER__home,
    LER__demonstratvo_de_ferias
 } from "./handlers.js"

// import { Handlers } from "./handlers.js"

// const _handlers = new Handlers()

export const array_header = [
    {
        title: 'Home',
        handler: LER__home
    },
    {
        title: 'Funcionarios',
        handler: LER__funcionarios
    },
    {
        title: "Demonstrativo de Ferias",
        handler: LER__demonstratvo_de_ferias
    },
    // {
    //     title: 'Apontamento de Horas',
    //     // handler: _handlers.get_apontamento_horas
    // }
    // {
    //     name: 'pagamentos',
    //     title: 'Pagamentos',
    //     handler: _handlers.get_payments
    // },
    // {
    //     name: 'deducoes',
    //     title: 'Deduções',
    //     handler: _handlers.get_deductions
    // },
    // {
    //     name: 'beneficios',
    //     title: 'Beneficios',
    //     handler: _handlers.get_benefits
    // },
    // {
    //     name: 'folha_ponto',
    //     title: 'Folha de Pagamento',
    //     handler: _handlers.get_time_sheet
    // },
]

export const array_employees = [
    {
        name: '',
        office: '',
        departament: '',
        wage: 0,
        benefits: '',
        deductions: 0,
        net_salary: 0,
    },
    {
        name: 'Victor Santana Costa',
        office: 'Software engineer',
        departament: 'Payments',
        wage: 10000,
        benefits: 'VR, VT',
        deductions: 2000,
        net_salary: 8000,
    }
]

export const array_form_employees = [
    {
        label: 'Nome do Funcionario',
        for: 'nome',
        type: 'text'
    },
    {
        label: 'Data de Admissão',
        for: 'data_admissao',
        type: 'date'
    },
    {
        label: 'Valor por Hora',
        for: 'vlr_hora',
        type: 'number'
    },
]