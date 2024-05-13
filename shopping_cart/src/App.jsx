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
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedMarksIds, setSelectedMarksIds] = useState([]);
  const [selectedSizesIds, setSelectedSizesIds] = useState([]);

  useEffect(() => {
    fetch_data("/products", setProducts);
    fetch_data("/categories", setCategories);
    fetch_data("/marks", setMarks);
    fetch_data("/sizes", setSizes);
    fetch_data("/colors", setColors);
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

  const handleCategorySelect = (categoryId) => { setSelectedCategoryId(categoryId) };
  const handleMarkSelect = (markIds) => { setSelectedMarksIds(markIds) };
  const handleSizeSelect = (sizeIds) => { setSelectedSizesIds(sizeIds) };

  return (
    <>
      <header>
        <Navigation categories={categories} onCategorySelect={handleCategorySelect} />
      </header>
      <main>
        <Products 
          products={products} 
          marks={marks} 
          sizes={sizes} 
          colors={colors} 
          onMarksSelect={handleMarkSelect} 
          onSizesSelect={handleSizeSelect} 
        />
      </main>
    </>
  );
}

export default App;