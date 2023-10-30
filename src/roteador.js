const express = require('express');
const rotas = express();
const { cadastrarAutor, buscarporId, cadastrarLivro, listarLivros } = require('./controladores/funcoes');


rotas.post('/autor',cadastrarAutor);
rotas.get('/autor/:id',buscarporId);
rotas.post('/autor/:id/livro',cadastrarLivro);
rotas.get('/livro',listarLivros);

module.exports = rotas;