import express = require('express');
import { router } from './router';
import cors from "cors"

const app = express();

app.use(express.json());
app.use(cors())

app.use(router);

const port = 4080;

app.listen(port, () => console.log("server online port: " + port ))