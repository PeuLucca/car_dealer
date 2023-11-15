const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "car_dealer",
})

app.get('/', (req, res) => {
    return res.json('Sucesso ao conectar server!');
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });

// Login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }
  
    const query = 'SELECT * FROM users WHERE email = ? AND password_hash = ?';
  
    db.query(query, [email, password], async (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      if (data.length === 0) {
        return res.status(401).json({ response: false, message: "Invalid Email/Password" });
      }

      return res.json({ response: true, message: "Success" });
    });
});

// Cars
// Retornar todos os objetos cars
app.get('/cars', (req, res) => {
    const query = "SELECT * FROM cars";

    db.query(query, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// Reviews
// Retornar todos os objetos reviews
app.get('/purchases', (req, res) => {
    const query = `
        SELECT
            users.*,
            cars.*,
            purchases.purchase_id,
            purchases.review_text,
            purchases.rating,
            purchases.purchase_date
        FROM
            users
        INNER JOIN
            purchases ON users.user_id = purchases.user_id
        INNER JOIN
            cars ON purchases.car_id = cars.car_id
    `;

    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});
