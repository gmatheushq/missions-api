import express from "express";
import cors from "cors";
import morgan from "morgan";

export function createApp() {
  const app = express();

  // Middlewares básicos
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  // Rotas
  app.get("/health", (_, res) => res.json({ ok: true }));

  return app;
}
