import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { PokemonService } from '../PokemonService';


const PokemonCountComponent: React.FunctionComponent<{}> = () => {
    const [_pokemonCount, updatePokemonCount] = useState<number>(0);
    const [_pokemonCountInProgress, updatePokemonCountInprogress] = useState<boolean>(true);
    const pokemonService = PokemonService();

    useEffect(() => {
        const getCount = async() => {
            const pokemonCount = await pokemonService.GetPokemonCount();
            updatePokemonCount(pokemonCount);
            updatePokemonCountInprogress(false);
        }

        if(_pokemonCountInProgress){
            getCount();
        }        
    }, [_pokemonCountInProgress])
  
    return <p><small>There are <strong>{_pokemonCount}</strong> pokemons in the system.</small></p> ;
};

export default PokemonCountComponent;
