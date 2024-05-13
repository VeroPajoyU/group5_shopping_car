// ColorsFilter.jsx --> Fila de checkbox para seleccionar colores.
import { Form } from 'react-bootstrap';

const ColorsFilter = ({ colors, onFilterChange }) => {
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
      <Form.Label>Colors</Form.Label>
      {colors.map((color) => (
        <Form.Check
          key={color.id}
          type="checkbox"
          name="color"
          value={color.id}
          label={color.color}
          onChange={handleChange}
        />
      ))}
    </Form>
  );
};

export default ColorsFilter;