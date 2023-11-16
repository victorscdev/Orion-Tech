// GLOBAL FUNCTIONS
import { HTML__adiciona_info_page_na_main, HTML__ativar_nav_link } from "./global_functions.js";
import { HTML__adiciona_info_de_funcionarios } from "../pages/employees/employees.pages.js";
import { HTML__adiciona_info_de_demonstrativo_ferias } from "../pages/vacation_statement/vacation_statement.pages.js";
import { HTML__adiciona_info_de_apontamento_horas } from "../pages/timekeeping/timekeeping.pages.js";
import { HTML__adiciona_info_de_calculo_de_folha } from "../pages/sheet_calculation/sheet_calculation.pages.js";

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
    HTML__adiciona_info_page_na_main(await HTML__adiciona_info_de_demonstrativo_ferias())
}

export async function LER__apontamento_horas(evento) {
    HTML__ativar_nav_link(evento.target.textContent)
    HTML__adiciona_info_page_na_main(await HTML__adiciona_info_de_apontamento_horas())
}

export async function LER__calculo_de_folha(evento) {
    HTML__ativar_nav_link(evento.target.textContent)
    HTML__adiciona_info_page_na_main(await HTML__adiciona_info_de_calculo_de_folha())
}