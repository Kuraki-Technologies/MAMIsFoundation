import { EventDAO, Event } from "../dal/event.dao";

export class EventBAO {
  private eventDAO: EventDAO;

  constructor() {
    this.eventDAO = new EventDAO();
  }

  async getUpcomingEvents(): Promise<Event[]> {
    return await this.eventDAO.findUpcoming();
  }

  async getAllEvents(): Promise<Event[]> {
    return await this.eventDAO.findAll();
  }

  async getEventCount(): Promise<number> {
    const events = await this.eventDAO.findAll();
    return events.length;
  }
}