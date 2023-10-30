#  Simulador de Biblioteca 

<img src="https://i.pinimg.com/originals/a6/0b/57/a60b57a41f975f1e509348e5a4b218bc.png" width="200px" align="right" >
  <p align="left">
Este é um simulador de biblioteca simples desenvolvido usando Node.js, PostgreSQL como banco de dados, Express.js para o servidor web, e Nodemon para facilitar o desenvolvimento. Este projeto permite que você gerencie livros e autores em uma biblioteca.
  </p>


## :man_mechanic: Linguagens e Ferramentas

![Skills](https://skillicons.dev/icons?i=nodejs,js,express,postgres)

## :ladder: Fucionalidades do Projeto

- [x] Listar Usuarios pelo ID informado
- [x] Cadastros de Livros e Autores
- [x] Acesso Fácil
- [x] Testes Rápidos
- [x] Desenvolvimento Contínuo
- [ ] Atualização de dados
- [ ] Deletar Autores e Livros

## :facepunch: Como Usar

- Clone o repositório para sua máquina local.
- No terminal, navegue até o diretório do projeto e execute npm install para instalar as dependências.
- Na parte de configurações do PostgreSQL insira os seus respectivos dados.
- Inicie o servidor usando npm run dev. O Nodemon garantirá que o servidor seja reiniciado automaticamente após cada alteração no código.
- Utilize o Insomnia ou qualquer outra ferramenta de teste de API para enviar requisições para os endpoints fornecidos pela API.

## :triangular_flag_on_post: Contribua com o projeto

- Realize o Fork
- Faça as modificações necessárias
- Realize a Pull Request (PR)

## :computer: Rodando o Projeto

```shell
# 1. Clone o projeto

git clone <urlProjeto>

# 2. Instale as dependências

npm install

# 3. Execute a API

npm run dev
```

## :sassy_man: Endpoints

- POST /autor/:id/livro - Cadastra livros através do id informado do autor
- GET /autor/:id - Buscar o autor pelo seu ID
- POST /autor - Cadastra um autor novo
- GET /livro - Listagem de todos os livros e seus respectivos autores

