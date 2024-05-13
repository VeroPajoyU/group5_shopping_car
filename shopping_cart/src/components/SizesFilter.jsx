// SizesFilter.jsx --> Fila de checkbox para seleccionar tallas.
import React from 'react';
import { Form } from 'react-bootstrap';

const SizesFilter = ({ sizes, onFilterChange }) => {
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (checked) {
      onFilterChange(name, value, 'add');
    } else {
      onFilterChange(name, value, 'remove');
    }
  };

  return (
    <Form>
      <Form.Label>Sizes</Form.Label>
      {sizes.map((size) => (
        <Form.Check
          key={size.id}
          type="checkbox"
          name="size"
          value={size.id}
          label={size.size}
          onChange={handleChange}
        />
      ))}
    </Form>
  );
};

export default SizesFilter;