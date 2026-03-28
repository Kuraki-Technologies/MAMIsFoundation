import React from "react";
import axios from "axios";
import { Heart, Loader2 } from "lucide-react";
import { CONFIG } from "../../config/config";

export const Donate = () => {
  const [amount, setAmount] = React.useState(1000);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({ name: "", email: "" });

  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return alert("Please fill all fields");

    setLoading(true);
    try {
      const { data } = await axios.post("/api/donations/initiate", { amount, ...formData });
      if (data.isDummy) {
        alert("✅ Demo Mode: This is a test donation");
      }
    } catch (err) {
      alert("Failed to process donation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-bold text-zinc-900 mb-4">Support MAMI</h1>
      <p className="text-lg text-zinc-600 mb-12">Your donation helps us serve communities</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* QR */}
        <div className="lg:col-span-4 bg-zinc-900 text-white p-10 rounded-3xl">
          <h2 className="text-2xl font-bold mb-6">Scan & Support</h2>
          <div className="bg-white p-6 rounded-2xl mb-8">
            <img src={CONFIG.DONATION.QR_CODE_IMAGE} alt="UPI QR" className="w-full" />
          </div>
          <p className="text-zinc-400">Supported: Google Pay, PhonePe, Paytm</p>
        </div>

        {/* Form */}
        <div className="lg:col-span-8 bg-white p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleDonate} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-4">Select Amount</label>
              <div className="grid grid-cols-4 gap-4">
                {CONFIG.DONATION.PRESET_AMOUNTS.map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => setAmount(val)}
                    className={`py-4 rounded-2xl font-bold ${
                      amount === val ? "bg-emerald-600 text-white" : "bg-zinc-100"
                    }`}
                  >
                    ₹{val}
                  </button>
                ))}
              </div>
            </div>

            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full px-6 py-4 bg-zinc-50 border-2 rounded-2xl text-2xl font-bold"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-6 py-4 bg-zinc-50 border-2 rounded-2xl"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-6 py-4 bg-zinc-50 border-2 rounded-2xl"
              />
            </div>

            <button
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Heart />}
              Donate ₹{amount}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};