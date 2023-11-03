// HANDLERS
import { 
    LER__funcionarios,
    LER__home,
    LER__demonstratvo_de_ferias,
    LER__apontamento_horas
 } from "./handlers.js"

// import { Handlers } from "./handlers.js"

// const _handlers = new Handlers()

export const array_header = [
    {
        id: "home",
        title: 'Home',
        handler: LER__home
    },
    {
        id: "funcionarios",
        title: 'Funcionarios',
        handler: LER__funcionarios
    },
    {
        id: "apontamento_horas",
        title: "Apontamento de Horas",
        handler: LER__apontamento_horas
    },
    {
        id: "demonstrativo_ferias",
        title: "Demonstrativo de Ferias",
        handler: LER__demonstratvo_de_ferias
    },
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