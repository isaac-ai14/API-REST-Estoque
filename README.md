# API REST - Controle de Estoque

## 📌 Sobre o projeto

Este projeto foi desenvolvido como parte de uma atividade acadêmica do curso de **Análise e Desenvolvimento de Sistemas (ADS)**.

O objetivo da atividade foi colocar em prática os conceitos de desenvolvimento backend, criando uma API REST simples para gerenciamento de materiais em estoque, utilizando **Node.js, Express e JavaScript**.

Decidi compartilhar este projeto no GitHub principalmente como uma forma de registrar meu aprendizado e guardar uma lembrança dessa etapa da faculdade. É um projeto simples, mas que representa mais um passo na minha evolução como estudante de tecnologia.

## 🚀 Tecnologias utilizadas

- JavaScript
- Node.js
- Express.js
- JSON
- Postman (testes das requisições)

## ⚙️ Funcionalidades

A API permite realizar as quatro operações básicas de um CRUD:

| Método | Rota | Funcionalidade |
|---|---|---|
| GET | `/materials` | Listar todos os materiais |
| GET | `/materials/:id` | Buscar um material pelo ID |
| POST | `/materials` | Cadastrar um novo material |
| PUT | `/materials/:id` | Atualizar um material existente |
| DELETE | `/materials/:id` | Excluir um material |

## 🎥 Demonstração da API

Também disponibilizei um vídeo demonstrando o funcionamento da API na prática, realizando requisições HTTP e mostrando os resultados das operações:

- **GET:** listagem e busca de materiais cadastrados.
- **POST:** cadastro de um novo material.
- **PUT:** atualização das informações de um material.
- **DELETE:** exclusão de um material do estoque.

O vídeo apresenta os testes dos endpoints e permite visualizar o funcionamento das operações CRUD desenvolvidas durante a atividade.

**[Assistir à demonstração da API](https://youtu.be/Z8y6vKCtnOM)**

## 💻 Como executar o projeto

**1.** Clone o repositório:

```bash
git clone https://github.com/isaac-ai14/API-REST-Estoque.git
```

**2.** Entre na pasta do projeto:

```bash
cd API-REST-Estoque
```

**3.** Instale as dependências:

```bash
npm install
```

**4.** Inicie o servidor:

```bash
node src/app.js
```

A API estará disponível em:

`http://localhost:3002/materials`

As requisições podem ser testadas utilizando o Postman.

## 📝 Observações

Este projeto tem finalidade exclusivamente acadêmica e utiliza um array para armazenar os dados temporariamente em memória, sem integração com banco de dados.

Por esse motivo, os dados cadastrados são perdidos quando o servidor é reiniciado.

A intenção de publicá-lo não é apresentar um sistema completo de estoque, mas **documentar uma atividade da faculdade e manter um registro da minha evolução no aprendizado de desenvolvimento backend**.
