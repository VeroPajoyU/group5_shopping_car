  import express from 'express';
  import cors from 'cors';
  import async_wrapper from './js/async_wrapper.js';
  import get_marks from './js/marks.js';
  import get_sizes from './js/sizes.js';
  import get_colors from './js/colors.js';
  import get_categories from './js/categories.js';
  import { 
    get_products, 
    get_products_marks, 
    get_products_sizes, 
    get_products_colors, 
    get_products_categories, 
    get_products_minmax_prices, 
    get_products_range_prices, 
    get_products_search 
  } from './js/products.js';

  const app = express();
  app.use(cors());
  app.use(express.json());

  //ENDPOINT TO GET ALL MARKS
  app.post('/marks', async_wrapper(get_marks));

  //ENDPOINT TO GET ALL SIZES
  app.post('/sizes', async_wrapper(get_sizes));

  //ENDPOINT TO GET ALL COLORS
  app.post('/colors', async_wrapper(get_colors));

  //ENDPOINT TO GET ALL COLORS
  app.post('/categories', async_wrapper(get_categories));

  //ENDPOINT TO GET ALL PRODUCTS
  app.post('/products', async_wrapper(get_products));

  //ENDPOINT TO FILTER MARK PRODUCTS
  app.post('/products/marks/:id', async_wrapper(get_products_marks));

  //ENDPOINT TO FILTER SIZE PRODUCTS
  app.post('/products/sizes/:id', async_wrapper(get_products_sizes));

  //ENDPOINT TO FILTER SIZE PRODUCTS
  app.post('/products/colors/:id', async_wrapper(get_products_colors));

  //ENDPOINT TO FILTER CATEGORY OF PRODUCTS
  app.post('/products/categories/:id', async_wrapper(get_products_categories));

  //ENDPOINT TO FILTER MMPRICES OF PRODUCTS
  app.post('/products/mmprices', async_wrapper(get_products_minmax_prices));
  
  //ENDPOINT TO FILTER RANGEPRICES OF PRODUCTS
  app.post('/products/rangeprices/:id', async_wrapper(get_products_range_prices));

  //ENDPOINT TO SEARCH PRODUCTS
  app.post('/products/search', async_wrapper(get_products_search));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });