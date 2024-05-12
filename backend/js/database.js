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

export default connection;