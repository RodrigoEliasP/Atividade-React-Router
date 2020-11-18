import React, { useState, useEffect} from 'react';
import * as PokeServices from '../../Services/getPokemon'; 
import {useHistory} from 'react-router-dom';

const Habilidades = ()=>{
    const history = useHistory();

    const [pokeInfo, setPokeInfo] = useState({
        abilities:[],
        sprites:{
            front_default: ''
        }
    })

    function handleClick({target:{id}}){
        localStorage.setItem('habilidade', id);
        history.push('./detalhes');
    }

    useEffect(async ()=>{
        const pokeName = localStorage.getItem('pokemon');
        const pokemon = await PokeServices.searchPokemon(pokeName);
        console.log(pokemon);
        setPokeInfo(pokemon);
    },[]);

    return(
        <div>
            <div>
                <h2>Pokemon: {pokeInfo.name}</h2>
                <img src={pokeInfo.sprites.front_default}/>
            </div>
            <ul>
                {
                   pokeInfo.abilities.map(({ability}) =>{
                        return(
                            <li onClick={handleClick} key={ability.name}
                                id={ability.name}
                            >
                                {ability.name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Habilidades;