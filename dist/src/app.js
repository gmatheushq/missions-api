"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const missions_1 = require("./data/missions");
function createApp() {
    const app = (0, express_1.default)();
    // ======================
    // Middlewares
    // ======================
    app.use(express_1.default.json());
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)("dev"));
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
            total: missions_1.missions.length,
            missions: missions_1.missions,
        });
    });
    // Missão por número/id
    app.get("/missions/:id", (req, res) => {
        const id = Number(req.params.id);
        if (Number.isNaN(id)) {
            return res.status(400).json({ error: "ID inválido" });
        }
        const mission = missions_1.missions.find((m) => m.id === id);
        if (!mission) {
            return res.status(404).json({ error: "Missão não encontrada" });
        }
        res.json(mission);
    });
    // Missão aleatória
    app.get("/missions-random", (_, res) => {
        const randomIndex = Math.floor(Math.random() * missions_1.missions.length);
        const mission = missions_1.missions[randomIndex];
        res.json(mission);
    });
    return app;
}
