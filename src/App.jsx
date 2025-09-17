import React from 'react'

function Header({ onBook }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#0f1416]">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Nitro Bros" className="h-12 w-auto" />
        <div className="hidden md:block">
          <h1 className="text-white text-xl font-bold">Nitro Bros</h1>
          <p className="text-gray-400 text-sm">Mobile Auto Detailing</p>
        </div>
      </div>
      <button
        onClick={onBook}
        className="bg-sky-500 px-4 py-2 rounded-full text-white font-semibold shadow hover:shadow-[0_0_18px_rgba(14,165,233,0.25)] transition"
      >
        Book Now
      </button>
    </header>
  )
}

function Hero({ onBook }) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-[#071015] to-[#0b0f11]">
      <img src="/logo.png" alt="Nitro Bros" className="h-28 md:h-40 mb-6" />
      <h2 className="text-3xl md:text-5xl font-extrabold text-white">Shine Like New</h2>
      <p className="text-gray-400 mt-3 max-w-xl">
        Professional mobile auto detailing — we come to you. Simple booking, trusted results.
      </p>
      <div className="mt-6">
        <button
          onClick={onBook}
          className="bg-sky-500 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-[0_0_20px_rgba(14,165,233,0.28)] transition"
        >
          Request Booking
        </button>
      </div>
    </section>
  )
}

function Services() {
  const services = [
    { title: "Basic Wash", desc: "Exterior hand wash & dry." },
    { title: "Interior Detail", desc: "Vacuum, wipe down, deep clean." },
    { title: "Full Detail", desc: "Inside & out, showroom ready." }
  ]

  return (
    <section className="px-6 py-16 bg-[#0f1416] text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-[#141a1d] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <h4 className="text-white text-lg font-semibold">{s.title}</h4>
            <p className="text-gray-400 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="px-6 py-16 bg-[#0b0f11] text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">About Us</h3>
      <p className="text-gray-400 max-w-2xl mx-auto">
        We’re two brothers passionate about making cars shine. Nitro Bros is built on quality, trust,
        and convenience — we bring the detail shop to your driveway.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="px-6 py-8 bg-[#0f1416] text-center text-gray-500 text-sm">
      <p>Contact us: nitrobros@example.com • (555) 123-4567</p>
      <p className="mt-2">© {new Date().getFullYear()} Nitro Bros Auto Detailing</p>
    </footer>
  )
}

export default function App() {
  const handleBook = () => {
    window.open("https://calendly.com/your-link", "_blank")
  }

  return (
    <div className="font-sans bg-black">
      <Header onBook={handleBook} />
      <Hero onBook={handleBook} />
      <Services />
      <About />
      <Footer />
    </div>
  )
}
