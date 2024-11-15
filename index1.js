const mysql = require('mysql2');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Get MySQL connection details from environment variables
        let host = process.env.localhost;
        let user = process.env.root;
        let password = process.env.Shivu123$;
        let database = process.env.beehive1;

        // Create a connection to the MySQL database
        const connection = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            database: database
        });

        // Connect to MySQL
        connection.connect((err) => {
            if (err) {
                console.error('Error connecting to MySQL: ', err.message);
                return;
            }
            console.log('MySQL Connected...');
        });

        // Optionally, return the connection for further use
        return connection;
    } catch (error) {
        console.error('Error: ', error.message);
    }
}

module.exports = { connectDB };
