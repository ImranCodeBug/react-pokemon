import * as React from 'react';

interface IPokemonDetailsItemComponentProps {
    Label : string
    Value : string | number

}

const PokemonDetailsItemComponent: React.FunctionComponent<IPokemonDetailsItemComponentProps> = (props) => {
    const {Label, Value} = props;
  return <div className="form-group row">
  <label className="col-sm-2 col-form-label">{Label}</label>
  <div className="col-sm-10">
    <input type="text" className="form-control" readOnly value={Value}></input>
  </div>
</div>;
};

export default PokemonDetailsItemComponent;
