import * as React from 'react';
import PokemonDetailsItemComponent from './PokemonDetailsItemComponent';

interface IPokemonDetailsContainerComponentProps {
  Name : string,
  Height : number,
  Weight : number
}

const PokemonDetailsContainerComponent: React.FunctionComponent<IPokemonDetailsContainerComponentProps> = (props) => {
  const {Name, Height, Weight } = props
  return  <div className="col-8">
  <form>
    <PokemonDetailsItemComponent Label={"Name"} Value={Name}></PokemonDetailsItemComponent>
    <PokemonDetailsItemComponent Label={"Height"} Value={Height}></PokemonDetailsItemComponent>
    <PokemonDetailsItemComponent Label={"Weight"} Value={Weight}></PokemonDetailsItemComponent>    
  </form>        
  </div>;
};

export default PokemonDetailsContainerComponent;
