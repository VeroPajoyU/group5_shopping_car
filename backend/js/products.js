import connection from "./database.js";

const get_products = async () => {
    const query = 
        `SELECT
            id_producto AS id,
            nombre_producto AS product,
            descripcion_producto AS description,
            costo_producto AS price,
            cantidad_producto AS available_product
        FROM productos;`
    const [results] = await connection.query(query);
    
    return results;
};

const get_products_marks = async (req, res, id) => {
    const query = 
        `SELECT
            id_producto AS id,
            nombre_producto AS product,
            descripcion_producto AS description,
            costo_producto AS price,
            cantidad_producto AS available_product
        FROM productos p
        JOIN marcas m ON m.id_marca = p.id_marca_producto 
        WHERE m.id_marca in (${id});`
    const [results] = await connection.query(query);
    
    return results;
};

const get_products_sizes = async (req, res, id) => {
    const query = 
        `SELECT
            id_producto AS id,
            nombre_producto AS product,
            descripcion_producto AS description,
            costo_producto AS price,
            cantidad_producto AS available_product
        FROM productos p
        JOIN tallas t ON t.id_talla = p.id_talla_producto 
        WHERE t.id_talla in (${id});`
    const [results] = await connection.query(query);
    
    return results;
};

const get_products_colors = async (req, res, id) => {
    const query = 
        `SELECT
            id_producto AS id,
            nombre_producto AS product,
            descripcion_producto AS description,
            costo_producto AS price,
            cantidad_producto AS available_product
        FROM productos p
        JOIN colores c ON c.id_color = p.id_color_producto 
        WHERE c.id_color in (${id});`
    const [results] = await connection.query(query);
    
    return results;
};

const get_products_categories = async (req, res, id) => {
    const query = 
        `SELECT
            id_producto AS id,
            nombre_producto AS product,
            descripcion_producto AS description,
            costo_producto AS price,
            cantidad_producto AS available_product
        FROM productos p
        JOIN categorias c ON c.id_categoria = p.id_categoria_producto
        WHERE c.id_categoria in (${id});`
    const [results] = await connection.query(query);
    
    return results;
};

export { 
    get_products, 
    get_products_marks, 
    get_products_sizes, 
    get_products_colors, 
    get_products_categories 
};