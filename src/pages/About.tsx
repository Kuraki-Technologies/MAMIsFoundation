import { BookOpen, Utensils, Users, Heart } from "lucide-react";

export const About = () => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-zinc-900 mb-8">About MAMI</h1>
      <p className="text-xl text-zinc-600 mb-12">
        Madan Mina Sarvodaya Foundation (MAMI) is dedicated to the principles of Sarvodaya
        – the uplift and welfare of all. Our mission is to foster sustainable development
        in villages and communities.
      </p>

      <h2 className="text-3xl font-bold text-zinc-900 mb-8">Our Core Pillars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: BookOpen,
            title: "Women's Education",
            desc: "Vocational training and formal education for economic independence",
          },
          {
            icon: Utensils,
            title: "Food Security",
            desc: "Community kitchens and nutrition programs",
          },
          {
            icon: Users,
            title: "Social Welfare",
            desc: "Comprehensive community development and disaster relief",
          },
          {
            icon: Heart,
            title: "Healthcare",
            desc: "Access to basic healthcare and awareness programs",
          },
        ].map((pillar, i) => (
          <div key={i} className="bg-zinc-50 p-8 rounded-2xl">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
              <pillar.icon className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-3">{pillar.title}</h3>
            <p className="text-zinc-600">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};