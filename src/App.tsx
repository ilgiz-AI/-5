import React from 'react';
import { MapPin, Clock, Phone, Scissors } from 'lucide-react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function App() {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey || ''}>
      <div className="min-h-screen bg-[#1a1a1a] text-[#f4f4f4] font-sans">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold tracking-tighter text-[#c5a059]">BARBERSHOP BISHKEK</h1>
          <div className="space-x-6 text-sm uppercase tracking-widest">
            <a href="#services" className="hover:text-[#c5a059]">Services</a>
            <a href="#about" className="hover:text-[#c5a059]">About</a>
            <a href="#location" className="hover:text-[#c5a059]">Contact</a>
          </div>
        </nav>

        {/* Hero */}
        <header className="flex flex-col items-center justify-center py-24 px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-light mb-6">Mastering the Art of Grooming</h2>
          <p className="text-lg text-gray-400 max-w-2xl mb-10">Premium haircuts, classic shaves, and grooming services in the heart of Bishkek.</p>
          <button className="bg-[#c5a059] text-black px-8 py-3 text-sm font-bold uppercase tracking-widest hover:bg-opacity-90">Book Appointment</button>
        </header>

        {/* Services */}
        <section id="services" className="max-w-7xl mx-auto py-20 px-6">
          <h3 className="text-3xl font-light mb-12 text-center text-[#c5a059]">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { title: 'Classic Haircut', price: '1,500 KGS', desc: 'Precision cut and style.' },
              { title: 'Hot Towel Shave', price: '1,200 KGS', desc: 'The ultimate classic shave.' },
              { title: 'Beard Trim', price: '800 KGS', desc: 'Expert beard shaping.' }
            ].map((service, i) => (
              <div key={i} className="border border-gray-800 p-8 text-center hover:border-[#c5a059] transition-colors">
                <Scissors className="mx-auto mb-4 text-[#c5a059]" size={32} />
                <h4 className="text-xl mb-2">{service.title}</h4>
                <p className="text-gray-500 text-sm mb-4">{service.desc}</p>
                <p className="font-bold text-[#c5a059]">{service.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location */}
        <section id="location" className="bg-[#212121] py-20 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-3xl font-light mb-6 text-[#c5a059]">Visit Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <MapPin className="text-[#c5a059]" />
                  <p>123 Manas Avenue, Bishkek</p>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="text-[#c5a059]" />
                  <p>Mon-Sun: 10:00 AM - 9:00 PM</p>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-[#c5a059]" />
                  <p>+996 555 123 456</p>
                </div>
              </div>
            </div>
            {/* Map Column */}
            <div className="h-96 w-full">
              <Map
                defaultCenter={{lat: 42.8746, lng: 74.5698}}
                defaultZoom={15}
                mapId="DEMO_MAP_ID"
                internalUsageAttributionIds={["gmp_mcp_codeassist_v1_aistudio"]}
              />
            </div>
          </div>
        </section>
        
        <footer className="py-10 text-center text-sm text-gray-600">
          &copy; 2026 Barbershop Bishkek. All rights reserved.
        </footer>
      </div>
    </APIProvider>
  );
}
