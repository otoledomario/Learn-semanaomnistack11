const express = require('express')
const cors = require('cors')
const routes = require('./routes')


const app = express();
app.use(cors())
app.use(express.json())

app.use(routes)
/*
MÉTODOS HTTP
- GET: Buscar/Listar uma informação do back-end
- POST: Criar uma informação no back-end
- PUT: Alterar uma informação no back-end
- DELETE: Deletar uma informação no back-end
*/


/*
TIPOS DE PARÂMETROS
- QUERY PARAMS: Parâmetros nomeados na rota após o "?" (geralmente usados para filtros / paginação)
	ex link: http://localhost:3333/users?name=Mario

	para obter acesso:
	app.get('/users', (req, res) =>{

		// carrega um objeto com todas os query params
		const params = req.query
	})
	

- ROUTE PARAMS: Parâmetros utilizados para identificar recursos únicos
	ex link: http://localhost:3333/users/10

	para obter acesso:
	app.get('/users:id', (req, res) =>{

		// carrega um objeto com todas os route params
		const params = req.params
	})


- REQUEST BODY: Corpo da requisição utilizado para criar ou alterar recursos
	NÃO MUDA LINK

	para obter acesso:
	app.post('/users', (req, res) =>{

		// carrega um objeto com o request body
		const body = req.body
	})

	** retornará undefined ao passar um json. Precisa declarar no express que esse formato de informação será utilizado
	app.use(express.json())
*/


app.listen(3333);
