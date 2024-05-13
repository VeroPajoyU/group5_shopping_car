// Products.jsx --> Componente principal que mostrará las cartas de productos.
import ProductCard from './ProductCard';

function Products ({ products, marks, sizes, colors }){
  return(
    <section>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  )
}

export default Products;