const PokemonH = () =>{
    const PokeName = document.getElementById("NomPoke").innerHTML.toLowerCase();
    if (PokeName=="---"){
        alert("Lo siento primero debes buscar algun pokemon.");
            }else{

    const url =`https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            pokeImage("././source/img/missigno.gif");
            alert("Lo siento ha sufrido un error la pokedex.");
            document.getElementById("NomPoke").innerHTML="---";
            document.getElementById("NumPoke").innerHTML="---";
            document.getElementById("TipPoke").innerHTML="---";
            document.getElementById("StaPoke").innerHTML="---";
            document.getElementById("MovPoke").innerHTML="---";
            
        }else{
        return res.json();}
    }).then((data)=>{
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);
    })
}
}
const PokemonF = () =>{
    const PokeName = document.getElementById("NomPoke").innerHTML.toLowerCase();
    if (PokeName=="---"){
        alert("Lo siento primero debes buscar algun pokemon.");
            }else{

    const url =`https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            pokeImage("././source/img/missigno.gif");
            alert("Lo siento ha sufrido un error la pokedex.");
            document.getElementById("NomPoke").innerHTML="---";
            document.getElementById("NumPoke").innerHTML="---";
            document.getElementById("TipPoke").innerHTML="---";
            document.getElementById("StaPoke").innerHTML="---";
            document.getElementById("MovPoke").innerHTML="---";
            
        }else{
        return res.json();}
    }).then((data)=>{
        let pokeImg = data.sprites.front_female;
        
        if(pokeImg == null){
            pokeImg= data.sprites.front_default;
        }else{
            pokeImg= data.sprites.front_female;
        }
        pokeImage(pokeImg);
    })
}

}

const PokemonHShiny = () =>{
    const PokeName = document.getElementById("NomPoke").innerHTML.toLowerCase();
    if (PokeName=="---"){
        alert("Lo siento primero debes buscar algun pokemon.");
            }else{

    const url =`https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            pokeImage("././source/img/missigno.gif");
            alert("Lo siento ha sufrido un error la pokedex.");
            document.getElementById("NomPoke").innerHTML="---";
            document.getElementById("NumPoke").innerHTML="---";
            document.getElementById("TipPoke").innerHTML="---";
            document.getElementById("StaPoke").innerHTML="---";
            document.getElementById("MovPoke").innerHTML="---";
            
        }else{
        return res.json();}
    }).then((data)=>{
        let pokeImg = data.sprites.front_shiny;
        pokeImage(pokeImg);
    })
}
} 

const PokemonFShiny = () =>{
    const PokeName = document.getElementById("NomPoke").innerHTML.toLowerCase();
    if (PokeName=="---"){
alert("Lo siento primero debes buscar algun pokemon.");
    }else{

    const url =`https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            pokeImage("././source/img/missigno.gif");
            alert("Lo siento ha sufrido un error la pokedex.");
            document.getElementById("NomPoke").innerHTML="---";
            document.getElementById("NumPoke").innerHTML="---";
            document.getElementById("TipPoke").innerHTML="---";
            document.getElementById("StaPoke").innerHTML="---";
            document.getElementById("MovPoke").innerHTML="---";
            
        }else{
        return res.json();}
    }).then((data)=>{
        let pokeImg = data.sprites.front_shiny_female;
        if(pokeImg == null){
            pokeImg= data.sprites.front_shiny;
        }else{
            pokeImg= data.sprites.front_shiny_female;
        }
        pokeImage(pokeImg);
    })
    }
} 

const fechPokemon = () => {
    const pokeName= document.getElementById("pokeNameSearch");
    let PokeName = pokeName.value.toLowerCase();
    

    const url = `https://pokeapi.co/api/v2/pokemon/${PokeName}`;
    fetch(url).then((res)=>{
        if(res.status != 200){
            pokeImage("././source/img/missigno.gif");
            alert("Pokemon aun no descubierto.");
            document.getElementById("NomPoke").innerHTML="---";
            document.getElementById("NumPoke").innerHTML="---";
            document.getElementById("TipPoke").innerHTML="---";
            document.getElementById("StaPoke").innerHTML="---";
            document.getElementById("MovPoke").innerHTML="---";
            
        }else{
        return res.json();}
    }).then((data)=>{
        /**
         * Funciones para traer la imagen del pokemon
         */
        let pokeImg = data.sprites.front_default;
        pokeImage(pokeImg);

        /**
         * Funciones para traer el nombre del pokemon y formatearlo con la primera mayuscula
         */
        let pokeName = data.species.name;
        const letraPrimera = pokeName.charAt(0).toUpperCase();
        const texto = pokeName.slice(1);
        let NombrePokemon = letraPrimera+texto;

        document.getElementById("NomPoke").innerHTML=NombrePokemon;

        /**
         * Funciones para encontrar el numero del pokemon y formatearlo a 3 digitos
         */
        let pokeNumber = data.id;
        let pokemonNumber = "";
        if(pokeNumber < 10){
            pokemonNumber = "00"+pokeNumber.toString();

        }
        if(pokeNumber<100 && pokeNumber>9){
                pokemonNumber = "0"+pokeNumber.toString();
        }
        if(pokeNumber>99){
                pokemonNumber = pokeNumber.toString();
        }

        document.getElementById("NumPoke").innerHTML=pokemonNumber;

        /**
         * Funciones para sacar el Tipo de pokemon
         */
        let PokeType = data.types[0].type.name;

        const letraPrimeraPoke = PokeType.charAt(0).toUpperCase();
        const textotipo = PokeType.slice(1);
        let TipoPokemon = letraPrimeraPoke+textotipo;
        document.getElementById("TipPoke").innerHTML=TipoPokemon;
        
        /**
         * Funciones para sacar stats
         */
        let HPPoke= data.stats[0].base_stat;
        let ATKPoke = data.stats[1].base_stat;
        let DefPoke = data.stats[2].base_stat;
        let SpeAtkPoke = data.stats[3].base_stat;
        let SpeDefPoke = data.stats[4].base_stat;
        let speedPoke = data.stats[5].base_stat;

        let StatsPoke = "HP: "+HPPoke+" ATK: "+ATKPoke+" DEF: "+DefPoke+" SPECIAL ATK: "+SpeAtkPoke+" SPECIAL DEF: "+SpeDefPoke+" SPEED: "+speedPoke;
        
        document.getElementById("StaPoke").innerHTML=StatsPoke;

        /**
         * Funciones para encontrar movimientos
         */
        let move1 = data.moves[0].move.name;
        let move2 = data.moves[1].move.name;
        let move3 = data.moves[2].move.name;
        let move4 = data.moves[3].move.name;
        let move5 = data.moves[4].move.name;
        let move6 = data.moves[5].move.name;
        let move7 = data.moves[6].move.name;
        let move8 = data.moves[7].move.name;
        let move9 = data.moves[8].move.name;
        let move10 = data.moves[9].move.name;

        let movesPoke= move1+" * "+move2+" * "+move3+" * "+move4+" * "+move5+" * "+move6+" * "+move7+" * "+move8+" * "+
        move9+" * "+move10;

        document.getElementById("MovPoke").innerHTML=movesPoke;

    }) 
}

//fechPokemon();


const pokeImage = (url) =>{
    const pokeImg = document.getElementById("imgPoke");
    pokeImg.src = url;
}
