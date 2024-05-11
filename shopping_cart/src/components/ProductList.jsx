import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import Filters from "./filters";

// CREATION OF THE PRODUCTLIST COMPONENT
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("http://localhost:3000/clothe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setProducts(await result.json());
    };

    fetchData().catch((error) =>
      console.error("Error fetching products:", error)
    );
  }, []);

  return (
    <div className="container">
      <div className="row">
        <aside className="col-2 border border-start-0">
          <Filters />
        </aside>
        <main className="col-10 border border-end-0">
          <section className="row row-cols-3 no-gutters">
            {products.map((element, index) => (
              <div className="col" key={index}>
                <ProductCard product={element} />
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductList;