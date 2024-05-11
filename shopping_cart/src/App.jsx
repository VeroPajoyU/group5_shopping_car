// import Content from "./components/content";
import ProductList from "./components/ProductList";
import Navigation from "./components/navigation";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      {/* AÑADIR UN MARGIN TOP PERSONALIZADO PARA EVITAR QUE EL CONTENIDO SE PIERDA DENTRO DE LA BARRA DE NAVEGACIÓN. */}
      <main>
        <ProductList/>
      </main>
    </>
  );
}

export default App;

// App.jsx
// import React from 'react';
// import ProductList from './components/ProductList';

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: 'T-Shirt',
//       description: 'A comfortable t-shirt',
//       image: 'https://www.louisphilippe.com/blog/wp-content/uploads/2022/07/Select-The-Best-From-This-Stellar-Range-Of-Mens-T-shirts-Louis-Philippe-Fashion-Blogs.jpg',
//     },
//     {
//       id: 2,
//       name: 'Jeans',
//       description: 'A pair of stylish jeans',
//       image: 'https://clustermodanorte.cccucuta.org.co/wp-content/uploads/2021/08/16522-2.jpg',
//     },
//     {
//       id: 3,
//       name: 'T-Shirt',
//       description: 'A comfortable t-shirt',
//       image: 'https://www.louisphilippe.com/blog/wp-content/uploads/2022/07/Select-The-Best-From-This-Stellar-Range-Of-Mens-T-shirts-Louis-Philippe-Fashion-Blogs.jpg',
//     },
//     {
//       id: 4,
//       name: 'Jeans',
//       description: 'A pair of stylish jeans',
//       image: 'https://clustermodanorte.cccucuta.org.co/wp-content/uploads/2021/08/16522-2.jpg',
//     },
//     // Add more products here
//   ];

//   return (
//     <>
//     <header>
//     <Navigation />
//     </header>
//     <div className="container">
//       <h1>Clothing Products</h1>
//       <ProductList products={products} />
//     </div>
//     </>
//   );
// }

// export default App;


////////////////////////////////////

// import React from 'react';
// import ProductList from "./components/ProductList";

// const App = () => {
//   return (
//     <div className="container-fluid">
//       <ProductList />
//     </div>
//   );
// };

// export default App;