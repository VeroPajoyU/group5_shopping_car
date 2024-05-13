// MarksFilter.jsx --> Fila de checkbox para seleccionar marcas.
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function MarksFilter({ marks, onMarksSelect }) {
  const [selectedMarks, setSelectedMarks] = useState([]);

  const handleMarkSelect = (markId) => {
    const isSelected = selectedMarks.includes(markId);
    if (isSelected) {
      setSelectedMarks(selectedMarks.filter((id) => id !== markId));
    } else {
      setSelectedMarks([...selectedMarks, markId]);
    }
  };

  const handleApply = () => {
    onMarksSelect(selectedMarks);
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
          checked={selectedMarks.includes(mark.id)}
          onChange={() => handleMarkSelect(mark.id)}
        />
      ))}
      <button onClick={handleApply}>Aplicar</button>
    </Form>
  );
}

export default MarksFilter;