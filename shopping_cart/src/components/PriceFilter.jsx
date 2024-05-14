// // PriceFilter.jsx --> Componente de rango de precios.
// import { useState } from 'react';
// import { Form } from 'react-bootstrap';

// function PriceFilter ({ onFilterChange }) {
//   const [localMinPrice, setLocalMinPrice] = useState(0);
//   const [localMaxPrice, setLocalMaxPrice] = useState(100000);

//   const handleFilter = () => {
//     onFilterChange('price', [localMinPrice, localMaxPrice]);
//   };

//   return (
//     <div className='container mt-4 accordion'>
//       <div className='accordion-item'>
//         <Form onSubmit={handleFilter}>
//           <div className="text-center mt-3">
//             <h5><Form.Label>Precios</Form.Label></h5>
//           </div>
//           <div className="accordion-body m-1">
//             <Form.Control
//               type="range"
//               name="minPrice"
//               value={localMinPrice}
//               onChange={(e) => setLocalMinPrice(e.target.value)}
//             />
//             <Form.Control
//               type="number"
//               name="minPrice"
//               value={localMinPrice}
//               onChange={(e) => setLocalMinPrice(e.target.value)}
//             />
//             <Form.Control
//               type="range"
//               name="maxPrice"
//               value={localMaxPrice}
//               onChange={(e) => setLocalMaxPrice(e.target.value)}
//             />
//             <Form.Control
//               type="number"
//               name="maxPrice"
//               value={localMaxPrice}
//               onChange={(e) => setLocalMaxPrice(e.target.value)}
//             />
//           </div>
//           <div className="text-center m-3">
//             <button type='submit' className="btn btn-primary">Aplicar</button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// }

// export default PriceFilter;

// PriceFilter.jsx
import { useState } from "react";
import { Form } from 'react-bootstrap';

function PriceFilter ({ onPriceSelect }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPriceSelect(minPrice, maxPrice);
  };

  return (
    <div className='container mt-4 accordion'>
      <div className='accordion-item'>
        <Form onSubmit={handleSubmit}>
          <div className="text-center mt-3">
            <h5><Form.Label>Precios</Form.Label></h5>
          </div>
          <div className="accordion-body m-1">
            <Form.Control
              type="range"
              name="minPrice"
              value={minPrice}
              min={0}
              max={100000}
              onChange={handleMinPriceChange}
            />
            <Form.Control
              type="number"
              name="minPrice"
              value={minPrice}
              min={0}
              max={100000}
              onChange={handleMinPriceChange}
            />
            <Form.Control
              type="range"
              name="maxPrice"
              value={maxPrice}
              min={0}
              max={100000}
              onChange={handleMaxPriceChange}
            />
            <Form.Control
              type="number"
              name="maxPrice"
              value={maxPrice}
              min={0}
              max={100000}
              onChange={handleMaxPriceChange}
            />
          </div>
          <div className="text-center m-3">
            <button type='submit' className="btn btn-primary">Aplicar</button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default PriceFilter;