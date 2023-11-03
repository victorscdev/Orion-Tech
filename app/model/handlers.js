// GLOBAL FUNCTIONS
import { HTML__adiciona_info_page_na_main, HTML__ativar_nav_link } from "./global_functions.js";
import { HTML__adiciona_info_de_funcionarios } from "../pages/employees/employees.pages.js";
import { HTML__adiciona_info_de_demonstrativo_ferias } from "../pages/vacation_statement/vacation_statement.pages.js";

export function LER__home_inicial(title) {
    HTML__ativar_nav_link(title)
    HTML__adiciona_info_page_na_main("")
}

export function LER__home(evento) {
    HTML__ativar_nav_link(evento.target.textContent)
    HTML__adiciona_info_page_na_main("")
}

export async function LER__funcionarios(evento) {
    HTML__ativar_nav_link(evento.target.textContent)
    HTML__adiciona_info_page_na_main(await HTML__adiciona_info_de_funcionarios())    
}

export async function LER__demonstratvo_de_ferias(evento) {
    HTML__ativar_nav_link(evento.target.textContent)

    const HTML__h1 = document.createElement('h1')
    HTML__h1.innerText = 'Demonstrativo de Ferias'
    
    HTML__adiciona_info_page_na_main(await HTML__adiciona_info_de_demonstrativo_ferias())
    
}


export class Handlers {
    constructor() {}

    async get_employee(event) {
        const _employeesPages = new EmployeesPages();
        const _globalFunctions = new GlobalFunctions();

        _globalFunctions.HTML__active_li(event.target.textContent)
        
        _globalFunctions.HTML__clear_main_and_add_info_main(await _employeesPages.HTML__add_tags_employee())
        
    }

    async get_apontamento_horas(event) {
        const _globalFunctions = new GlobalFunctions();

        _globalFunctions.HTML__active_li(event.target.textContent)
        
        const HTML__h1 = document.createElement('h1')
        HTML__h1.innerText = 'Apontamento de Horas'
        
        _globalFunctions.HTML__clear_main_and_add_info_main(await HTML__add_tags_apontamento_horas())
        
    }
    
    // get_payments(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Pagamentos'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_deductions(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Deduções'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_benefits(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
        
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Beneficios'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
    
    // get_time_sheet(event) {
    //     const _globalFunctions = new GlobalFunctions();

    //     _globalFunctions.HTML__active_li(event.target.textContent)
    
    //     const HTML__h1 = document.createElement('h1')
    //     HTML__h1.innerText = 'Folha de Ponto'
    
    //     _globalFunctions.HTML__clear_main_and_add_info_main(HTML__h1)
    // }
}