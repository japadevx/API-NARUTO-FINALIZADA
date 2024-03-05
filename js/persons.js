const UrlParams = new URLSearchParams(window.location.search);
let ParamsFinal = UrlParams.get('namech')

document.addEventListener('DOMContentLoaded', () => {

    const apiUrl = 'https://dattebayo-api.onrender.com/characters';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
                getCharacter(data.characters);
        }) 
        .catch(error => {
            console.error('Erro ao obter personagens:', error);
        });

})


function getCharacter(characters) {
    const containerAnime = document.getElementById('personcharacter');
    console.log(containerAnime)
    containerAnime.innerHTML = '';

    try {
        characters.forEach((character) => {
            if(character.name == ParamsFinal ){
            const divCharacters = document.createElement('div');

            divCharacters.innerHTML = `
                <div class='containerCharacter'>
                    <img src="${character.images[0]}" alt="${character.name} "/>
                    <div class='box-info-person'>
                        <p class="name-person">${character.name}</p
                        <br>
                        <h3 class="tool-title" >Ferramentas : </h3>
                        <br>
                        <p class="tools-person">${character.tools}</p
                        <br>
                        <br>
                        <h3 class="jutsu-title" >Jutsus : </h3>
                        <br>
                        <p class="jutsu-person">${character.jutsu}</p
                        <br>
                        <br>
                        <h3 class="type-title" >Tipo : </h3>
                        <br>
                        <p class="type-person">${character.natureType}</p
                        

                    </div>
                </div>
            `;
        
            containerAnime.appendChild(divCharacters);

            console.log('Dados dentro do forEach:', character);
        }
        });
    } catch (err) {
        console.error("Error detectado: ", err);
    }
    console.log("Outros dados", characters);
}
