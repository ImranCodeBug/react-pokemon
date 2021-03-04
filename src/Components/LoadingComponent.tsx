import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

const LoadingComponent: React.FunctionComponent<{}> = (props) => {
  return <div className="card">
  <div className="card-body text-center">
    <FontAwesomeIcon className="fa-spin fa-2x text-primary" icon={faSpinner} />
  </div>
</div>;
};

export default LoadingComponent;
