const express = require('express');

function createRouter(db) {
    const router = express.Router();
    const nome_cidade = '';
  
    router.post('/cidade', (req, res, next) => {
        db.query(
          'INSERT INTO cidade (nome_cidade, codigo, uf) VALUES (?,?,?,?)',
          [req.body.nome_cidade, req.body.codigo, req.body.uf],
          (error) => {
            if (error) {
              console.error(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json({status: 'ok'});
            }
          }
        );
      });

      router.get('/cidade', function (req, res, next) {
        db.query(
          'SELECT id, codigo, uf FROM cidade WHERE nome_cidade=? LIMIT 10 OFFSET ?',
          [req.body.nome_cidade, 10*(req.params.page || 0)],
          (error, results) => {
            if (error) {
              console.log(error);
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json(results);
            }
          }
        );
      });

      router.put('/cidade/:id', function (req, res, next) {
        db.query(
          'UPDATE cidade SET codigo=?, uf=?, date=? WHERE id=? AND nome_cidade=?',
          [req.body.codigo, req.body.uf, req.params.id, req.body.nome_cidade],
          (error) => {
            if (error) {
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json({status: 'ok'});
            }
          }
        );
      });

      router.delete('/cidade/:id', function (req, res, next) {
        db.query(
          'DELETE FROM cidade WHERE id=? AND nome_cidade=?',
          [req.params.id, req.body.nome_cidade],
          (error) => {
            if (error) {
              res.status(500).json({status: 'error'});
            } else {
              res.status(200).json({status: 'ok'});
            }
          }
        );
      });
  
    return router;
  }

module.exports = createRouter;