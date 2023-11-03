import { HTML__form_control } from "../forms/forms.js";
import { array_form_employees } from "../../model/constants.js";
import { create } from "../../../business/employees.business.js";

function CRIAR__modal_novo_funcionario() {
    let create__dialog = document.createElement('dialog');
    create__dialog.id = 'DIALOG__new_employee';

    create__dialog.innerHTML = `
        <div class="HEADER__dialog">
            <h2>Título do Diálogo</h2>
        </div>
        <hr />
        <div class="BODY__dialog">
            <div class="FORM__group">
                ${array_form_employees.map((employee) => `${HTML__form_control(employee)}`).join('')}
            </div>
        </div>
        <hr />
        <div class="FOOTER__dialog">
            <button id="CLOSE__dialog">Fechar</button>
            <button class="btn_save" id="SAVE__dialog">Salvar</button>
        </div>
    `;

    return create__dialog
}

export function ABRIR__modal_novo_funcionario() {
    const dialog = CRIAR__modal_novo_funcionario()
    document.body.appendChild(dialog)

    const BTN__close_dialog = document.getElementById('CLOSE__dialog');
    const BTN__save_dialog = document.getElementById('SAVE__dialog');

    BTN__close_dialog.addEventListener('click', FECHAR__modal_novo_funcionario)
    BTN__save_dialog.addEventListener('click', SALVAR__modal_novo_funcionario)

    dialog.showModal()
}

export function FECHAR__modal_novo_funcionario() {
    const dialog = document.getElementById('DIALOG__new_employee');
    if (dialog) {
        dialog.close();
        dialog.remove();
    }
}

function SALVAR__modal_novo_funcionario() {
    let objectPayload = {};
    const formEmployee = document.querySelectorAll("#DIALOG__new_employee .BODY__dialog .FORM__group input")
    
    for (let index = 0; index < formEmployee.length; index++) {
        const element = formEmployee[index];
        objectPayload[element.name] = element.value
        
    }

    create(objectPayload)
}