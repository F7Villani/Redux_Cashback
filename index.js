const criarContato = (nome, taxa) => {
    return {
        type: "CRIAR_CONTRATO",
        payload: {
            nome,
            taxa
        }
    }
}

const  cancelarContrato = (nome) => {
    return {
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }
    }
}

const solicitarCashback = (nome, valor) => {
    return {
        type: "CASHBACK",
        payload: {
            nome,
            valor
        }
    }
}

// essa funcao é um reducer
const historicoDePedidosDeCahsback = (historicoDePedidosDeCahsbackAtual = [], acao) => {
    if(acao.type === "CASHBACK"){
        return [...historicoDePedidosDeCahsbackAtual, acao.payload];
    }
    return [...historicoDePedidosDeCahsbackAtual];
}

// essa funcao é um reducer
const caixa = (dinheiroEmCaixa = 0, acao) => {
    if(acao.type === "CASHBACK")
        dinheiroEmCaixa -= acao.payload.valor;
    if(acao.type === "CRIAR_CONTRATO")
        dinheiroEmCaixa += acao.payload.taxa;
    return dinheiroEmCaixa;
}

// essa funcao é um reducer
const contratos = (listaDeContratosAtual = [], acao) => {
    if(acao.type === "CRIAR_CONTRATO")
        listaDeContratosAtual = [...listaDeContratosAtual, acao.payload]
    if(acao.type === "CANCELAR_CONTRATO")
    listaDeContratosAtual = listaDeContratosAtual.filter(c => c.nome !== acao.payload.nome);
    return listaDeContratosAtual;
}

