# Back

Foi usado o mariadb-10.6.12 para o banco de dados.
Python fastapi para o gerenciamento de endpoints.
Script SQL para subir o banco está em `create_database.sql`

Para rodar o backend:
Crie um ambiente virtual no python com o comando:
`py -m venv venv`
Rode o ambiente virtual com:
`venv\Scripts\activate`
Verifique se o pip está atualizado com a versão mais recente com:
`pip install --upgrade pip`
Instale as dependências com:
`pip install -r req.txt`
Rode o serve com
`uvicorn main:app`
