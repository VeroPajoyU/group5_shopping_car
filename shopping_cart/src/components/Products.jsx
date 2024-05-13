// Products.jsx --> Componente principal que mostrará las cartas de productos.
import ProductCard from "./ProductCard";

function Products({ products, marks, sizes, colors }) {
  return (
    <div className="container">
      <section className="row row-cols-3 no-gutters justify-content-center">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </section>
    </div>
  );
}

export default Products;
