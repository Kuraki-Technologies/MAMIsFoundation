// donation.dao.ts

import { IEntity } from './IEntity';
import { BaseDAO } from './BaseDAO';

export interface Donation extends IEntity {
    id: string;
    amount: number;
    donorName: string;
    donorEmail: string;
    timestamp: Date;
}

export class DonationDAO extends BaseDAO<Donation> {
    constructor() {
        super('donations');
    }

    // Additional methods for managing donation data can be added here
}