import { motion } from 'motion/react';
import { Mail, MessageSquare, Linkedin, ArrowUpRight } from 'lucide-react';
import PhotoCard from '../PhotoCard';
import BotanicalElement from '../BotanicalElement';

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 sm:py-32 px-6 sm:px-12 bg-[#F4ECE9]/50 border-t border-[#E8CDD2]/30 overflow-hidden">
      {/* Botanical Dried Branch */}
      <div className="absolute top-10 left-10 opacity-30 pointer-events-none">
        <BotanicalElement variant="branch" size={60} />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <span className="text-[11px] font-mono tracking-widest text-[#A46F78] uppercase">
            08 • Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#302B2D] font-normal">
            Vamos conversar?
          </h2>
          <p className="text-sm sm:text-base text-[#6A565B] max-w-lg mx-auto">
            Adoraria trocar ideias sobre design, experiências e novas oportunidades.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Professional Portrait Photo Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <PhotoCard
              label="[FOTO PROFISSIONAL]"
              aspect="aspect-[3/4]"
              angle={-1.5}
              tapeAngle={-3}
              tapePosition="top-center"
              className="w-64 sm:w-72"
            />
          </div>

          {/* Right: Contact Details & Channels */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#302B2D]">
                Canais diretos
              </h3>
            </div>

            <div className="space-y-3 max-w-md pt-2">
              {/* E-mail */}
              <a
                href="mailto:ligianaara17@gmail.com"
                className="flex items-center justify-between p-4 rounded-xs bg-[#FAF8F7] border border-[#E8CDD2]/60 hover:border-[#A46F78] transition-all duration-200 group shadow-2xs"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5E7] flex items-center justify-center text-[#A46F78]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6A565B] block font-mono">
                      E-mail
                    </span>
                    <span className="text-sm font-medium text-[#302B2D]">
                      ligianaara17@gmail.com
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6A565B] group-hover:text-[#A46F78] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xs bg-[#FAF8F7] border border-[#E8CDD2]/60 hover:border-[#A46F78] transition-all duration-200 group shadow-2xs"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5E7] flex items-center justify-center text-[#A46F78]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6A565B] block font-mono">
                      LinkedIn
                    </span>
                    <span className="text-sm font-medium text-[#302B2D]">
                      [LINK DO LINKEDIN]
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6A565B] group-hover:text-[#A46F78] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xs bg-[#FAF8F7] border border-[#E8CDD2]/60 hover:border-[#A46F78] transition-all duration-200 group shadow-2xs"
              >
                <div className="flex items-center space-x-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F3E5E7] flex items-center justify-center text-[#A46F78]">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6A565B] block font-mono">
                      WhatsApp
                    </span>
                    <span className="text-sm font-medium text-[#302B2D]">
                      [LINK DO WHATSAPP]
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6A565B] group-hover:text-[#A46F78] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
