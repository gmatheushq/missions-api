import express from "express";
import cors from "cors";
import morgan from "morgan";

import { missions } from "./data/missions";

export function createApp() {
  const app = express();

  // ======================
  // Middlewares
  // ======================
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  // ======================
  // Health check
  // ======================
  app.get("/health", (_, res) => {
    res.json({ ok: true });
  });

  // ======================
  // MISSÕES
  // ======================

  // Todas as missões
  app.get("/missions", (_, res) => {
    res.json({
      total: missions.length,
      missions,
    });
  });

  // Missão por número/id
  app.get("/missions/:id", (req, res) => {
    const id = Number(req.params.id);

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const mission = missions.find((m) => m.id === id);

    if (!mission) {
      return res.status(404).json({ error: "Missão não encontrada" });
    }

    res.json(mission);
  });

  // Missão aleatória
  app.get("/missions-random", (_, res) => {
    const randomIndex = Math.floor(Math.random() * missions.length);
    const mission = missions[randomIndex];

    res.json(mission);
  });

  return app;
}
