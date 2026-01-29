"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = require("./app");
const app = (0, app_1.createApp)();
const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API rodando na porta ${port}`);
});
