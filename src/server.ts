"use strict";

import express from "express";
import cors from "cors";
import router from "./router";

// Initializing express application.
const port = 8081;
const app = express();
app.use(express.json());
app.use(cors());

// Applying router to express server.
app.use(router);

// Listening incoming API requests.
app.listen(port, () => console.log(`Server listening at port ${port}`));