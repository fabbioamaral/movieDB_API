//Variáveis Globais
const btnBuscarFilmes = document.getElementById('btnBuscar');
const filmesDiv = document.getElementById('rowFilmesEncontrados'); 
let filmeContainerHTML=filmesDiv.innerHTML;
const inputBusca = document.getElementById('inputBusca');
var queryBusca;
const requestAPI='https://api.themoviedb.org/3/search/movie?api_key=1d4552661ad674570c75b83c5f275edf&language=pt-br&page=1&query=';



/* FETCH API */

//Botão Para Buscar Filmes
btnBuscarFilmes.addEventListener('click', ()=>{
    
    
    queryBusca=inputBusca.value;
    if (queryBusca){
        let url = requestAPI+queryBusca;    

        fetch(url)
        .then(res => res.json())
        .then(res=> buscarFilmes(res.results))        
    }         
    
});

//Começar a buscar a medida que o usuário digita na barra de buscar
inputBusca.addEventListener('keyup',()=>{
    queryBusca=inputBusca.value;
    if (queryBusca){
        let url = requestAPI+queryBusca;    

        fetch(url)
        .then(res => res.json())
        .then(res=> buscarFilmes(res.results))        
    }  
});


function buscarFilmes(filmes){    
    filmesDiv.innerHTML='';
    filmeContainerHTML='';
    if(filmes.length==20){ 
         
        for (let i=0; i<19;i++){
            filmeContainerHTML += `
            <div class="col-12 col-md-6 col-lg-3 filmesEncontradosDivCards">
                <div class="card" style="width: 100%;">
                    <img src="https://image.tmdb.org/t/p/w500${filmes[i].backdrop_path}" class="card-img-top" alt="Filme Popular">
                    <div class="card-body">
                        <h5 class="card-title">${filmes[i].original_title}</h5>
                        <p class="card-text">${filmes[i].overview}</p>
                        <a href="https://www.themoviedb.org/movie/${filmes[i].id}" target="_blank" class="btn btn-dark">Ver Detalhes</a>
                    </div>
                </div>
            </div>          
            
            `
        }
    filmesDiv.innerHTML=filmeContainerHTML;
    } else {
        
        for (let i=0; i<filmes.length;i++){
            filmeContainerHTML += `
            <div class="col-12 col-md-6 col-lg-3 filmesEncontradosDivCards">
                <div class="card" style="width: 100%;">
                ${filmes[i].backdrop_path ? `<img src="https://image.tmdb.org/t/p/w500${filmes[i].backdrop_path}" class="card-img-top" alt="Filme Popular">` : ''} 
                    <div class="card-body">
                        <h5 class="card-title">${filmes[i].original_title}</h5>
                        <p class="card-text">${filmes[i].overview}</p>
                        <a href="https://www.themoviedb.org/movie/${filmes[i].id}" target="_blank" class="btn btn-dark">Ver Detalhes</a>
                    </div>
                </div>
            </div>          
            
            `
        }
    filmesDiv.innerHTML=filmeContainerHTML; 
    }

}
