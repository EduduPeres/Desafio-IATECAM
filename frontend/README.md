# Frontend

Front foi criado usando Noje.js 19.6.0, Angular CLI 15.1.6
Para rodar o front rode `npm install` para instalar as dependências
Depois rode `ng serve`, a aplicação será aberta em `http://localhost:4200/`

Um bug de que tenho conhecimento mas não consegui resolver por pouco conhecimento na linguagem:
Se tentar criar/atualizar um produto sem mudar sua categoria, o front vai tentar mandar o id de categoria 0 para o back, ou seja, ele não salva o id correto logo quando a página de criar/atualizar é aberta, somente quando a categoria é atualizada que ele pega o id certo.
