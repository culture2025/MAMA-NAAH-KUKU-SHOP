import React, { useState, useEffect } from "react";
import { Egg, Truck, Phone, MapPin, Clock, Star, Menu, X, Feather } from "lucide-react";

// ---- Design tokens ----
const C = {
  green: "#24331F",     // deep coop-green, primary dark surface
  greenDeep: "#1B2617",
  cream: "#FBF2DF",     // eggshell, primary light surface
  creamDim: "#F1E4C8",
  yolk: "#E8A430",      // accent — egg yolk gold
  yolkDeep: "#C7841C",
  rust: "#A34A28",      // secondary accent — clay/feather rust
  charcoal: "#241C12",  // text on cream
  sage: "#93A177",      // muted text on green
};

const fontImport = `
@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700;9..144,900&family=Work+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

@keyframes stampIn {
  0% { opacity: 0; transform: rotate(-18deg) scale(1.6); }
  55% { opacity: 1; transform: rotate(-8deg) scale(0.92); }
  75% { transform: rotate(-9deg) scale(1.04); }
  100% { opacity: 1; transform: rotate(-9deg) scale(1); }
}
@keyframes riseIn {
  0% { opacity: 0; transform: translateY(14px); }
  100% { opacity: 1; transform: translateY(0); }
}
@keyframes dashMove {
  to { stroke-dashoffset: -200; }
}
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }
}
`;

const products = [
  { name: "Whole Dressed Chicken", desc: "Cleaned, ready for the pot.", price: "TSh 35000", unit: "/ bird" },
  { name: "Chicken Parts", desc: "Breast, thighs, wings, gizzard — sold by cut.", price: "TSh 12000", unit: "/ kg" },
  { name: "Live Chicken", desc: "Pick it live, we prepare it while you wait.", price: "TSh 6000 - TSh 45000", unit: "/ bird" },
  { name: "Full Crate of Eggs", desc: "30 eggs, farm-graded.", price: "TSh 12000", unit: "/ crate" },
  { name: "Half Crate of Eggs", desc: "15 eggs, farm-graded.", price: "TSh 6500", unit: "/ half crate" },
  { name: "Egg Tray", desc: "Single tray for the home fridge.", price: "TSh 2500", unit: "/ tray" },
];

const zones = [
  { area: "Zone 1 — Nearby streets", time: "Same day, 2–4 hrs" },
  { area: "Zone 2 — Across town", time: "Same day, by evening" },
  { area: "Zone 3 — Outskirts", time: "Next-day delivery" },
];

const testimonials = [
  { quote: "Mzigo unafika kwa muda sahihi na huduma ni bora kabisa.", name: "Khadija, Dar es Salaam" },
  { quote: "Kuku na Mayai kwa ujumla zina ubora wa hali ya juu na huduma ni safi.", name: "Deus Mwasibila, Kitunda, Dar es Salaam" },
  { quote: "Huduma ni bora kabisa na unaweza kuagiza na kuweka order kwa njia ya whatsApp.", name: "Rahma, Banana,Dar es Salaam" },
];

function useReveal() {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShown(true), 50);
    return () => clearTimeout(t);
  }, []);
  return shown;
}

