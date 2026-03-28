import { Router } from "express";
import { DonationBAO } from "../bal/donation.bao";

const router = Router();
const donationBAO = new DonationBAO();

router.post("/initiate", async (req, res) => {
  try {
    const result = await donationBAO.initiateDonation(req.body);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.post("/verify", async (req, res) => {
  try {
    const { orderId, status } = req.body;
    const result = await donationBAO.verifyPayment(orderId, status);
    res.json(result);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/stats", async (req, res) => {
  try {
    const stats = await donationBAO.getDonationStats();
    res.json(stats);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;