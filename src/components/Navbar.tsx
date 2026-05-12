import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Menu", href: "#menu" },
  { name: "Sobre Nós", href: "#sobre" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navClass = scrolled
    ? "py-3 bg-black/80 backdrop-blur-2xl border-b border-yellow-500/10"
    : "py-5 bg-transparent";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 w-full z-50 px-8 md:px-12 transition-all duration-500 ${navClass}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col gap-0.5 group">
            <span className="bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent font-serif text-base font-semibold tracking-widest  uppercase leading-none">
              Chave d'Ouro
            </span>
            
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-yellow-500 transition-colors duration-300 pb-0.5 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-yellow-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            <a
              href="#reservas"
              className="rounded-lg text-xs font-semibold tracking-widest uppercase text-black bg-yellow-500 px-5 py-2.5 hover:bg-yellow-400 transition-all duration-200 hover:-translate-y-px active:translate-y-0"
            >
              Reservar Mesa
            </a>
          </div>

          {/* Mobile Trigger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex items-center justify-center w-10 h-10 text-yellow-500 hover:bg-yellow-500/10 transition-colors rounded-sm"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </motion.nav>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              ease: [0.22, 1, 0.36, 1],
              duration: 0.45,
            }}
            className="fixed top-0 right-0 h-screen w-4/5 max-w-xs z-50 bg-black/95 backdrop-blur-2xl border-l border-yellow-500/10 flex flex-col md:hidden"
          >
            {/* Painel header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-yellow-500/10">
              <span className="font-serif text-sm tracking-widest text-yellow-500/40 uppercase">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-yellow-500/40 hover:text-yellow-500 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col flex-1 px-8 py-6 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.07 }}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center justify-between py-4 border-b border-yellow-500/10 last:border-none"
                >
                  <span className="font-serif text-2xl text-gray-300 group-hover:text-yellow-500 transition-colors duration-200">
                    {link.name}
                  </span>
                  <span className="text-xs tracking-widest text-yellow-500/30 group-hover:text-yellow-500/60 transition-colors font-mono">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}

              <motion.a
                href="#reservas"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 + navLinks.length * 0.07 }}
                onClick={() => setIsOpen(false)}
                className="mt-6 text-center text-xs font-semibold tracking-widest uppercase text-black bg-yellow-500 px-6 py-4 hover:bg-yellow-400 transition-colors"
              >
                Reservar Mesa
              </motion.a>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;