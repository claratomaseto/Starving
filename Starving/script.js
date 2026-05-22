const formulario = document.getElementById('meuFormulario');
//document.getElementById é uma função que pega o elemento html pelo id.

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
//add.EventListener: Espera o botão ser clicado para começar um evento (Escutador).              
//evento.preventDefault(): Não recarrega a página.

    const novo = { //Cria uma const.
        titulo: document.getElementById('titulo').value,
        imagem: document.getElementById('imagem').value,
        //descricaoIm: document.getElementById('descricao').value,
        texto: document.getElementById('paragrafo').value
    };

    const novoCard = `
        <div class = "card"> 
            <div class = "letras>
                <h3 id="titulo">${novo.titulo}</h3>
                <p>${novo.texto}</p>
            </div>
            <div class = "img">
                <img src="${novo.imagem}"/>
            </div>
        </div>
        `;//Injetar no nosso código html


    colecao.innerHTML += novoCard;
    formulario.reset(); //limpa o formulario

    });

    function fazerFruta(fruta){
        const resultado = "Suco de "+ fruta;
        return resultado;
    }

    const meuCopo = fazerFruta('banana');
    console.log(meuCopo);