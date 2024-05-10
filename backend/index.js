import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const CREDENTIALS = {
  MYSQL_HOST: 'localhost',
  MYSQL_USER: 'root',
  MYSQL_PASSWORD: '',
  MYSQL_DATABASE: 'shoppingcart'
};

const connection = mysql.createPool({
  host: CREDENTIALS.MYSQL_HOST,
  user: CREDENTIALS.MYSQL_USER,
  password: CREDENTIALS.MYSQL_PASSWORD,
  database: CREDENTIALS.MYSQL_DATABASE
}).promise();

const app = express();
app.use(cors());
app.use(express.json());

//ENDPOINT TO GET ALL PRODUCTS
app.post('/clothe', async (req, res) => {
    try {
        const query =   `SELECT
                            p.nombre_producto AS Garment,
                            p.descripcion_producto AS Description,
                            p.costo_producto AS Price
                        FROM productos p;`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO FILTER CATEGORY OF CLOTHES
app.post('/clothe/category/:id', async (req, res) => {
    //OBTAIN THE URL ID
    const { id } = req.params;
    try {
        const query =   `SELECT
                            p.nombre_producto AS Garment,
                            p.descripcion_producto AS Description,
                            p.costo_producto AS Price
                        FROM productos p
                        JOIN categorias c ON c.id_categoria = p.id_categoria_producto
                        WHERE c.id_categoria = ${id};`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO FILTER MARK CLOTHE
app.post('/clothe/mark/:id', async (req, res) => {
    //OBTAIN THE URL ID
    const { id } = req.params;
    try {
        const query =   `SELECT
                            p.nombre_producto AS Garment,
                            p.descripcion_producto AS Description,
                            p.costo_producto AS Price
                        FROM productos p
                        JOIN marcas m ON m.id_marca = p.id_marca_producto
                        WHERE m.id_marca = ${id};`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO FILTER SIZE CLOTHE
app.post('/clothe/size/:id', async (req, res) => {
    //OBTAIN THE URL ID
    const { id } = req.params;
    try {
        const query =   `SELECT
                            p.nombre_producto AS Garment,
                            p.descripcion_producto AS Description,
                            p.costo_producto AS Price
                        FROM productos p
                        JOIN tallas t ON t.id_talla = p.id_marca_producto
                        WHERE t.id_talla = ${id};`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});