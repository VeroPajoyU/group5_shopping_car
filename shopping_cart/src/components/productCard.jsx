//CREATION OF THE PRODUCTCARD COMPONENT
function ProductCard({ product }) {
    return (
      <div className="card h-100">
        <img src="https://www.louisphilippe.com/blog/wp-content/uploads/2022/07/Select-The-Best-From-This-Stellar-Range-Of-Mens-T-shirts-Louis-Philippe-Fashion-Blogs.jpg" className="card-img-top" alt={product.garment} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.garment}</h5>
          <p className="card-text flex-grow-1">
            {product.description}
          </p>
          <div className="mt-auto">
            <h2>${product.price}</h2>
            <a href="#" className="btn btn-success ">
              Add cart
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductCard;