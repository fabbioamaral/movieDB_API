//Variáveis Globais
const btnCarregarMaisFilmesPopulares = document.getElementById('btnCarregarMaisFilmesPopulares');
let filmesDiv = document.getElementById('rowFilmesPopulares');      
let filmeContainerHTML=filmesDiv.innerHTML;
var controladorFor=0;


/* Fetch API */

//Carregar os 4 primeiros ao carregar a página
window.onload=carregarInfoFilmes;

//Botão Carregar Mais Filmes
btnCarregarMaisFilmesPopulares.addEventListener('click', ()=>{
    if (filmesDiv.getElementsByClassName('filmesPopularesDivCards').length<19){
        carregarInfoFilmes();
    }    
});

function carregarInfoFilmes (){
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=1d4552661ad674570c75b83c5f275edf&language=pt-BR&page=1')
    .then(res => res.json())
    .then(res=> exibirFilmes(res.results))
}

/* Definição da função utilizada na requisição */

function exibirFilmes(filmes){

    if (filmeContainerHTML==''){
        filmeContainerHTML='';
        for (let i=0; i<4;i++){
            filmeContainerHTML += `
            <div class="col-12 col-md-6 col-lg-3 filmesPopularesDivCards">
                <div class="card" style="width: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${filmes[i].backdrop_path}" class="card-img-top" alt="Filme Popular">
                     <div class="card-body">
                        <h5 class="card-title">${filmes[i].original_title}</h5>
                        <p class="card-text">${filmes[i].overview}</p>
                        <a href="https://image.tmdb.org/t/p/w500${filmes[i].poster_path}" class="btn btn-dark">Visualizar poster</a>
                    </div>
                 </div>
            </div>          
            
            `
        }
        filmesDiv.innerHTML=filmeContainerHTML;

    } else {
        controladorFor+=4;
        for (let i=controladorFor; i<controladorFor+4 && i<19;i++){
            filmeContainerHTML += `
            <div class="col-12 col-md-6 col-lg-3 filmesPopularesDivCards">
                <div class="card" style="width: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${filmes[i].backdrop_path}" class="card-img-top" alt="Filme Popular">
                     <div class="card-body">
                        <h5 class="card-title">${filmes[i].original_title}</h5>
                        <p class="card-text">${filmes[i].overview}</p>
                        <a href="https://image.tmdb.org/t/p/w500${filmes[i].poster_path}" class="btn btn-dark">Visualizar poster</a>
                    </div>
                 </div>
            </div>            
            
            `
        }
        filmesDiv.innerHTML=filmeContainerHTML;        
    } 
}