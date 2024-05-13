// MarksFilter.jsx --> Fila de checkbox para seleccionar marcas.
import { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';

function MarksFilter({ marks, onMarksSelect }) {
  const [selectedMarks, setSelectedMarks] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleMarkSelect = useCallback((markId) => {
    const isSelected = selectedMarks.includes(markId);
    if (markId === "all") {
      setIsAllSelected(!isAllSelected);
      setSelectedMarks(isAllSelected ? [] : marks.map((mark) => mark.id));
    } else {
      if (isSelected) {
        setSelectedMarks(selectedMarks.filter((id) => id !== markId));
      } else {
        setSelectedMarks([...selectedMarks, markId]);
      }
    }
  }, [selectedMarks, marks]);

  const handleAllSelect = useCallback((event) => {
    setIsAllSelected(event.target.checked);
    setSelectedMarks(event.target.checked ? marks.map((mark) => mark.id) : []);
  }, [marks]);

  const handleApply = useCallback((event) => {
    event.preventDefault();
    onMarksSelect(selectedMarks);
  }, [selectedMarks, onMarksSelect]);

  return (
    <div className='container mt-4 accordion'>
      <div className='accordion-item'>
        <Form onSubmit={handleApply}>
          <div className="text-center mt-3">
            <h5><Form.Label>Marcas</Form.Label></h5>
          </div>
          <div className="accordion-body m-1" style={{ overflowY: "auto", maxHeight: "200px"}}>
            <Form.Check
              key={"all"}
              type="checkbox"
              name="mark"
              value={"all"}
              label={"Todas"}
              checked={isAllSelected}
              onChange={handleAllSelect}
            />
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
          </div>
          <div className="text-center m-3">
            <button type='submit' className="btn btn-primary">Aplicar</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default MarksFilter;