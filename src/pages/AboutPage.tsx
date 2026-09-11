import React from 'react';
import { Crown, Sparkles, Heart, ShieldCheck } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-[#FAF8F5] min-h-screen animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.3em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Heritage of Kuveras</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#111111] leading-tight">
            Crafting Legacy, <br />
            <span className="italic font-normal text-[#C5A059]">Honoring Tradition</span>
          </h1>

          <p className="text-sm text-[#7A736E] leading-relaxed font-sans max-w-xl mx-auto">
            Where every jewel tells an immortal story of royal courts, divine prosperity, and master goldsmithing passed down across generations.
          </p>
        </div>

        {/* Section 1: Two Column Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 bg-[#FFFDF9] border border-[#E8E2D9] p-8 sm:p-12 shadow-luxury">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              Our Origins
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#111111]">
              A Divine Tribute to Lord Kubera & Kamini
            </h2>
            <div className="space-y-4 text-xs sm:text-sm text-[#7A736E] leading-relaxed font-sans">
              <p>
                Our name is a humble tribute to <strong>Lord Kubera</strong>, the celestial guardian of divine wealth, prosperity, and spiritual grace. At the core of our founding principles is <strong>Kamini</strong> — a name, a mother, and our perpetual guiding light.
              </p>
              <p>
                Born in Jaipur, the gem capital of India, Kuveras was established to bridge royal heritage with modern Indian women. We believe jewellery shouldn't just sit in a vault — it should shine at weddings, festive family reunions, date nights, and everyday achievements.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-4/5 w-full bg-[#FAF8F5] border border-[#E8E2D9] overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Kuveras Fine Jewellery Heritage"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-[#FFFDF9] border border-[#E8E2D9] p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 mx-auto flex items-center justify-center text-[#D4AF37]">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#111111]">Royal Masterpieces</h3>
            <p className="text-xs text-[#7A736E] leading-relaxed font-sans">
              Uncut Kundan polki, Meenakari enameling, and South Indian temple carvings created by certified master karigars.
            </p>
          </div>

          <div className="bg-[#FFFDF9] border border-[#E8E2D9] p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 mx-auto flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#111111]">Certified Authenticity</h3>
            <p className="text-xs text-[#7A736E] leading-relaxed font-sans">
              Heavy 22K/24K antique gold plating, hypoallergenic brass alloy bases, and AAA-grade Cubic Zirconia diamonds.
            </p>
          </div>

          <div className="bg-[#FFFDF9] border border-[#E8E2D9] p-8 shadow-sm text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#D4AF37]/50 mx-auto flex items-center justify-center text-[#D4AF37]">
              <Heart className="w-6 h-6 text-[#8B0000]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#111111]">Accessible Luxury</h3>
            <p className="text-xs text-[#7A736E] leading-relaxed font-sans">
              Direct-to-patron pricing with complete purchase or 3-day WhatsApp rental options for any bridal occasion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
