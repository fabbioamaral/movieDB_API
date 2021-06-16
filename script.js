//Variáveis Globais
const btnCarregarMaisFilmesPopulares = document.getElementById('btnCarregarMaisFilmesPopulares');

function carregarInfoFilmes (){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1d4552661ad674570c75b83c5f275edf&language=pt-BR&page=1')
    .then(res => res.json())
    .then(res=> exibirFilmes(res.results))
}

function exibirFilmes(filmes){
    let filmesDiv = document.getElementById('rowFilmesPopulares');
    let filmeContainerHTML='';

    for (let i=0; i<4;i++){

        filmeContainerHTML += `
        <div class="col-12 col-md-6 col-lg-3 filmesPopularesDivCards">
            <div class="card" style="width: 100%;">
                <img src="https://image.tmdb.org/t/p/w500 + ${filmes[i].backdrop_path}" class="card-img-top" alt="Filme Popular">
                 <div class="card-body">
                    <h5 class="card-title">${filmes[i].original_title}</h5>
                    <p class="card-text">${filmes[i].overview}</p>
                    <a href="https://image.tmdb.org/t/p/w500 + ${filmes[i].poster_path}" class="btn btn-dark">Visualizar poster</a>
                </div>
             </div>
        </div>
        
        
        `
    }

    filmesDiv.innerHTML=filmeContainerHTML;

}









function adicionarMaisFilmesPopulares(){
    //ao clicar no botão carregar mais, popular com mais 4 cards de filme (máximo: 21) 
}