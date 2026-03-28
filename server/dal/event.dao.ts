export interface Event {
    id: number;
    title: string;
    date: string;
    description: string;
}

export class EventDAO {
    private events: Event[] = [
        {
            id: 1,
            title: "Women's Vocational Training",
            date: "2026-04-01",
            description: "A training program for women to enhance their skills in various vocational areas."
        },
        {
            id: 2,
            title: "Community Health Camp",
            date: "2026-04-15",
            description: "Free health check-ups and awareness programs for the community."
        },
        {
            id: 3,
            title: "Food Security Initiative",
            date: "2026-04-30",
            description: "A program aimed at ensuring food accessibility and security in the community."
        }
    ];

    public getUpcomingEvents(): Event[] {
        const currentDate = new Date('2026-03-28');
        return this.events.filter(event => new Date(event.date) > currentDate);
    }
}