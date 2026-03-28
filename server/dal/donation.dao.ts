import { BaseDAO, IEntity } from "./base.dao";

export interface Donation extends IEntity {
  amount: number;
  currency: string;
  donorName: string;
  donorEmail: string;
  razorpayOrderId?: string;
  status: "pending" | "completed" | "failed";
}

export class DonationDAO extends BaseDAO<Donation> {
  private static donations: Donation[] = [];

  constructor() {
    super("donations");
  }

  async create(donation: Donation): Promise<Donation> {
    const newDonation: Donation = {
      ...donation,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date(),
    };
    DonationDAO.donations.push(newDonation);
    return newDonation;
  }

  async findAll(): Promise<Donation[]> {
    return DonationDAO.donations;
  }

  async updateStatus(orderId: string, status: "completed" | "failed"): Promise<void> {
    const donation = DonationDAO.donations.find((d) => d.razorpayOrderId === orderId);
    if (donation) {
      donation.status = status;
      donation.updatedAt = new Date();
    }
  }
}