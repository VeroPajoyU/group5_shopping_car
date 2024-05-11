import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const CREDENTIALS = {
  MYSQL_HOST: 'localhost',
  MYSQL_USER: 'root',
  MYSQL_PASSWORD: '1234',
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

//ENDPOINT TO GET ALL SIZES
app.post('/size', async (req, res) => {
    try {
        const query =   `SELECT
                            t.id_talla AS id,
                            t.nombre_talla AS talla
                        FROM tallas t;`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO GET ALL MARKS
app.post('/mark', async (req, res) => {
    try {
        const query =   `SELECT
                            m.id_marca AS id,
                            m.nombre_marca AS marca
                        FROM marcas m;`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO GET ALL COLORS
app.post('/color', async (req, res) => {
    try {
        const query =   `SELECT
                            c.id_color AS id,
                            c.nombre_color AS color
                        FROM colores c;`;
        const [results] = await connection.query(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'DATA NO FOUND' });
    }
});

//ENDPOINT TO GET ALL PRODUCTS
app.post('/clothe', async (req, res) => {
    try {
        const query =   `SELECT
                            p.id_producto AS id,
                            p.nombre_producto AS garment,
                            p.descripcion_producto AS description,
                            p.costo_producto AS price
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
                            p.nombre_producto AS garment,
                            p.descripcion_producto AS description,
                            p.costo_producto AS price
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
                            p.nombre_producto AS garment,
                            p.descripcion_producto AS description,
                            p.costo_producto AS price
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
                            p.nombre_producto AS garment,
                            p.descripcion_producto AS description,
                            p.costo_producto AS price
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

// http://localhost:3000/clothe/category/1

// http://localhost:3000/clothe/size/1

// http://localhost:3000/clothe/mark/1

// http://localhost:3000/clothe