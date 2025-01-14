import { useContext } from "react";
import GlobalContext from "../context/GlobalContext";

function Searchbar() {
  const { value, setValue, getItems } = useContext(GlobalContext);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={getItems}>Cerca</button>
    </div>
  );
}

export default Searchbar;
