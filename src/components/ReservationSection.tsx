import { useState } from "react";
import { motion } from "framer-motion";

const ReservationSection = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    // Adicionado color-scheme: dark para garantir que o datepicker do navegador fique escuro
    <section className="py-24 bg-[#050505] px-6 border-t border-white/5" style={{ colorScheme: 'dark' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Lado Esquerdo: Imagem com Verificação */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:w-1/2 relative w-full group"
        >
          <div className="relative h-120 md:h-160 w-full overflow-hidden rounded-sm bg-white/5 border border-white/5">
            {/* Overlay de carregamento elegante */}
            {!imgLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-[#0a0a0a]">
                <div className="w-8 h-8 border border-[#C5A059]/30 border-t-[#C5A059] rounded-full animate-spin" />
              </div>
            )}

            <img
              src="img/imagem-interior-melhorada-1.jpg"
              alt="Ambiente Chave d'Ouro"
              onLoad={() => setImgLoaded(true)}
              className={`w-full h-full object-cover transition-transform duration-2000 ease-out group-hover:scale-105 ${
                imgLoaded ? "opacity-70" : "opacity-0"
              }`}
            />
            {/* Gradiente mais suave para fundir a imagem com o fundo */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-transparent to-transparent opacity-80" />
          </div>

          {/* Badge flutuante redesenhada (Glassmorphism sutil em vez de amarelo sólido) */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute -bottom-8 -right-4 md:-right-8 bg-[#0a0a0a]/90 backdrop-blur-md border border-white/10 p-8 hidden md:block shadow-2xl"
          >
            <p className="text-[#E5E4E2] font-serif text-2xl italic leading-tight tracking-wide">
              A exclusividade <br /> 
              <span className="text-[#C5A059]">que você merece.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Formulário Minimalista */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 w-full"
        >
          <header className="mb-12">
            <span className="text-[#C5A059] uppercase text-[10px] tracking-[0.4em] mb-4 block font-semibold">
              Contactos & Reservas
            </span>
            {/* Título sem o gradiente forte, usando contraste de tipografia */}
            <h2 className="text-4xl md:text-5xl font-serif text-[#F8F8F8] leading-[1.1]">
              Planeie o seu <br />
              <span className="italic text-white/60 font-light">próximo momento</span>
            </h2>
          </header>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            <div className="relative group">
              <input
                type="text"
                placeholder="Nome"
                className="w-full bg-transparent border-b border-white/20 py-3 text-[#E5E4E2] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30 uppercase text-[11px] tracking-widest"
              />
            </div>
            
            <div className="relative group">
              <input
                type="tel"
                placeholder="Telemóvel"
                className="w-full bg-transparent border-b border-white/20 py-3 text-[#E5E4E2] focus:outline-none focus:border-[#C5A059] transition-colors placeholder:text-white/30 uppercase text-[11px] tracking-widest"
              />
            </div>
            
            <div className="relative group">
              <input
                type="date"
                className="w-full bg-transparent border-b border-white/20 py-3 text-[#E5E4E2] focus:outline-none focus:border-[#C5A059] transition-colors uppercase text-[11px] tracking-widest"
              />
            </div>
            
            <div className="relative group">
              <select className="w-full bg-transparent border-b border-white/20 py-3 text-[#E5E4E2] focus:outline-none focus:border-[#C5A059] transition-colors uppercase text-[11px] tracking-widest appearance-none cursor-pointer">
                <option value="" disabled selected className="bg-[#0a0a0a] text-white/50">Mesa para...</option>
                <option value="2" className="bg-[#0a0a0a] text-white">2 Pessoas</option>
                <option value="4" className="bg-[#0a0a0a] text-white">4 Pessoas</option>
                <option value="private" className="bg-[#0a0a0a] text-white">Evento Privado</option>
              </select>
            </div>

            <div className="md:col-span-2 pt-4">
              {/* Botão refinado: Evitar layout shift (removido o letter-spacing no hover) */}
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-transparent border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#050505] font-semibold uppercase text-[11px] tracking-[0.2em] transition-all duration-300"
              >
                Solicitar Reserva
              </motion.button>
            </div>
          </form>

          <div className="mt-14 flex flex-col gap-2 border-t border-white/5 pt-8">
            <p className="text-[#C5A059] text-[10px] uppercase tracking-widest font-semibold">
              Localização
            </p>
            <p className="text-white/70 font-light text-sm tracking-wide">
              EN140, Malanje, Angola
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;