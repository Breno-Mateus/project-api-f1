# F1 Teams API

Esta é uma API minimalista construída usando **Fastify** para listar as equipes da Fórmula 1. A API permite obter informações sobre as equipes e também aplicar um filtro para buscar uma equipe específica pelo ID.

## Tecnologias Utilizadas

- **Node.js**
- **Fastify** (framework para Node.js)
- **TypeScript**
- **dotenv** (gerenciamento de variáveis de ambiente)

## Rotas da API

### 1. `GET /teams`

Esta rota retorna uma lista de todas as equipes da Fórmula 1. Cada equipe tem um ID, nome, base e o logo.

**Exemplo de resposta:**

```json
[
    {
        "id": 1,
        "name": "Red Bull Racing",
        "base": "Milton Keynes, United Kingdom",
        "logo": "https://1000logos.net/wp-content/uploads/2021/04/Red-Bull-logo.png"
    },
    {
        "id": 2,
        "name": "Ferrari",
        "base": "Maranello, Italy",
        "logo": "https://1000logos.net/wp-content/uploads/2018/04/Ferrari-logo.png"
    }
]