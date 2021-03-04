import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useRef } from 'react';

interface ISearchComponentProps {
  SearchPokemon : (id:number) => void
}

const SearchComponent: React.FunctionComponent<ISearchComponentProps> = (props) => {
  const searchInput = useRef<HTMLInputElement>(null)

  const onSearchButtonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      executeSearch();
  }

  const onEnterPress = (event : React.KeyboardEvent<HTMLInputElement>)=>{    
    if(event.key === 'Enter'){
      executeSearch()
    }
  }

  const executeSearch = () => {    
    if(searchInput.current && searchInput.current.value){        
      props.SearchPokemon(+searchInput.current.value)
    }      
  }

  return <div className="input-group mb-3">
  <input type="number" ref={searchInput}
  className="form-control" placeholder="Search with Pokemon Id" 
  onKeyDown={onEnterPress}/>
  <div className="input-group-append">
    <button className="btn btn-outline-primary" type="button" onClick={onSearchButtonClick}>
    <i className="fas fa-camera"></i>
      <FontAwesomeIcon className="mr-2" icon={faSearch} />
      Search Pokemon      
    </button>
  </div>
</div>
};

export default SearchComponent;