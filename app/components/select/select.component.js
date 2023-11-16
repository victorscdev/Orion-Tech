export function CRIAR__select_funcionarios(array) {
    const select = document.createElement("select")
    select.classList.add("form-select")
    select.id = "select_funcionarios"
    select.setAttribute("aria-label", "select demonstrativo de ferias")

    array.forEach(({ nome, id_funcionario }) => {
        select.append(CRIAR__options(nome, id_funcionario))
    });

    return select
}

export function CRIAR__select_data() {
    const formGroup = document.createElement("div")
    formGroup.classList.add("form-group", "form-select")
    formGroup.innerHTML = `
        <label for="inputData" class="form-label">Selecione o Mês e o Ano:</label>
        <input type="data" id="inputData" class="form-control" placeholder="MM/AAAA"></input>
    `

    return formGroup
}

function CRIAR__options(text, id) {
    const option = document.createElement("option")
    option.value = id
    option.innerText = text

    return option
}