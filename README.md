# Missions API (simples)

API mínima para servir como backend do seu app Flutter.

## Requisitos
- Node.js 18+ (recomendado)

## Como rodar
1. Instale as dependências:
```bash
npm install
```

2. Crie o arquivo `.env` (baseado no `.env.example`):
```bash
cp .env.example .env
```

3. Rode em desenvolvimento:
```bash
npm run dev
```

A API sobe em `http://localhost:3000` (ou na porta definida em `PORT`).

## Endpoints
- `GET /health` → `{ "ok": true }`
