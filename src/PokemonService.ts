import { ApiErrorModel, PokemonModel } from "./Model/PokemonModel";

export const PokemonService = () =>  {
    const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/";

    const getPokemonById = async(id : number) =>{
        const fetchUrl = `${pokemonUrl}${id}`;
        return await fetch(fetchUrl).then(res => {
            if(!res.ok){                
                throw new Error(res.status.toString())
            }
            return res.json()   
            })
            .then((res:any)=> {                
                const pokemon : PokemonModel ={
                    Id : res.id,
                    Name : res.name,
                    Height : res.height,
                    Weight : res.weight,
                    Avatar : res.sprites.front_shiny ? res.sprites.front_default : null
                }
                return pokemon;
            }).catch( res =>{
                const error : ApiErrorModel = {
                    ErrorCode : 404,
                    ErrorMessage : `Cannot find the pokemon with id ${id}`
                }
                return error;
            })
    }

    const getPokemonCount = async() =>{
        return await fetch(pokemonUrl).then(res => {
            if(!res.ok){                
                throw new Error(res.status.toString())
            }
            return res.json()   
            })
            .then((res:any)=> {                
                return +res.count
            })
    }

    const isError = (returnedItem : PokemonModel | ApiErrorModel) : returnedItem is ApiErrorModel =>{
        return (returnedItem as PokemonModel).Id === undefined;
    }

    return {
        GetPokemonById : getPokemonById,
        IsError : isError,
        GetPokemonCount : getPokemonCount
    }

}
