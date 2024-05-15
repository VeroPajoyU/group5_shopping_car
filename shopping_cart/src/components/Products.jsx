// Products.jsx --> Componente principal que mostrará las cartas y cajas de filtro de productos.
import { useState, useEffect } from 'react';
import ProductCard from "./productCard";
import MarksFilter from "./MarksFilter";
import SizesFilter from "./SizesFilter";
import ColorsFilter from './ColorsFilter';
import PriceFilter from "./PriceFilter";
import logo from "../assets/logo_white.png";

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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5>Filtros</h5>
              <hr />
              <MarksFilter marks={marks} onMarksSelect={handleMarkSelect} />
              <SizesFilter sizes={sizes} onSizesSelect={handleSizeSelect} />
              <ColorsFilter colors={colors} onColorsSelect={handleColorSelect} />
              <PriceFilter prices={prices} onPriceSelect={handlePriceSelect} />
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h5 className='text-center'><img src={logo} alt="Boutique" width={270} height={40} /></h5>
              <hr />
              <section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 g-3">
                {products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;