const tamanhoCelula = 70;
let pecaId = 0;
document.body.append(criaTabuleiro());

function criaTabuleiro() {
    const tamanho = 8; //*tabuleiro 8x8
    let tabela = document.createElement('table'); //*CRIA TABELA

    tabela.style.borderStyle = 'solid'; //*property sets the style of an element's four borders.
                                        //*This property can have from one to four values.
    tabela.style.borderSpacing = 0;     //*property sets the distance between the borders of
                                        //*adjacent cells.
    tabela.style.margin = 'auto';       //*define a área de margem nos quatro lados do elemento.

    for (let i = 0; i < tamanho; i++) {
        let linha = document.createElement('tr'); //*CRIA 8 LINHA
        tabela.append(linha);
        for (let j = 0; j < tamanho; j++) {
            let celula = document.createElement('td'); //*CRIA 8 CASAS DENTRO DE CADA LINHA
            linha.append(celula);

            celula.style.width = `${tamanhoCelula}px`; //*define tamanho da casa
            celula.style.height = `${tamanhoCelula}px`;
            if (i % 2 == j % 2) {
                celula.style.backgroundColor = 'black'; //*celula preta
                if (i * 8 + j <= 24) { //!nao saquei a lógica k
                    celula.append(criaPeca('black')); //*coloca pecinha preta
                } else if (i * 8 + j >= 40) { //!idem acima
                    celula.append(criaPeca('red')); //*coloca pecinha vermelha
                }
            } else {
                celula.style.backgroundColor = 'white'; //*celula branca
            }
        }
    };
    return tabela;
}

function criaPeca(cor) {
    let imagem = document.createElement('img'); //*CRIA PECINHA
    imagem.setAttribute('src', `img/${cor}.png`); //*puxa a imagem 
    imagem.setAttribute('width', `${tamanhoCelula-4}px`); //*define tamanho da pecinha
    imagem.setAttribute('height', `${tamanhoCelula-4}px`);
    return imagem;
}