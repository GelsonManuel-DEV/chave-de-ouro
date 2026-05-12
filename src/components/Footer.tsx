import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  MessageCircle,
  ArrowUp,
  Mail,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.8 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative bg-[#050505] pt-24 pb-10 px-6 overflow-hidden border-t border-white/5">
      {/* Efeito de Luz Dourada Sutil no Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute -top-37.5 left-1/2 -translate-x-1/2 w-150 h-75 bg-yellow-600/10 blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={footerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Linha Divisória com Gradiente Metálico */}
        <div className="w-full h-px bg-linear-to-r from-transparent via-[#BF953F] to-transparent mb-20 opacity-40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Branding */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-serif font-bold tracking-tighter">
              <span className="bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent">
                CHAVE D'OURO
              </span>
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed uppercase tracking-[0.2em] font-light">
              A excelência da pastelaria artesanal e gastronomia de luxo em
              Angola.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
              Navegação
            </h4>
            <ul className="space-y-3">
              {["Início", "Menu", "Sobre", "Reservas"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-yellow-500 transition-colors text-xs uppercase tracking-widest"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto Rápido */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
              Contacto
            </h4>
            <div className="space-y-3 text-gray-500 text-xs tracking-widest">
              <p className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={14} className="text-yellow-600" />{" "}
                geral@chavedeouro.ao
              </p>
              <p className="flex items-center gap-2 hover:text-white transition-colors">
                <MessageCircle size={14} className="text-yellow-600" /> +244 933
                166 766
              </p>
            </div>
          </motion.div>

          {/* Social & Topo */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-between"
          >
            <div>
              <h4 className="text-white text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
                Social
              </h4>
              <div className="flex gap-5">
                <Instagram
                  size={18}
                  className="text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors"
                />
                <Facebook
                  size={18}
                  className="text-gray-500 hover:text-yellow-500 cursor-pointer transition-colors"
                />
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-8 flex items-center gap-2 text-yellow-600 text-[10px] uppercase tracking-[0.4em] group hover:text-white transition-colors"
            >
              Topo{" "}
              <ArrowUp
                size={14}
                className="group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </motion.div>
        </div>

        {/* Créditos Finais */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            © 2026 Chave de Ouro — Todos os direitos reservados
          </p>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">
            Crafted by{" "}
            <span className="text-white font-bold tracking-widest">
              Gelson Manuel
            </span>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
