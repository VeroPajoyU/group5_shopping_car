// filters.jsx
import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(await result.json());
    };

    fetchData().catch((error) => console.error("Error fetching data:", error));
  }, [url]);

  return data;
}

function FilterItem({name, type, onChange }) {
  return (
    <section className="d-block">
      <input
        type="checkbox"
        id={name} 
        name={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{name}</label>
    </section>
  );
}

function Filters() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const sizes = useFetchData("http://localhost:3000/size");
  const marks = useFetchData("http://localhost:3000/mark");
  const colors = useFetchData("http://localhost:3000/color");

  const handleFilterChange = (type, id) => {
    setSelectedFilters((prevFilters) => ({ ...prevFilters, [type]: id }));
  };

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            <h1>Talla</h1>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
        >
          <div className="accordion-body" style={{ overflowY: "auto", maxHeight: "300px" }}>
            {sizes.map((size, index) => (
              <FilterItem
                key={index}
                name={size.talla}
                onChange={() => handleFilterChange("talla", size.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo"
          >
            <h1>Marcas</h1>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseTwo"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body" style={{ overflowY: "auto", maxHeight: "300px" }}>
            {marks.map((mark, index) => (
              <FilterItem
                key={index}
                name={mark.marca}
                onChange={() => handleFilterChange("marca", mark.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            <h1>Colores</h1>
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          className="accordion-collapse collapse"
        >
          <div className="accordion-body" style={{ overflowY: "auto", maxHeight: "300px" }}>
            {colors.map((color, index) => (
              <FilterItem
                key={index}
                name={color.color}
                onChange={() => handleFilterChange("color", color.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;