export default function MamaNaaKukuShop() {
  const [menuOpen, setMenuOpen] = useState(false);
  const shown = useReveal();

  const waLink = "https://wa.me/255767297987?text=Hello%20Mama%20Naa%20Kuku%20Shop%2C%20I%27d%20like%20to%20order";

  return (
    <div style={{ fontFamily: "'Work Sans', sans-serif", color: C.charcoal, backgroundColor: C.cream }}>
      <style>{fontImport}</style>

      {/* NAV */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{ backgroundColor: C.green }}
      >
        <div
          className="flex items-center gap-2 text-xl md:text-2xl"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, color: C.cream }}
        >
          <Feather size={22} color={C.yolk} strokeWidth={2.2} />
          Mama Naa Kuku Shop
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm" style={{ color: C.sage }}>
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#delivery" className="hover:text-white transition-colors">Delivery</a>
          <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-sm font-medium transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: C.yolk, color: C.greenDeep }}
          >
            Order on WhatsApp
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X color={C.cream} /> : <Menu color={C.cream} />}
        </button>
      </header>
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-6" style={{ backgroundColor: C.greenDeep, color: C.cream }}>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#delivery" onClick={() => setMenuOpen(false)}>Delivery</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href={waLink} target="_blank" rel="noreferrer" style={{ color: C.yolk }}>Order on WhatsApp</a>
        </div>
      )}

      {/* HERO */}
      <section
        className="relative overflow-hidden px-6 pt-16 pb-24 md:px-12 md:pt-24 md:pb-32"
        style={{ backgroundColor: C.green, color: C.cream }}
      >
        <div className="max-w-3xl">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-5"
            style={{ color: C.sage, fontFamily: "'IBM Plex Mono', monospace", opacity: shown ? 1 : 0, animation: shown ? "riseIn 0.6s ease-out" : "none" }}
          >
            Dar es Salaamt; Family-run since day one
          </p>
          <h1
            className="text-4xl md:text-6xl leading-[1.05] mb-6"
            style={{
              fontFamily: "'Fraunces', serif",
              fontWeight: 900,
              opacity: shown ? 1 : 0,
              animation: shown ? "riseIn 0.7s ease-out 0.1s both" : "none",
            }}
          >
            Fresh from the coop <br /> to your door.
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mb-9"
            style={{ color: C.sage, opacity: shown ? 1 : 0, animation: shown ? "riseIn 0.7s ease-out 0.2s both" : "none" }}
          >
            Chicken and eggs, dressed and delivered the same day. No middlemen,
            no cold storage guesswork — just what came off the farm this morning.
          </p>
          <div
            className="flex flex-wrap gap-4"
            style={{ opacity: shown ? 1 : 0, animation: shown ? "riseIn 0.7s ease-out 0.3s both" : "none" }}
          >
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-sm font-medium transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: C.yolk, color: C.greenDeep }}
            >
              Order on WhatsApp
            </a>
            <a
              href="#products"
              className="px-6 py-3 rounded-sm font-medium border transition-colors hover:bg-white/10"
              style={{ borderColor: C.sage, color: C.cream }}
            >
              See today's prices
            </a>
          </div>
        </div>

        {/* Signature: freshness stamp */}
        <div
          className="hidden md:flex absolute right-16 top-24 items-center justify-center w-40 h-40 rounded-full border-4"
          style={{
            borderColor: C.yolk,
            color: C.yolk,
            transform: "rotate(-9deg)",
            animation: shown ? "stampIn 0.9s ease-out 0.4s both" : "none",
          }}
        >
          <div className="text-center leading-tight" style={{ fontFamily: "'Fraunces', serif" }}>
            <div className="text-xs tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>FRESH</div>
            <div className="text-2xl font-bold my-0.5">TODAY</div>
            <div className="text-xs tracking-widest" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>GUARANTEED</div>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-6 py-10 md:px-12 flex flex-wrap gap-8 justify-between items-center border-b" style={{ borderColor: C.creamDim }}>
        {[
          { label: "Hatched fresh", detail: "Sourced daily, never frozen stock" },
          { label: "Dressed same-day", detail: "Cleaned to order, not pre-packed" },
          { label: "Hygienic packaging", detail: "Sealed for the ride to your door" },
        ].map((item, i) => (
          <div key={i} className="flex-1 min-w-[200px]">
            <p className="text-sm uppercase tracking-wide mb-1" style={{ color: C.rust, fontFamily: "'IBM Plex Mono', monospace" }}>
              {item.label}
            </p>
            <p className="text-sm" style={{ color: C.charcoal, opacity: 0.75 }}>{item.detail}</p>
          </div>
        ))}
      </section>

      {/* PRODUCTS */}
      <section id="products" className="px-6 py-20 md:px-12">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }} className="text-3xl md:text-4xl">
            Today's shelf
          </h2>
          <p className="text-sm max-w-sm" style={{ color: C.charcoal, opacity: 0.6 }}>
            Prices update with market rates. Message us on WhatsApp to confirm before ordering.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-sm border transition-transform hover:-translate-y-1"
              style={{ borderColor: C.creamDim, backgroundColor: "#FFFCF5" }}
            >
              <div className="flex items-center justify-between mb-4">
                <Egg size={22} color={C.rust} />
                <span
                  className="text-lg"
                  style={{ fontFamily: "'IBM Plex Mono', monospace", color: C.rust }}
                >
                  {p.price}
                  <span className="text-xs" style={{ color: C.charcoal, opacity: 0.5 }}> {p.unit}</span>
                </span>
              </div>
              <h3 className="text-lg mb-1" style={{ fontFamily: "'Fraunces', serif", fontWeight: 600 }}>{p.name}</h3>
              <p className="text-sm" style={{ opacity: 0. }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DELIVERY */}
      <section id="delivery" className="px-6 py-20 md:px-12" style={{ backgroundColor: C.green, color: C.cream }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }} className="text-3xl md:text-4xl mb-3">
          Delivery zones
        </h2>
        <p className="text-sm mb-12 max-w-lg" style={{ color: C.sage }}>
          Ordered by distance from the shop — the closer you are, the sooner it arrives.
        </p>

        <div className="relative max-w-xl">
          <svg className="absolute left-[11px] top-2 h-[calc(100%-1rem)]" width="2" viewBox="0 0 2 300" preserveAspectRatio="none">
            <line
              x1="1" y1="0" x2="1" y2="300"
              stroke={C.yolk} strokeWidth="2" strokeDasharray="6 8"
              style={{ animation: "dashMove 6s linear infinite" }}
            />
          </svg>
          <ul className="flex flex-col gap-8">
            {zones.map((z, i) => (
              <li key={i} className="flex items-start gap-5 pl-0">
                <span
                  className="flex items-center justify-center w-6 h-6 rounded-full shrink-0 relative z-10 text-xs"
                  style={{ backgroundColor: C.yolk, color: C.greenDeep, fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="font-medium">{z.area}</p>
                  <p className="text-sm flex items-center gap-2 mt-1" style={{ color: C.sage, fontFamily: "'IBM Plex Mono', monospace" }}>
                    <Clock size={14} /> {z.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs mt-10 flex items-center gap-2" style={{ color: C.sage }}>
          <Truck size={14} /> Not sure which zone you're in? Send your location on WhatsApp and we'll confirm.
        </p>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="px-6 py-20 md:px-12">
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }} className="text-3xl md:text-4xl mb-10">
          What people say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-sm" style={{ backgroundColor: C.creamDim }}>
              <div className="flex gap-1 mb-3" style={{ color: C.yolkDeep }}>
                {Array.from({ length: 5 }).map((_, s) => <Star key={s} size={14} fill={C.yolkDeep} strokeWidth={0} />)}
              </div>
              <p className="text-sm mb-4 leading-relaxed" style={{ opacity: 0.85 }}>&ldquo;{t.quote}&rdquo;</p>
              <p className="text-xs uppercase tracking-wide" style={{ color: C.rust, fontFamily: "'IBM Plex Mono', monospace" }}>{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="px-6 py-16 md:px-12" style={{ backgroundColor: C.greenDeep, color: C.cream }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10">
          <div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700 }} className="text-2xl md:text-3xl mb-3">
              Ready to order?
            </h2>
            <p className="text-sm max-w-md" style={{ color: C.sage }}>
              Message us your order and delivery address — we'll confirm the price and time on WhatsApp.
            </p>
          </div>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-sm font-medium inline-flex items-center gap-2 w-fit transition-transform hover:-translate-y-0.5"
            style={{ backgroundColor: C.yolk, color: C.greenDeep }}
          >
            <Phone size={16} /> Order on WhatsApp
          </a>
        </div>
        <div className="flex flex-wrap gap-8 text-sm pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.12)", color: C.sage }}>
          <span className="flex items-center gap-2"><MapPin size={14} /> [mbondole secondary]</span>
          <span className="flex items-center gap-2"><Clock size={14} /> Mon–Sat, Mon-Fri 6:00-19:50, Sat-Sun 8:00-18:50 – 7pm</span>
          <span className="flex items-center gap-2"><Phone size={14} /> [+255 767 297 987 / +255 651 055 929]</span>
        </div>
        <p className="text-xs mt-10" style={{ color: C.sage, opacity: 0.6 }}>
          &copy; {new Date().getFullYear()} Mama Naa Kuku Shop. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
