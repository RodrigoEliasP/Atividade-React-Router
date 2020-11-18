import api from './api';

export async function searchPokemon(pokemon){
    const res = await api.get(`pokemon/${pokemon}`, {
        validateStatus: status=>{
            return status <= 500
        }
    });
    if(!res.data.id){
        throw new Error('Não foi possível achar tal pokemon') 
    }
    return res.data
}
export async function searchAbility(ability){
    const res = await api.get(`ability/${ability}`);
    return res.data
}