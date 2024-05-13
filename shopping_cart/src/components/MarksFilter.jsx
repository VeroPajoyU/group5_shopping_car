// MarksFilter.jsx --> Fila de checkbox para seleccionar marcas.
import { Form } from 'react-bootstrap';

const MarksFilter = ({ marks, onFilterChange }) => {
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
      <Form.Label>Marks</Form.Label>
      {marks.map((mark) => (
        <Form.Check
          key={mark.id}
          type="checkbox"
          name="mark"
          value={mark.id}
          label={mark.mark}
          onChange={handleChange}
        />
      ))}
    </Form>
  );
};

export default MarksFilter;