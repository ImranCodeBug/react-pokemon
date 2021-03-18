import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import LoadingComponent from './Components/LoadingComponent';
import PokemonCountComponent from './Components/PokemonCountComponent';
import ResultComponent from './Components/ResultComponent';
import SearchComponent from './Components/SearchComponent';
import WarningComponent from './Components/WarningComponent';
import { ApiErrorModel, PokemonModel } from './Model/PokemonModel';
import {PokemonService} from './PokemonService';

export interface IAppProps {
}

export interface IAppState {
    searchInProgress : Boolean,
    pokemon : PokemonModel|null,
    apiError : ApiErrorModel|null
}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
        searchInProgress : false,
        pokemon : null,
        apiError : null    
    }
  }

  private searchPokemon = async(id:number) =>{
    const pokemonService = PokemonService();
    await this.setState({
        pokemon : null,
        apiError : null,
        searchInProgress : true,
    })

    pokemonService.GetPokemonById(id).then(async(response) => {      
        await this.setState({            
            searchInProgress : false,
        })
      if(pokemonService.IsError(response)){
        await this.setState({            
            apiError : response as ApiErrorModel,            
        })
        
      }
      else{
        await this.setState({
            pokemon : response as PokemonModel
        })        
      }      
    })
  }

  public render() {
    return (
        <Container>
          <Row className="mt-2">
            <Col md={12}>
              <SearchComponent SearchPokemon={this.searchPokemon}></SearchComponent>
            </Col>
          </Row>
    
          <Row className="mt-0">
            <Col md={12}>
              <PokemonCountComponent></PokemonCountComponent>
            </Col>
          </Row>      
    
          {this.state.searchInProgress ? 
            <Row className="mt-2">
              <Col md={12}>
                <LoadingComponent></LoadingComponent>
              </Col>
            </Row>
          : null}
    
          {this.state.pokemon ? 
            <Row className="mt-2">
              <Col md={12}>
                <ResultComponent Pokemon={this.state.pokemon}></ResultComponent>
              </Col>
            </Row>
          : null}
    
          {this.state.apiError ? 
          <Row className="mt-2">
            <Col md={12}>
              <WarningComponent Message={this.state.apiError.ErrorMessage} ></WarningComponent>
            </Col>
          </Row>
          :null}
        </Container>
      );
  }
}
