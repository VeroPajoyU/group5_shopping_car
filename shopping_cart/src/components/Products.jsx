// Products.jsx --> Componente principal que mostrará las cartas y cajas de filtro de productos.
import { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";
import MarksFilter from "./MarksFilter";
import SizesFilter from "./SizesFilter";
import ColorsFilter from './ColorsFilter';
import PriceFilter from "./PriceFilter";

function Products({ products, marks, sizes, colors, prices, onMarksSelect, onSizesSelect, onColorsSelect, onPriceSelect }) {
  const [selectedMarksIds, setSelectedMarksIds] = useState([]);
  const [selectedSizesIds, setSelectedSizesIds] = useState([]);
  const [selectedColorsIds, setSelectedColorsIds] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  useEffect(() => {
    onMarksSelect(selectedMarksIds);
  }, [selectedMarksIds, onMarksSelect]);

  useEffect(() => {
    onSizesSelect(selectedSizesIds);
  }, [selectedSizesIds, onSizesSelect]);

  useEffect(() => {
    onColorsSelect(selectedColorsIds);
  }, [selectedColorsIds, onColorsSelect]);

  useEffect(() => {
    onPriceSelect(minPrice, maxPrice);
  }, [minPrice, maxPrice, onPriceSelect]);

  const handleMarkSelect = (markIds) => { setSelectedMarksIds(markIds) };
  const handleSizeSelect = (sizeIds) => { setSelectedSizesIds(sizeIds) };
  const handleColorSelect = (colorIds) => { setSelectedColorsIds(colorIds) };
  const handlePriceSelect = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
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
          <div className="col">
            <section className="">
              <ColorsFilter colors={colors} onColorsSelect={handleColorSelect} />
            </section>
          </div>          
          <div className="col">
            <section className="">
              <PriceFilter prices={prices} onPriceSelect={handlePriceSelect} />
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