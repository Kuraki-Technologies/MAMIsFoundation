import { Router } from "express";
import { EventBAO } from "../bal/event.bao";

const router = Router();
const eventBAO = new EventBAO();

router.get("/upcoming", async (req, res) => {
  try {
    const events = await eventBAO.getUpcomingEvents();
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await eventBAO.getAllEvents();
    res.json(events);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;