import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Searchbar() {
  const { value, setValue, getItems } = useContext(GlobalContext);

  function handleEnterKey(event) {
    if  (event.key === `Enter`) {
      getItems();
    }
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>BOOLFIX</h1>
      </div>
      <div className="searchbar">
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="Cerca Film o Serie..."
          onKeyUp={handleEnterKey}
        />
        <button onClick={getItems}>Cerca</button>
      </div>
    </header>
  );
}

export default Searchbar;
