const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

// Configuração da conexão MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'escola'
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao MySQL!');
  }
});

// Rota de exemplo
app.get('/', (req, res) => {
  // Exemplo de consulta ao MySQL
  connection.query('SELECT * FROM alunos', (error, results) => {
    if (error) {
      console.error('Erro na consulta MySQL:', error);
      res.status(500).send('Erro ao consultar o banco de dados');
    } else {
      res.json(results);
    }
  });
});