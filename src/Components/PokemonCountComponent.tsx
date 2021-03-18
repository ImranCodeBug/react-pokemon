import * as React from 'react';
import { PokemonService } from '../PokemonService';


export interface IPokemonCountComponentProps {
}

export interface IPokemonCountComponentState {
    pokemonCount : number,
    pokemonCountInProgress : boolean
}

export default class PokemonCountComponent extends React.Component<IPokemonCountComponentProps, IPokemonCountComponentState> {  
  constructor(props: IPokemonCountComponentProps) {
    super(props);

    this.state = {
        pokemonCount : 0,
        pokemonCountInProgress : false
    }
  }

  componentDidMount = async() =>{
    await this.setState({
        pokemonCount : 0,
        pokemonCountInProgress : true
    }) 
    const pokemonService = PokemonService();
    const pokemonCount = await pokemonService.GetPokemonCount();

    await this.setState({
        pokemonCount : pokemonCount,
        pokemonCountInProgress : false
    }) 

  }

  public render() {
    return <p><small>There are <strong>{this.state.pokemonCount}</strong> pokemons in the system.</small></p> ;
  }
}
