import { db_read__by_id_response, db_read_by_id } from "../services/employees.service.js"

export let demontrativo_de_pagamento = [] 

export async function FILTRAR__demontrativo_por_data_e_horas_trabalhadas(array, data, employeeID) {
    demontrativo_de_pagamento = []
    let count = 0
    array.forEach((element) => {
        if (CRIAR__data_com_mes_e_ano(element.data_dia) === data) {
            if (element.horas_trabalhadas === "08:00") {
                count++
            }
        }
    })

    if (count !== 0) {
        await db_read_by_id(employeeID)
        demontrativo_de_pagamento.push(GERAR__demonstrativo(db_read__by_id_response.vlr_hora, count))
    }
}

function GERAR__demonstrativo(vlr_hora, qtds_vezes_trabalhadas) {
    const valor_hora = Number(vlr_hora)
    const quantidade_horas = 8 * qtds_vezes_trabalhadas;
    const salario_bruto = valor_hora * quantidade_horas;
    const desconto_inss = GERAR__desconto_inss(salario_bruto)
    const desconto_inss_porcentagem = GERAR__desconto_inss_porcentagem(salario_bruto)
    const desconto_ir = GERAR__desconto_ir(salario_bruto, desconto_inss)
    const desconto_ir_porcentagem = GERAR__desconto_ir_porcentagem(salario_bruto, desconto_inss)
    const salario_liquido = GERAR__salario_liquido(salario_bruto, desconto_inss, desconto_ir)

    return {
        dias_trabalhadas : qtds_vezes_trabalhadas,
        salario_bruto: salario_bruto,
        desconto_inss: desconto_inss,
        desconto_inss_porcentagem: desconto_inss_porcentagem,
        desconto_ir: desconto_ir,
        desconto_ir_porcentagem: desconto_ir_porcentagem,
        salario_liquido: salario_liquido,
    }
}

function GERAR__desconto_inss(salario) {
    const faixasINSS = [
      { faixa: 1320, aliquota: 0.075 },
      { faixa: 2571.29, aliquota: 0.09 },
      { faixa: 3856.94, aliquota: 0.12 },
      { faixa: 7507.49, aliquota: 0.14 }
    ];
  
    const tetoINSS = 876.97;
  
    let inss = 0;
  
    for (const faixa of faixasINSS) {
      if (salario <= faixa.faixa) {
        inss += salario * faixa.aliquota;
        break;
      } else {
        inss += faixa.faixa * faixa.aliquota;
        salario -= faixa.faixa;
      }
    }
  
    inss = Math.min(inss, tetoINSS);
  
    return inss;
  }

function GERAR__desconto_inss_porcentagem(salario) {
    if (salario <= 1302) return "7.5%"
    else if (salario >= 1302.01 && salario <= 2571.29) return "9%"
    else if (salario >= 2571.30 && salario <= 3856.94) return "12%"
    else return "14%"

}

function GERAR__desconto_ir(salario, inss) {
    const salario_descontado = (salario - inss);

    if (salario_descontado <= 2112) return 0
    else if (salario_descontado >= 2112.01 && salario_descontado <= 2826.65) return salario_descontado * (7.5 / 100)
    else if (salario_descontado >= 2826.66 && salario_descontado <= 3751.05) return salario_descontado * (15 / 100)
    else if (salario_descontado >= 3751.06 && salario_descontado <= 4664.68) return salario_descontado * (22.5 / 100)
    else return salario_descontado * (27.5 / 100)
}

function GERAR__desconto_ir_porcentagem(salario, inss) {
    const salario_descontado = (salario - inss);

    if (salario_descontado <= 2112) return "Isento"
    else if (salario_descontado >= 2112.01 && salario_descontado <= 2826.65) return "7.5%"
    else if (salario_descontado >= 2826.66 && salario_descontado <= 3751.05) return "15%"
    else if (salario_descontado >= 3751.06 && salario_descontado <= 4664.68) return "22.5%"
    else return "27.5%"
}

function GERAR__salario_liquido(salario_bruto, desconto_inss, desconto_ir) {
    return salario_bruto - (desconto_inss + desconto_ir)
}

function CRIAR__data_com_mes_e_ano(data) {
    const partes = data.split('/');
    const mes = partes[1];
    const ano = partes[2];

    return `${mes}/${ano}`;
}