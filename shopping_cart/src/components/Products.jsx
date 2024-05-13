// Products.jsx --> Componente principal que mostrará las cartas de productos.
import ProductCard from "./ProductCard";
import { useState, useEffect } from 'react';
import MarksFilter from "./MarksFilter";
import SizesFilter from "./SizesFilter";

function Products({ products, marks, sizes, colors, onMarksSelect, onSizesSelect }) {
  const [selectedMarksIds, setSelectedMarksIds] = useState([]);
  const [selectedSizesIds, setSelectedSizesIds] = useState([]);

  useEffect(() => {
    onMarksSelect(selectedMarksIds);
  }, [selectedMarksIds, onMarksSelect]);

  useEffect(() => {
    onSizesSelect(selectedSizesIds);
  }, [selectedSizesIds, onSizesSelect]);
  
  const handleMarkSelect = (markIds) => {
    setSelectedMarksIds(markIds);
  };

  const handleSizeSelect = (sizeIds) => {
    setSelectedSizesIds(sizeIds);
  };

  return (
    <div className="container container-fluid ">
      <div className="row">
        <div className="col-sm-3 col-md-2 col-lg-2 col-xl-3">
          <div className="col">
            <section className="">
              <MarksFilter marks={marks} onMarksSelect={handleMarkSelect} />
            </section>
          </div>
          <div className="col">
            <section className="">
              <SizesFilter sizes={sizes} onSizesSelect={handleSizeSelect} />
            </section>
          </div>
        </div>
        <div className="col-sm-10 col-md-9 col-lg-9 col-xl-9 border border-end-0">
          <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-3">
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
