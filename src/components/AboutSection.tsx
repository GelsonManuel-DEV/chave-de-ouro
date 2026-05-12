import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "img/bar-better-10.jpg",
    alt: "Processo Artesanal",
    label: "Artesanato",
  },
  {   
    src: "img/area-de-bebidas-squooshed.jpg",
    alt: "Bar",
    label: "Sabores",
  },
  {
    src: "img/balcao-com-trabalhadora-1.jpg",
    alt: "Interior da Loja",
    label: "Espaço",
  },
  {
    src: "img/exterior-better-squoshed.jpg",
    alt: "Ingredientes Selecionados",
    label: "exterior do estabelecimento",
  },
];

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
};

const ImageSlider = () => {
  const [[index, dir], setSlide] = useState([0, 0]);

  const paginate = useCallback((newDir: number) => {
    setSlide(([prev]) => [
      (prev + newDir + slides.length) % slides.length,
      newDir,
    ]);
  }, []);


useEffect(() => {
    
    const id = setInterval(() => {
      paginate(1);
    }, 5000);

    return () => clearInterval(id);
  }, [index, paginate]);

  return (
    <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 group">
      {/* Slides */}
      <AnimatePresence initial={false} custom={dir} mode="popLayout">
        <motion.div
          key={index}
          custom={dir}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].src}
            alt={slides[index].alt}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Label da foto */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="w-4 h-px bg-yellow-500" />
            <span className="text-yellow-500/80 uppercase text-xs tracking-widest font-medium">
              {slides[index].label}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Setas — visíveis no hover em desktop, sempre visíveis no mobile */}
      <button
        onClick={() => paginate(-1)}
        aria-label="Imagem anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 border border-white/10 text-white/70 hover:text-yellow-500 hover:border-yellow-500/40 transition-all duration-200 rounded-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => paginate(1)}
        aria-label="Próxima imagem"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 flex items-center justify-center bg-black/50 border border-white/10 text-white/70 hover:text-yellow-500 hover:border-yellow-500/40 transition-all duration-200 rounded-sm opacity-100 md:opacity-0 md:group-hover:opacity-100"
      >
        <ChevronRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide([i, i > index ? 1 : -1])}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === index
                ? "w-5 h-1.5 bg-yellow-500"
                : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-600 uppercase text-xs tracking-widest mb-4 block font-medium">
              A Nossa Herança
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Onde o{" "}
              <span className="bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent">
                Ouro
              </span>{" "}
              é <br />
              <span className="italic text-gray-400">Ingrediente.</span>
            </h2>
            <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
              <p>
                Fundada com a visão de transformar a pastelaria tradicional numa
                experiência sensorial única, a{" "}
                <span className="text-white font-medium">Chave d'Ouro</span> não
                é apenas uma padaria; é um atelier de sabores.
              </p>
              <p>
                Cada receita foi refinada ao longo de décadas, utilizando
                técnicas clássicas europeias fundidas com a alma e os
                ingredientes selecionados das terras angolanas.
              </p>
            </div>

            <div className="flex gap-12 mt-12">
              <div className="p-4 rounded-lg bg-amber-400/5">
                <h4 className="text-3xl font-serif text-yellow-500">30+</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Anos de História
                </p>
              </div>
              <div className="p-4 rounded-lg bg-amber-400/5">
                <h4 className="text-3xl font-serif text-yellow-500">12</h4>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Mestres Pasteleiros
                </p>
              </div>
            </div>
          </motion.div>

          {/* Slider */}
          <motion.div
            className="relative"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="relative z-10 w-full h-105 md:h-130">
              <ImageSlider />
            </div>

            {/* Elemento decorativo */}
            <motion.div
              initial={{ rotate: 0, opacity: 0 }}
              whileInView={{ rotate: 45, opacity: 0.15 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="absolute -top-10 -right-10 w-64 h-64 border border-yellow-600 z-0 hidden md:block pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
