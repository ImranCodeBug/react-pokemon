import * as React from 'react';

interface IPokemonImageComponentProps {
    ImageSource : string | undefined
}

const PokemonImageComponent: React.FunctionComponent<IPokemonImageComponentProps> = (props) => {
  return <div className="col-auto">
  {props.ImageSource? 
    <img src={props.ImageSource!} className="img-size" alt="Image of the pokemon"></img>
  : null}
</div>;
};

export default PokemonImageComponent;
