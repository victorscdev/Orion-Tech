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