# Projeto feito com React e Vercel para consumo de uma API sobre livros do Harry Potter

---

## 📚 1. Sobre o Projeto

Este projeto é uma atividade prática da disciplina de Frontend Frameworks, desenvolvida utilizando **React** com **Vite**.

O objetivo principal é demonstrar o consumo de uma API REST pública (Harry Potter API) e a implementação de uma Single Page Application (SPA) com roteamento entre 3 telas obrigatórias, além da persistência de dados utilizando o `localStorage`.

### Requisitos Atendidos

* **Ambiente:** Node.js (20.19.*) e Vite (7.* - Template React).
* **API:** Consumo da Harry Potter API (`potterapi-fedeperin.vercel.app`).
* **Telas Obrigatórias:** Home, Detalhes do Livro, Favoritos.
* **Persistência:** Lista de Favoritos salva no `localStorage` do navegador.
* **Publicação:** Deployed no Vercel.
* **Critério de Qualidade:** Layout centralizado e organizado, conforme as modificações solicitadas.

---

## 🚀 2. Instalação e Execução Local

Siga os passos abaixo para clonar e executar a aplicação em seu ambiente de desenvolvimento.

### Pré-requisitos

* Node.js na versão **20.19.x** (Recomendado usar **NVM** para gerenciar a versão).
* Um gerenciador de pacotes: `npm`, `yarn` ou `pnpm`.

### Passos

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/SEU-USUARIO/react_vercel_app.git](https://github.com/SEU-USUARIO/react_vercel_app.git)
    cd react_vercel_app
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    # ou yarn install / pnpm install
    ```

3.  **Inicie o Servidor de Desenvolvimento:**
    ```bash
    npm run dev
    ```

A aplicação estará acessível em `http://localhost:5173/` (ou a porta indicada pelo Vite).

---

## 🗺️ 3. Estrutura e Rotas da Aplicação

O projeto segue a arquitetura de *Container/Componentes/Utils* e utiliza o **React Router DOM** para gerenciar as 3 telas obrigatórias.

| Rota (URL) | Tela Obrigatória | Funcionalidade |
| :--- | :--- | :--- |
| `/` | **Tela 1: Página Inicial (Home)** | Busca um **novo** livro aleatório na API. Ao clicar na capa, navega para os detalhes. |
| `/details/:number` | **Tela 2: Detalhes do Livro** | Exibe capa, título completo e dados técnicos. Possui lógica de *fallback* para buscar os dados na API caso a página seja recarregada (`F5`). |
| `/favorites` | **Tela 3: Página de Favoritos** | Recupera e exibe a lista de livros favoritos salvos no `localStorage`. |

---

## 📸 4. Screenshots (Prints de Tela)

Conforme a especificação, os prints das 3 telas são obrigatórios para a avaliação.

### 4.1. Tela 1: Página Inicial (Home)

*(Esta imagem deve mostrar o layout centralizado, a capa do livro e o título.)*



### 4.2. Tela 2: Página de Detalhes do Livro

*(Esta imagem deve mostrar a capa, os detalhes técnicos, a descrição e os dois botões: Voltar e Adicionar aos Favoritos.)*



### 4.3. Tela 3: Página de Favoritos

*(Esta imagem deve mostrar a lista de livros que você favoritou, persistidos localmente.)*



---
