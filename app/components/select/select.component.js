export function CRIAR__select_funcionarios(array) {
    const select = document.createElement("select")
    select.classList.add("form-select")
    select.id = "select_funcionarios"
    select.setAttribute("aria-label", "select demonstrativo de ferias")

    array.forEach(({nome, id_funcionario}) => {
        select.append(CRIAR__options(nome, id_funcionario))
    });

    return select
}

function CRIAR__options(text, id) {
    const option = document.createElement("option")
    option.value = id
    option.innerText = text

    return option
}