// Products.jsx --> Componente principal que mostrará las cartas de productos.
import ProductCard from "./ProductCard";
import { useState, useEffect } from 'react';
import MarksFilter from "./MarksFilter";

function Products({ products, marks, sizes, colors, onMarksSelect }) {
  const [selectedMarksIds, setSelectedMarksIds] = useState([]);

  useEffect(() => {
    onMarksSelect(selectedMarksIds);
  }, [selectedMarksIds, onMarksSelect]);

  const handleMarkSelect = (markIds) => {
    setSelectedMarksIds(markIds);
  };

  return (
    <div className="container text-center">
      <div className="row align-items-start">
        <aside className="col-2 border border-start-0">
          <MarksFilter marks={marks} onMarksSelect={handleMarkSelect} />
        </aside>
        <div className="col-10 border border-end-0">
          <section className="row row-cols-3 no-gutters justify-content-center">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </section>
      </div>
    </div>
    </div>
  );
}

export default Products;
