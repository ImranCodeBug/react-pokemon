import * as React from 'react';
import { PokemonModel } from '../Model/PokemonModel';
import PokemonDetailsContainerComponent from './PokemonDetailsContainerComponent';
import PokemonImageComponent from './PokemonImageComponent';

interface IResultComponentProps {
  Pokemon : PokemonModel
}

const ResultComponent: React.FunctionComponent<IResultComponentProps> = (props) => {  
const {Name, Height, Weight, Avatar} = props.Pokemon;
return (<div className="container">
              <div className="row">
                  <PokemonImageComponent ImageSource={Avatar} ></PokemonImageComponent>
                  <PokemonDetailsContainerComponent Name={Name} Height={Height} Weight={Weight}></PokemonDetailsContainerComponent>
              </div>              
          </div>);
};

export default ResultComponent;
