var express = require('express');
var router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./cidades');

const connection = mysql.createConnection({
  port : 8080,
  host     : 'localhost',
  user     : 'PROVA_MATHEUS',
  password : 'provaernetwork',
  database : 'PROVA_MATHEUS'
});

connection.connect();

const port = process.env.PORT || 8080;

const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(events(connection));

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
