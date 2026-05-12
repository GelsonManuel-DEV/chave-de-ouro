import { motion } from "framer-motion";
import { Mail, MessageCircle, MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  
  const contactDetails = {
    address: "EN140, Malanje, Angola",
    phone: "+244 933 166 766",
    whatsapp: "+244933166766",
    email: "geral@chavedeouro.ao",
  };

  return (
    <section className="py-24 bg-[#050505] px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* LADO ESQUERDO: MAPA ESTILIZADO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-112.5 lg:h-full min-h-100 w-full grayscale-[1] invert-[0.9] opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700 rounded-sm overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.721473268565!2d16.3422503!3d-9.5442124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a3989a68ababadd%3A0x5df8ee733bd8f601!2sPastelaria%20Chave%20D&#39;Ouro!5e0!3m2!1spt-PT!2sao!4v1713800000000!5m2!1spt-PT!2sao"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          {/* LADO DIREITO: CONTACTOS ELEGANTES */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-yellow-600 uppercase text-[10px] tracking-[0.5em] mb-4 block">
              Visite-nos
            </span>
            <h2 className="text-4xl bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent md:text-5xl font-serif mb-8">
              Onde a Tradição <br /> Ganha Vida
            </h2>

            <div className="space-y-8 mb-12">
              {/* Endereço */}
              <div className="flex items-center gap-6 group p-4 bg-amber-400/5 rounded-lg transition-all">
                <div className=" text-yellow-500 bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-yellow-600 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Endereço
                  </p>
                  <p className="text-white font-light">
                    {contactDetails.address}
                  </p>
                </div>
              </div>

              {/* Horário (Real) */}
              <div className="flex items-center gap-6 group p-4 rounded-lg transition-all border border-amber-400/20 hover:bg-amber-400/5">
                <div className="text-yellow-500 bg-white/5 p-4 rounded-full border border-white/10 group-hover:border-yellow-600 transition-colors">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">
                    Horário
                  </p>
                  <p className="text-white font-light">
                    Todos os dias: 06:30 — 22:00
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÕES DE CONTACTO DIRETO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Botão WhatsApp */}
              <motion.a
                href={`https://wa.me/${contactDetails.whatsapp}`}
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 py-4 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-[#25D366] hover:text-white transition-all duration-500"
              >
                <MessageCircle size={18} />
                WhatsApp
              </motion.a>

              {/* Botão Email */}
              <motion.a
                href={`mailto:${contactDetails.email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 py-4 bg-white/5 border border-white/10 text-white font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500"
              >
                <Mail size={18} />
                E-mail
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
