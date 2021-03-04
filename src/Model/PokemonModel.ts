export type PokemonModel = {
    Id : Number,
    Name : string,
    Height : number,
    Weight : number,
    Avatar? : string
}

export type ApiErrorModel = {
    ErrorCode :number,
    ErrorMessage : string
}