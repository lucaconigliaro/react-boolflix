import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function Searchbar() {
  const { value, setValue, getItems } = useContext(GlobalContext);

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
        />
        <button onClick={getItems}>Cerca</button>
      </div>
    </header>
  );
}

export default Searchbar;
