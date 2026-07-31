# Connect Sea - Frontend

O projeto consiste em uma aplicação web para gerenciamento e visualização de informações relacionadas a escalas e manifestos, consumindo uma API REST desenvolvida em .NET.

---

## 🚀 Tecnologias utilizadas

- Angular
- TypeScript
- SCSS
- RxJS
- Angular Router
- HttpClient

---

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── enums/             # Enumerações utilizadas pela aplicação
│   ├── models/            # Interfaces e modelos de dados
│   ├── pages/             # Páginas da aplicação
│   │   ├── home/          # Página inicial
│   │   ├── escalas/       # Consulta de escalas
│   │   └── manifestos/    # Consulta de manifestos
│   │
│   ├── services/          # Serviços para comunicação com API
│   ├── app.config.ts      # Configurações globais da aplicação
│   ├── app.routes.ts      # Definição das rotas
│   └── app.component.ts   # Componente principal
│
├── environments/          # Configurações por ambiente
├── assets/                # Arquivos estáticos
└── styles.scss            # Estilos globais
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, é necessário possuir instalado:

- Node.js
- npm
- Angular CLI

Instalação do Angular CLI:

```bash
npm install -g @angular/cli
```

---

## 📥 Instalação

Clone o repositório:

```bash
git clone <repository-url>
```

Acesse a pasta:

```bash
cd <project-folder>
```

Instale as dependências:

```bash
npm install
```

---

## 🔧 Configuração

Configure a URL da API no arquivo:

```
src/environments/environment.ts
```

Exemplo:

```typescript
export const environment = {
  production: false,
  apiUrl: 'https://localhost:5001/api'
};
```

---

## ▶️ Executando a aplicação

Para iniciar o servidor de desenvolvimento:

```bash
ng serve
```

A aplicação estará disponível em:

```
http://localhost:4200
```

---

## 📚 Funcionalidades

### Escalas

Permite consultar informações de escalas cadastradas através da API.

Principais recursos:

- Listagem de escalas
- Paginação
- Visualização dos dados da escala

---

### Manifestos

Permite consultar manifestos cadastrados.

Principais recursos:

- Listagem de manifestos
- Paginação
- Consulta das informações do manifesto

---

## 🔌 Integração com API

A comunicação com o backend é realizada através de serviços Angular utilizando o `HttpClient`.

Responsabilidades dos serviços:

- Requisições HTTP
- Conversão dos dados recebidos
- Centralização da comunicação com backend

---

## 📝 Decisões técnicas

- Utilização da arquitetura standalone do Angular.
- Separação das responsabilidades entre páginas, serviços e modelos.
- Uso de interfaces para tipagem dos dados.
- Componentização visando facilitar manutenção e evolução.
- Organização baseada em funcionalidades.

---

## 👨‍💻 Autor

Bruno Martins Peçanha
