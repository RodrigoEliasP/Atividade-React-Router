import React, { useState, useEffect} from 'react';
import * as PokeServices from '../../Services/getPokemon'; 
import {useHistory} from 'react-router-dom';

const Habilidades = ()=>{
    const history = useHistory();

    const [abilityInfo, setAbilityInfo] = useState({
        name: '',
        effect_entries: [
            {effect: ''},
            {effect: ''}
        ]
    });
    
    useEffect(async ()=>{
        const pokeName = localStorage.getItem('habilidade');
        const ability = await PokeServices.searchAbility(pokeName);
        setAbilityInfo(ability);
    },[]);

    return(
        <div>
            <div>
                <h2>Habilidade: {abilityInfo.name}</h2>
                <p>Efeito: {abilityInfo.effect_entries[1].effect}</p>
            </div>
        </div>
    );
}

export default Habilidades;