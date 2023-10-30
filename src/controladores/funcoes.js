const {Pool} = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user:'postgres',
  password: '1234',
  database:'biblioteca'
});

const cadastrarAutor = async (req,res)=>{
  const {nome,idade} =  req.body;
  try {
    const query = `insert into autores (nome,idade)
    values($1,$2) returning *`
    const values = [nome,idade];
    const resultado = await pool.query(query,values);
    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: 'Erro ao cadastrar autor.' });
  }
}


const buscarporId = async(req,res)=>{
  const {id} = req.params;
  try {
    const query = `select autores.nome,autores.id,autores.idade,livros.nome as livro_nome,livros.genero as livro_genero,livros.editora as livro_editora,livros.datapublicacao as data_pb ,livros.autorcode as code
    from autores 
    left join livros on autores.id = livros.autorcode
    where autores.id = $1`;
    const params = [id];
    const resultado = await pool.query(query,params);
    const autorFormatado = resultado.rows.map(autor=>{
      return{
        id: autor.id,
        nome: autor.nome,
        idade: autor.idade,
        livro:{
          id:autor.code,
          nome:autor.livro_nome,
          genero:autor.livro_genero,
          editora:autor.livro_editora,
          data_publicacao: autor.data_pb
        }
      };
    });
    return res.json(autorFormatado);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({error: 'erro no servidor nao foi possivel listar livros'});
  }
}

const cadastrarLivro = async (req,res)=>{
  const {id} = req.params;
  const {nome,genero,editora,datapublicacao} = req.body;
  try {
    const query = `insert into livros (nome,genero,editora,datapublicacao,autorcode)
    values($1,$2,$3,$4,$5) returning *`
    const values = [nome,genero,editora,datapublicacao,id];
    const resultado = await pool.query(query,values);
    return res.json(resultado.rows)
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({error:'Erro ao cadastrar livro'});
  }
}

const listarLivros = async(req,res)=>{
  try {
    const query  = `select livros.codelivro, livros.nome, livros.genero, livros.editora, livros.datapublicacao, autores.nome as nome_autor, autores.id as autores_id, autores.idade as autores_idade
    from livros
    left join autores on livros.autorcode = autores.id `;
    const resultado = await pool.query(query);
    const livroFormatado = resultado.rows.map(livro =>{
      return {
        id: livro.codelivro,
        nome: livro.nome,
        genero: livro.genero,
        editora: livro.editora,
        data_publicacao: livro.datapublicacao,
        autor: {
          id: livro.autores_id,
          nome: livro.nome_autor,
          idade: livro.autores_idade
        }
      };
    })
    return res.json(livroFormatado);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({error:''})
  }
}

module.exports = {
  cadastrarAutor,
  buscarporId,
  cadastrarLivro,
  listarLivros
}