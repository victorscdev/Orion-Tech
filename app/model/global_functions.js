export function HTML__adiciona_info_page_na_main(info) {
    const HTML__container = document.querySelector('main .container')
    HTML__container.innerHTML = '';

    HTML__container.append(info)
}

export function HTML__ativar_nav_link(text) {
    const li = document.querySelectorAll("nav .navbar-nav .nav-item .nav-link")
    li.forEach((element) => {
        if (element.textContent === text) element.classList.add('active')
        else element.classList.remove('active')
    })
}

export function FORMATAR__numero_em_dinheiro(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(value);
}

export function FORMATAR__data(dataString) {
    const data = new Date(dataString);
    const dia = String(data.getDate() + 1).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

export function FORMAT__number_to_money(value) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    return formatter.format(value);
}

export function ORDENAR__arrayd_de_objetos_por_nome(array) {
    return array.sort((a, b) => a.nome.localeCompare(b.nome));
}

