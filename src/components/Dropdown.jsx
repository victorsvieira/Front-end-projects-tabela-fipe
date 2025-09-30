import React, { useState, useEffect } from "react";
import "./Dropdown.css";

function Dropdown({ endpoint }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [dropdownSelection, setDropdownSelection] = useState(
    "Selecione uma opção"
  );
  const [marcasCarros, setMarcasCarros] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleDropdown = () => setDropdownIsOpen((v) => !v);

  const handleSelection = (nome) => {
    setDropdownSelection(nome);
    setDropdownIsOpen(false);
  };

  useEffect(() => {
    if (typeof endpoint !== typeof []) {
      setLoading(true);
      fetch(endpoint)
        .then((res) => res.json())
        .then((data) => {
          setMarcasCarros(data);
        })
        .finally(() => setLoading(false));
    } else {
      setMarcasCarros(endpoint);
    }
  }, []);

  return (
    <div className="dropdown">
      <button onClick={toggleDropdown} className="btn-dropdown">
        {dropdownSelection} ⌄
      </button>

      {dropdownIsOpen && (
        <ul className="options-dropdown">
          {loading && <li className="dropdown-item">Carregando...</li>}

          {!loading &&
            marcasCarros.map((option) => (
              <li
                className="dropdown-item"
                key={typeof endpoint !== typeof [] ? option.codigo : option}
                onClick={() =>
                  handleSelection(
                    typeof endpoint !== typeof [] ? option.nome : option
                  )
                }
              >
                {typeof endpoint !== typeof [] ? option.nome : option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
