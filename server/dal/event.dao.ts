import { BaseDAO, IEntity } from "./base.dao";

export interface Event extends IEntity {
  title: string;
  description: string;
  date: Date;
  location: string;
  imageUrl?: string;
  status: "upcoming" | "ongoing" | "completed";
}

export class EventDAO extends BaseDAO<Event> {
  private static events: Event[] = [
    {
      id: "1",
      title: "Women's Vocational Training Program",
      description: "Comprehensive training in tailoring and embroidery",
      date: new Date("2026-04-15"),
      location: "MAMI Training Center, Village XYZ",
      status: "upcoming",
      imageUrl: "https://picsum.photos/seed/event1/800/600",
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Community Health Camp",
      description: "Free health checkup and awareness program",
      date: new Date("2026-04-20"),
      location: "Community Center",
      status: "upcoming",
      imageUrl: "https://picsum.photos/seed/event2/800/600",
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Food Security Initiative Launch",
      description: "Community kitchen and food distribution program",
      date: new Date("2026-05-01"),
      location: "Main Village Square",
      status: "upcoming",
      imageUrl: "https://picsum.photos/seed/event3/800/600",
      createdAt: new Date(),
    },
  ];

  constructor() {
    super("events");
  }

  async findAll(): Promise<Event[]> {
    return EventDAO.events.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async findUpcoming(): Promise<Event[]> {
    return EventDAO.events
      .filter((e) => e.status === "upcoming" && new Date(e.date) > new Date())
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }
}