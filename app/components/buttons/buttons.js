export function HTML__botao_novo_funcionario(event) {
    const btn__register = document.createElement('button')
    btn__register.classList.add('btn_register')
    btn__register.addEventListener('click', event)

    btn__register.innerText = 'Cadatrar';

    return btn__register
}

export function HTML__botao_gerar_demonstrativo_ferias_por_funcionario(event) {
    const btn__gerar_demonstrativo = document.createElement('button')
    btn__gerar_demonstrativo.classList.add('btn_gerar_demonstrativo')
    btn__gerar_demonstrativo.addEventListener('click', event)

    btn__gerar_demonstrativo.innerText = 'Gerar demonstrativo';

    return btn__gerar_demonstrativo
}

export function HTML__botao_gerar_apontamento_horas(event) {
    const btn__gerar_apontamento = document.createElement('button')
    btn__gerar_apontamento.classList.add('btn_gerar_apontamento')
    btn__gerar_apontamento.addEventListener('click', event)

    btn__gerar_apontamento.innerText = 'Gerar Apontamento';

    return btn__gerar_apontamento
}

export function HTML__botao_gerar_calculo_de_folha(event) {
    const btn__gerar_calculo_de_folha = document.createElement('button')
    btn__gerar_calculo_de_folha.classList.add('btn_gerar_calculo_de_folha')
    btn__gerar_calculo_de_folha.addEventListener('click', event)

    btn__gerar_calculo_de_folha.innerText = 'Gerar Calculo de Folha';

    return btn__gerar_calculo_de_folha
}