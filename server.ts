import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import donationRoutes from "./server/routes/donation.routes";
import eventRoutes from "./server/routes/event.routes";
import { CONFIG } from "./config/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({
      status: "ok",
      message: `${CONFIG.APP.NAME} server running`,
      environment: CONFIG.APP.ENV,
    });
  });

  // API Routes
  app.use("/api/donations", donationRoutes);
  app.use("/api/events", eventRoutes);

  // Vite middleware for development
  if (CONFIG.APP.ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(CONFIG.APP.PORT, "0.0.0.0", () => {
    console.log(
      `✅ ${CONFIG.APP.NAME} Server running on http://localhost:${CONFIG.APP.PORT}`
    );
    console.log(`📧 Environment: ${CONFIG.APP.ENV}`);
  });
}

startServer().catch((err) => {
  console.error("❌ Failed to start server:", err);
  process.exit(1);
});