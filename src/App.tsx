import React, { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingComponent from './Components/LoadingComponent';
import PokemonCountComponent from './Components/PokemonCountComponent';
import ResultComponent from './Components/ResultComponent';
import SearchComponent from './Components/SearchComponent';
import WarningComponent from './Components/WarningComponent';
import { ApiErrorModel, PokemonModel } from './Model/PokemonModel';
import {PokemonService} from './PokemonService';


function App() {
  const [_searchInProgress, SetSearchInProgress] = useState(false);
  const [_pokemon, SetPokemon] = useState<PokemonModel|null>(null);
  const [_apiError, SetError]  = useState<ApiErrorModel|null>(null);

  const searchPokemon = useCallback((id: number) =>{    
    const pokemonService = PokemonService();
    SetPokemon(null);
    SetSearchInProgress(true);
    SetError(null);

    pokemonService.GetPokemonById(id).then((response) => {      
      SetSearchInProgress(false);
      if(pokemonService.IsError(response)){
        SetError(response as ApiErrorModel)
      }
      else{
        SetPokemon(response as PokemonModel)
      }      
    })}, [])    

  return (
    <Container>
      <Row className="mt-2">
        <Col md={12}>
          <SearchComponent SearchPokemon={searchPokemon}></SearchComponent>
        </Col>
      </Row>

      <Row className="mt-0">
        <Col md={12}>
          <PokemonCountComponent></PokemonCountComponent>
        </Col>
      </Row>      

      {_searchInProgress ? 
        <Row className="mt-2">
          <Col md={12}>
            <LoadingComponent></LoadingComponent>
          </Col>
        </Row>
      : null}

      {_pokemon ? 
        <Row className="mt-2">
          <Col md={12}>
            <ResultComponent Pokemon={_pokemon}></ResultComponent>
          </Col>
        </Row>
      : null}

      {_apiError ? 
      <Row className="mt-2">
        <Col md={12}>
          <WarningComponent Message={_apiError.ErrorMessage} ></WarningComponent>
        </Col>
      </Row>
      :null}
    </Container>
  );
}

export default App;
