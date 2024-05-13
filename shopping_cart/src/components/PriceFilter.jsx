// PriceFilter.jsx --> Componente de rango de precios.
import { useState } from 'react';
import { Form } from 'react-bootstrap';

const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleFilter = () => {
    onFilterChange('price', [minPrice, maxPrice]);
  };

  return (
    <Form>
      <Form.Label>Price</Form.Label>
      <Form.Control
        type="range"
        name="minPrice"
        min="0"
        max="1000"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Form.Control
        type="number"
        name="minPrice"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
      />
      <Form.Control
        type="range"
        name="maxPrice"
        min="0"
        max="1000"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <Form.Control
        type="number"
        name="maxPrice"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
      />
      <button variant="primary" onClick={handleFilter}>
        Filter
      </button>
    </Form>
  );
};

export default PriceFilter;