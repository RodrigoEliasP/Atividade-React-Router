import React, { useState } from 'react';
import * as PokeServices from '../../Services/getPokemon'; 
import {useHistory} from 'react-router-dom';

const Pesquisar = ()=>{
    const history = useHistory();

    const [pokemon, setPokemon] = useState(''); 

    const handleInput = ({target:{value}}) =>{
        setPokemon(value);
    }
    
    const handleSubmit = async (e) =>{
        try{
            e.preventDefault();
            const response = await PokeServices.searchPokemon(pokemon);
            localStorage.setItem('pokemon', response.name);
            history.push('/habilidades')
        }catch(error){
            alert(error.message);
        }
    }

    return(
        <div>
            <h1>
                Bom dia!!! escreva o nome de um pokemon para ver suas habilidades :)
            </h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name='pokemon' onChange={handleInput} required/>
                <button type='submit'>Pesquisar</button>
            </form>
        </div>
    );
}

export default Pesquisar;