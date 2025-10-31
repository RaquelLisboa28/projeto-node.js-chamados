🔎 Visão geral

Projeto exemplo para aprender como criar um servidor HTTP em Node.js usando ES Modules (import/export), manipulando rotas com expressões regulares, parse de query string e persistência simples em arquivo JSON.
Porta padrão: 3333
Arquivos principais: src/server.js, src/routes/*, src/controllers/*, src/database/*
Persistência: src/database/db.json (arquivo JSON local)

📁 Estrutura do projeto
src/
├─ controllers/
│  └─ tickets/
│     ├─ create.js
│     ├─ index.js
│     ├─ update.js
│     ├─ updateStatus.js
│     └─ remove.js
├─ database/
│  ├─ database.js
│  └─ db.json
├─ middlewares/
│  ├─ jsonHandler.js
│  └─ routeHandler.js
├─ routes/
│  ├─ index.js
│  └─ tickets.js
├─ utils/
│  ├─ parseRoutePath.js
│  └─ extractQueryParams.js
└─ server.js

⚙️ Requisitos

Node.js (recomendo v18+)
Nenhuma dependência externa (projeto usa apenas módulos nativos)
Importante: como o código usa import/export (ESM), adicione em package.json:

{
  "type": "module",
  "scripts": {
    "start": "node src/server.js"
}

🚀 Como rodar localmente

Clone o repositório:

git clone https://github.com/RaquelLisboa28/projeto-node.js-chamados.git
cd projeto-node.js-chamados
Inicie o servidor:
npm start
# ou
node src/server.js
Abra: http://localhost:3333

🧭 Endpoints disponíveis

Base: http://localhost:3333
Criar ticket
POST /tickets

Listar tickets (com filtro opcional)
GET /tickets
Query opcional: ?status=open ou ?status=closed
Retorna array de tickets (JSON).

Atualizar ticket (dados gerais)
PUT /tickets/:id

Fechar ticket (atualizar status + solution)
PATCH /tickets/:id/close

Remover ticket
DELETE /tickets/:id
Retorna 200 com corpo vazio.

🗃️ Formato do db.json

Arquivo localizado em src/database/db.json. Exemplo de conteúdo:

{
  "tickets": [
    {
      "id":"469bce06-57fb-494b-adc6-7624ca6f80f9",
      "equipment":"Teclado",
      "description":"A tecla de espaço não funciona.",
      "user_name":"Luana Lima",
      "status":"closed",
      "created_at":"2025-08-25T18:16:18.799Z",
      "updated_at":"2025-08-25T18:16:18.799Z",
      "solution":"Equipamento trocado."
    }
  ]
}
}



