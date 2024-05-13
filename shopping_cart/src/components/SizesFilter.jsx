// SizesFilter.jsx --> Fila de checkbox para seleccionar tallas.
import { useCallback, useState } from 'react';
import { Form } from 'react-bootstrap';

function SizesFilter({ sizes, onSizesSelect }) {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const handleSizeSelect = useCallback((sizeId) => {
    const isSelected = selectedSizes.includes(sizeId);
    if (sizeId === "all") {
      setIsAllSelected(!isAllSelected);
      setSelectedSizes(isAllSelected ? [] : sizes.map((size) => size.id));
    } else {
      if (isSelected) {
        setSelectedSizes(selectedSizes.filter((id) => id !== sizeId));
      } else {
        setSelectedSizes([...selectedSizes, sizeId]);
      }
    }
  }, [selectedSizes, sizes]);

  const handleAllSelect = useCallback((event) => {
    setIsAllSelected(event.target.checked);
    setSelectedSizes(event.target.checked ? sizes.map((size) => size.id) : []);
  }, [sizes]);

  const handleApply = useCallback((event) => {
    event.preventDefault();
    onSizesSelect(selectedSizes);
  }, [selectedSizes, onSizesSelect]);

  return (
    <div className='container mt-4 accordion'>
      <div className='accordion-item'>
        <Form onSubmit={handleApply}>
          <div className="text-center mt-3">
            <h5><Form.Label>Tallas</Form.Label></h5>
          </div>
          <div className="accordion-body m-1" style={{ overflowY: "auto", maxHeight: "200px"}}>
            <Form.Check
              key={"all"}
              type="checkbox"
              name="size"
              value={"all"}
              label={"Todas"}
              checked={isAllSelected}
              onChange={handleAllSelect}
            />
            {sizes.map((size) => (
              <Form.Check
                key={size.id}
                type="checkbox"
                name="size"
                value={size.id}
                label={size.size}
                checked={selectedSizes.includes(size.id)}
                onChange={() => handleSizeSelect(size.id)}
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

export default SizesFilter;