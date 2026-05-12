import  { useState } from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.6 },
  },
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] },
  },
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);


  const realImageUrl =
    "img/balcao-com-trabalhadora-1.jpg";


  const fallbackImage =
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1920&auto=format&fit=crop";

  return (
    <section className="relative h-fit w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{
          scale: imageLoaded ? 1 : 1.15,
          opacity: imageLoaded ? 1 : 0,
        }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={hasError ? fallbackImage : realImageUrl}
          alt="Chave d'Ouro"
          className="w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setHasError(true);
            setImageLoaded(true);
          }}
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-black/40 to-[#050505]/70" />
      </motion.div>

      {/* CONTEÚDO */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={imageLoaded ? "visible" : "hidden"}
        className="relative z-10 text-center px-6 mt-42.5"
      >
        <motion.span
          variants={itemVariants}
          className="block text-yellow-600 uppercase text-[10px] tracking-[0.5em] mb-4 font-medium"
        >
          Malanje • Angola
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="text-6xl lg:text-7xl font-serif font-bold text-white mb-2  leading-tight"
        >
          A Arte da <br />
          <span className="bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent  drop-shadow-[0_0_25px_rgba(212,175,55,0.6)]">
            Chave d'Ouro
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-400 max-w-2xl mx-auto text-base md:text-xl font-light mb-2 sm:mb-6"
        >
          Onde a tradição artesanal encontra a sofisticação moderna.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-2 sm:gap-4"
        >
          <button className="rounded-lg md:bg-transparent md:border md:border-amber-400/20 md:text-amber-400 md:hover:bg-amber-400/20 cursor-pointer px-12 py-4 bg-yellow-600 text-black font-bold uppercase text-[11px] tracking-widest transition-all hover:bg-yellow-500">
            Explorar Menu
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
