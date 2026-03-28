import { DonationDAO, Donation } from "../dal/donation.dao";
import { CONFIG } from "../../config/config";

export class DonationBAO {
  private donationDAO: DonationDAO;

  constructor() {
    this.donationDAO = new DonationDAO();
  }

  async initiateDonation(data: { amount: number; name: string; email: string }): Promise<any> {
    if (data.amount < CONFIG.DONATION.MIN_AMOUNT || data.amount > CONFIG.DONATION.MAX_AMOUNT) {
      throw new Error(
        `Amount must be between ${CONFIG.DONATION.MIN_AMOUNT} and ${CONFIG.DONATION.MAX_AMOUNT}`
      );
    }

    const donation: Donation = {
      amount: data.amount,
      currency: "INR",
      donorName: data.name,
      donorEmail: data.email,
      status: "pending",
    };
    await this.donationDAO.create(donation);

    return {
      orderId: `dummy_${Date.now()}`,
      amount: data.amount * 100,
      currency: "INR",
      key: "DUMMY_KEY",
      isDummy: true,
    };
  }

  async verifyPayment(orderId: string, status: "completed" | "failed"): Promise<{ success: boolean }> {
    await this.donationDAO.updateStatus(orderId, status);
    return { success: true };
  }

  async getDonationStats(): Promise<{ totalDonations: number; totalAmount: number; completedCount: number }> {
    const donations = await this.donationDAO.findAll();
    return {
      totalDonations: donations.length,
      totalAmount: donations.reduce((sum, d) => sum + d.amount, 0),
      completedCount: donations.filter((d) => d.status === "completed").length,
    };
  }
}