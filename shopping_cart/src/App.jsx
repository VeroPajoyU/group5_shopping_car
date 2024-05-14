// App.jsx
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation.jsx";
import Products from "./components/Products.jsx";
import fetch_data from "./api/api_backend.jsx";

function App() {
  const [categories, setCategories] = useState([]);
  const [marks, setMarks] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [products, setProducts] = useState([]);
  const [mmPrices, setMmPrices] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedMarksIds, setSelectedMarksIds] = useState([]);
  const [selectedSizesIds, setSelectedSizesIds] = useState([]);
  const [selectedColorsIds, setSelectedColorsIds] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch_data("/products", setProducts);
    fetch_data("/categories", setCategories);
    fetch_data("/marks", setMarks);
    fetch_data("/sizes", setSizes);
    fetch_data("/colors", setColors);
    fetch_data("/products/mmprices", setMmPrices);
    fetch_data("/products/search", setSearchText);
  }, []);

  useEffect(() => {
    if (selectedCategoryId === 0) {
      fetch_data("/products", setProducts);
    } else {
      fetch_data("/products/categories/" + selectedCategoryId, setProducts);
    }
  }, [selectedCategoryId]);

  useEffect(() => {
    if (selectedMarksIds.length === 0) {
      fetch_data("/products", setProducts);
    } else {
      const marksIdsString = selectedMarksIds.join(',');
      fetch_data("/products/marks/" + marksIdsString, setProducts);
    }
  }, [selectedMarksIds]);

  useEffect(() => {
    if (selectedSizesIds.length === 0) {
      fetch_data("/products", setProducts);
    } else {
      const sizesIdsString = selectedSizesIds.join(',');
      fetch_data("/products/sizes/" + sizesIdsString, setProducts);
    }
  }, [selectedSizesIds]);

  useEffect(() => {
    if (selectedColorsIds.length === 0) {
      fetch_data("/products", setProducts);
    } else {
      const colorsIdString = selectedColorsIds.join(',');
      fetch_data("/products/colors/" + colorsIdString, setProducts);
    }
  }, [selectedColorsIds]);

  useEffect(() => {
    if (minPrice === 0 && maxPrice === 100000) {
      fetch_data("/products", setProducts);
    } else {
      const priceRangeString = minPrice + "," + maxPrice;
      fetch_data("/products/rangeprices/" + priceRangeString, setProducts);
    }
  }, [minPrice, maxPrice]);

  const handleCategorySelect = (categoryId) => { setSelectedCategoryId(categoryId) };
  const handleMarkSelect = (markIds) => { setSelectedMarksIds(markIds) };
  const handleSizeSelect = (sizeIds) => { setSelectedSizesIds(sizeIds) };
  const handleColorSelect = (colorIds) => { setSelectedColorsIds(colorIds) };
  const handlePriceSelect = (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
  };
  const handleSearchChange = (searchText) => {
    const filteredProducts = products.filter((product) => {
      return product.product.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <header className="sticky-top">
        <Navigation categories={categories} onCategorySelect={handleCategorySelect} />
      </header>
      <main>
        <Products 
          products={products}
          marks={marks} 
          sizes={sizes} 
          colors={colors} 
          prices={mmPrices}
          onMarksSelect={handleMarkSelect} 
          onSizesSelect={handleSizeSelect} 
          onColorsSelect={handleColorSelect}
          onPriceSelect={handlePriceSelect}
          // productsF={handleSearchChange} 
        />
      </main>
    </>
  );
}

export default App;