import * as React from 'react';

interface IWarningComponentProps {
  Message : string
}

const WarningComponent: React.FunctionComponent<IWarningComponentProps> = (props) => {
  return  <div className="card">
  <div className="card-body text-center text-danger">
    {props.Message}
  </div>
</div> ;
};

export default WarningComponent; 
