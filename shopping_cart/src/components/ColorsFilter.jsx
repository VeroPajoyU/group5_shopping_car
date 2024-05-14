// ColorsFilter.jsx --> Fila de checkbox para seleccionar colores.
import { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';

function ColorsFilter({ colors, onColorsSelect }) {
  const [selectedColors, setSelectedColors] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleColorSelect = useCallback((colorId) => {
    const isSelected = selectedColors.includes(colorId);
    if (colorId === "all") {
      setIsAllSelected(!isAllSelected);
      setSelectedColors(isAllSelected ? [] : colors.map((color) => color.id));
    } else {
      if (isSelected) {
        setSelectedColors(selectedColors.filter((id) => id !== colorId));
      } else {
        setSelectedColors([...selectedColors, colorId]);
      }
    }
  }, [selectedColors, colors]);

  const handleAllSelect = useCallback((event) => {
    setIsAllSelected(event.target.checked);
    setSelectedColors(event.target.checked ? colors.map((color) => color.id) : []);
  }, [colors]);

  const handleApply = useCallback((event) => {
    event.preventDefault();
    onColorsSelect(selectedColors);
  }, [selectedColors, onColorsSelect]);

  return (
    <div className='container mt-4 accordion'>
      <div className='accordion-item'>
        <Form onSubmit={handleApply}>
          <div className="text-center mt-3">
            <h5><Form.Label>Colores</Form.Label></h5>
          </div>
          <div className="accordion-body m-1" style={{ overflowY: "auto", maxHeight: "200px"}}>
            <Form.Check
              key={"all"}
              type="checkbox"
              name="color"
              value={"all"}
              label={"Todas"}
              checked={isAllSelected}
              onChange={handleAllSelect}
            />
            {colors.map((color) => (
              <Form.Check
                key={color.id}
                type="checkbox"
                name="color"
                value={color.id}
                label={color.color}
                checked={selectedColors.includes(color.id)}
                onChange={() => handleColorSelect(color.id)}
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

export default ColorsFilter;