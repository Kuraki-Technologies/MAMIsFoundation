import { useEffect, useState } from "react";
import axios from "axios";
import { Calendar, MapPin } from "lucide-react";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  imageUrl?: string;
}

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    axios.get("/api/events/upcoming").then((res) => setEvents(res.data || []));
  }, []);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-zinc-900 mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event) => (
          <div key={event.id} className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">{event.title}</h3>
              <p className="text-zinc-600 mb-4 line-clamp-2">{event.description}</p>
              <div className="space-y-2 text-sm text-zinc-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-emerald-600" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  {event.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};