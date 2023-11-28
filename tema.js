const filmes = [
    { 
        nome: '007', 
        imagem: 'th (1).jpeg', 
        ano: 1962, 
        descricao: 'James Bond embarca em uma missão para salvar o mundo do vilão Dr. No.', 
        elogios: 'O filme recebeu aclamação da crítica pela atuação de Sean Connery e suas cenas de ação emocionantes.', 
        criticas: 'Alguns críticos apontaram a trama como clichê, mas destacaram a inovação do personagem James Bond.', 
        ondeAssistir: 'Disponível em plataformas de streaming.'
    },
    { 
        nome: 'Filme1', 
        imagem: 'VbgpQ.png', 
        ano: 2021, 
        descricao: 'Descrição do ', 
        elogios: 'Elogios ao ', 
        criticas: 'Críticas ao ', 
        ondeAssistir: 'Onde assistir ao ' 
    },
    { 
        nome: 'Filme2', 
        imagem: 'VbgpQ.png', 
        ano: 2023, 
        descricao: 'Descrição do ', 
        elogios: 'Elogios ao ', 
        criticas: 'Críticas ao ', 
        ondeAssistir: 'Onde assistir ao ' 
    },
    // Adicione mais filmes aqui
];

const series = [
    { 
        nome: 'The 100', 
        imagem: 'th (2).jpeg', 
        ano: 2014, 
        descricao: 'Uma série de ficção científica que segue um grupo de jovens enviados de volta à Terra após uma catástrofe nuclear.', 
        elogios: 'The 100 foi elogiada por sua trama envolvente, personagens complexos e representação diversificada.', 
        criticas: 'Algumas críticas mencionaram ritmo irregular em algumas temporadas, mas destacaram o desenvolvimento dos personagens.', 
        ondeAssistir: 'Disponível em plataformas de streaming.'
    },
    { 
        nome: 'Serie1', 
        imagem: 'VbgpQ.png', 
        ano: 2023, 
        descricao: 'Descrição da ', 
        elogios: 'Elogios à ', 
        criticas: 'Críticas à ', 
        ondeAssistir: 'Onde assistir à ' 
    },
    { 
        nome: 'Serie2', 
        imagem: 'VbgpQ.png', 
        ano: 2023, 
        descricao: 'Descrição da ', 
        elogios: 'Elogios à ', 
        criticas: 'Críticas à ', 
        ondeAssistir: 'Onde assistir à' 
    },
    // Adicione mais séries aqui
];

const animes = [
    { 
        nome: 'Konosuba', 
        imagem: 'th.jpeg', 
        ano: 2016, 
        descricao: 'Uma comédia de fantasia que segue Kazuma, um adolescente que é revivido em um mundo de fantasia e forma uma equipe peculiar para derrotar o Rei Demônio.', 
        elogios: 'Konosuba é elogiada por sua comédia inteligente, personagens únicos e subversão de tropos de isekai.', 
        criticas: 'Algumas críticas mencionaram a simplicidade da trama, mas destacaram o humor e a dinâmica do elenco.', 
        ondeAssistir: 'Disponível em plataformas de streaming.'
    },
    { 
        nome: 'Anime1', 
        imagem: 'VbgpQ.png', 
        ano: 2023, 
        descricao: 'Descrição do ', 
        elogios: 'Elogios ao ', 
        criticas: 'Críticas ao ', 
        ondeAssistir: 'Onde assistir ao ' 
    },
    { 
        nome: 'Anime2', 
        imagem: 'VbgpQ.png',  
        ano: 2023, 
        descricao: 'Descrição do ', 
        elogios: 'Elogios ao ', 
        criticas: 'Críticas ao ', 
        ondeAssistir: 'Onde assistir ao '
    },
    // Adicione mais animes aqui
];

// Função para mostrar detalhes na mesma página
function mostrarDetalhes(nome) {
    const detalhesDiv = document.getElementById('detalhes');
    detalhesDiv.innerHTML = '';

    const elemento = [...filmes, ...series, ...animes].find(item => item.nome === nome);

    if (elemento) {
        const detalheItem = document.createElement('div');
        detalheItem.classList.add('detalhe-item');

        const imagem = document.createElement('img');
        imagem.src = elemento.imagem;
        imagem.alt = elemento.nome;

        const titulo = document.createElement('h2');
        titulo.textContent = elemento.nome;

        const ano = document.createElement('p');
        ano.textContent = `Ano de Lançamento: ${elemento.ano || 'Não informado'}`;

        const descricao = document.createElement('p');
        descricao.textContent = `Descrição: ${elemento.descricao || 'Não informado'}`;

        const elogios = document.createElement('p');
        elogios.textContent = `Elogios: ${elemento.elogios || 'Não informado'}`;

        const criticas = document.createElement('p');
        criticas.textContent = `Críticas: ${elemento.criticas || 'Não informado'}`;

        const ondeAssistir = document.createElement('p');
        ondeAssistir.textContent = `Onde Assistir: ${elemento.ondeAssistir || 'Não informado'}`;

        detalheItem.appendChild(imagem);
        detalheItem.appendChild(titulo);
        detalheItem.appendChild(ano);
        detalheItem.appendChild(descricao);
        detalheItem.appendChild(elogios);
        detalheItem.appendChild(criticas);
        detalheItem.appendChild(ondeAssistir);

        detalhesDiv.appendChild(detalheItem);
    }
}

// Função para realizar a pesquisa
function realizarPesquisa() {
    const termoPesquisa = document.getElementById('barra-pesquisa').value.toLowerCase();
    
    // Filtra os elementos que correspondem ao termo de pesquisa
    const resultados = [...filmes, ...series, ...animes].filter(item => item.nome.toLowerCase().includes(termoPesquisa));

    // Atualiza a exibição dos resultados (você pode ajustar conforme necessário)
    mostrarResultados(resultados);
}

// Função para mostrar os resultados da pesquisa
function mostrarResultados(resultados) {
    const conteudoDiv = document.getElementById('conteudo');
    conteudoDiv.innerHTML = '';

    resultados.forEach(elemento => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        const imagem = document.createElement('img');
        imagem.src = elemento.imagem;
        imagem.alt = elemento.nome;

        const titulo = document.createElement('h3');
        titulo.textContent = elemento.nome;

        itemDiv.appendChild(imagem);
        itemDiv.appendChild(titulo);

        // Adicione o evento de clique para mostrar detalhes
        itemDiv.addEventListener('click', () => mostrarDetalhes(elemento.nome));

        conteudoDiv.appendChild(itemDiv);
    });
}