"use strict";

import express from "express";
import { sum, isPrime, serveApiDocs } from "./controller";

// Initializing express router.
const router: express.Router = express.Router();

// applying API paths to router.
router.get("/api/sum", sum);
router.get("/api/prime", isPrime);
router.get("/docs", serveApiDocs)

// Exporting router.
export default router;