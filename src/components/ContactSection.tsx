import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react'; 

const ContactSection = () => {
  const contactInfo = [
    { 
      icon: <Phone size={20} />, 
      label: "Telefone", 
      value: "+244  933 166 766",
      href: "tel:+244933166766" 
    },
    { 
      icon: <Mail size={20} />, 
      label: "E-mail", 
      value: "geral@chavedeouro.ao",
      href: "mailto:geral@chavedeouro.ao" 
    },
    { 
      icon: <MapPin size={20} />, 
      label: "Localização", 
      value: "EN140,Malanje, Angola",
      href: "https://maps.google.com" 
    },
  ];

  return (
    <section className="py-24 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Lado Esquerdo: Info de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-600 uppercase text-[10px] tracking-[0.5em] mb-4 block font-medium">
              Estamos à sua espera
            </span>
            <h2 className="text-4xl bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent md:text-7xl font-serif mb-12 italic pb-4 border-b-4 w-fit border-b-amber-400/20">
              Contactos
            </h2>

            <div className="space-y-10">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 group w-fit"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 rounded-full border border-white/10 text-yellow-500 group-hover:border-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-500">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">{info.label}</p>
                    <p className="text-xl text-white font-light group-hover:text-yellow-500 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Redes Sociais */}
            <div className="mt-16 flex gap-6">
              <motion.a whileHover={{ y: -5 }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">
                <Instagram size={24} />
              </motion.a>
              <motion.a whileHover={{ y: -5 }} className="text-gray-400 hover:text-yellow-500 transition-colors cursor-pointer">
                <Facebook size={24} />
              </motion.a>
            </div>
          </motion.div>

          {/* Lado Direito: Mapa/Horário Estilizado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-white/5 p-10 md:p-16 border border-white/10 rounded-sm overflow-hidden"
          >
            {/* Efeito de brilho no fundo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-600/5 blur-[120px] rounded-full -mr-32 -mt-32" />
            
            <h3 className="text-2xl font-serif text-white mb-8">Horário de Funcionamento</h3>
            
            <div className="space-y-6">
              {[
                { dia: "Segunda - Quinta", hora: "07:30 — 21:00" },
                { dia: "Sexta - Sábado", hora: "07:30 — 23:00" },
                { dia: "Domingo & Feriados", hora: "08:00 — 18:00" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between border-b border-white/5 pb-4">
                  <span className="text-gray-400 text-sm uppercase tracking-wider">{item.dia}</span>
                  <span className="text-yellow-500 font-medium text-sm">{item.hora}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border border-yellow-600/20 bg-yellow-600/5">
              <p className="text-white text-sm font-light leading-relaxed">
                <strong className="text-yellow-500 uppercase text-[10px] tracking-widest block mb-2">Nota:</strong>
                Para eventos privados ou encomendas especiais de pastelaria, por favor contacte-nos com 48h de antecedência.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;