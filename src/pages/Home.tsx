import { ArrowRight, Users, Heart, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Empowering Communities,<br />
            <span className="text-emerald-200">Building Futures</span>
          </h1>
          <p className="text-xl text-emerald-100 max-w-2xl mb-10">
            Madan Mina Sarvodaya Foundation is dedicated to holistic village development
            through education, healthcare, and sustainable livelihood programs.
          </p>
          <div className="flex gap-4">
            <Link
              to="/donate"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-50"
            >
              Donate Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Users, label: "Lives Impacted", value: "50,000+" },
              { icon: Heart, label: "Active Volunteers", value: "1,200+" },
              { icon: Globe, label: "Projects", value: "150+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex p-4 bg-emerald-100 rounded-2xl mb-6">
                  <stat.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-4xl font-bold text-zinc-900 mb-2">{stat.value}</h3>
                <p className="text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};