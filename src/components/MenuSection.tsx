import { useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Category =
  | "pastelaria"
  | "carne"
  | "vinho"
  | "gelataria"
  | "cafetaria"
  | "padaria";

interface MenuItem {
  id: number;
  title: string;
  price: string;
  description: string;
  category: Category;
  image: string;
}

const menuData: MenuItem[] = [
  // PASTELARIA
  {
    id: 1,
    title: "Mil-Folhas de Ouro",
    price: "2.500 Kz",
    description:
      "Massa folhada crocante com creme pasteleiro de baunilha real.",
    category: "pastelaria",
    image:
      "img/pastel-2.jpg",
  },
  {
    id: 7,
    title: "Waffle cromado",
    price: "3.500 Kz",
    description:
      "Massa folhada crocante com creme pasteleiro de baunilha real.",
    category: "pastelaria",
    image:
      "img/pastel-1.jpg",
  },
  // CARNES
  {
    id: 2,
    title: "T-Bone Premium",
    price: "22.000 Kz",
    description:
      "Corte selecionado maturado, grelhado na brasa com sal grosso e ervas.",
    category: "carne",
    image:
      "img/meat.jpg",
  },
  // VINHOS
  {
    id: 3,
    title: "Reserva do Monte",
    price: "35.000 Kz",
    description:
      "Vinho tinto encorpado com notas de madeira e frutos vermelhos.",
    category: "vinho",
    image:
      "img/wine.jpg",
  },
  // PADARIA
  {
    id: 4,
    title: "Pão de Chouriço Artesanal",
    price: "1.500 Kz",
    description: "Massa de fermentação lenta recheada com chouriço regional.",
    category: "padaria",
    image:
      "img/brad.jpg",
  },
  // GELATARIA
  {
    id: 5,
    title: "Taça Chave de Ouro",
    price: "4.200 Kz",
    description:
      "Mix de gelados artesanais com calda de chocolate quente e amêndoas.",
    category: "gelataria",
    image:
      "img/ice-cream.jpg",
  },
  // CAFETARIA
  {
    id: 6,
    title: "Expresso Premium",
    price: "800 Kz",
    description:
      "Grãos selecionados com torra média para um sabor equilibrado.",
    category: "cafetaria",
    image:
      "img/coffe.jpg",
  },
];

const MenuSection = () => {
  const [filter, setFilter] = useState<Category>("pastelaria");
  const [_isPending, startTransition] = useTransition();

  const categories: { id: Category; label: string }[] = [
    { id: "pastelaria", label: "Pastelaria" },
    { id: "padaria", label: "Padaria" },
    { id: "cafetaria", label: "Cafetaria" },
    { id: "gelataria", label: "Gelataria" },
    { id: "carne", label: "Carnes" },
    { id: "vinho", label: "Vinhos" },
  ];

  const handleFilterChange = (id: Category) => {
    startTransition(() => {
      setFilter(id);
    });
  };

  return (
    <section className="py-24 bg-[#050505] min-h-200 px-6 relative">
      
      <h1 className="justify-self-center bg-linear-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text flex mb-7.5  text-transparent w-fit text-3xl border-b-2 border-b-amber-400">Menu</h1>
      <div className="max-w-7xl mx-auto">
        {/* Filtros */}
        <div className="flex overflow-x-auto md:justify-center gap-6 mb-20 pb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFilterChange(cat.id)}
              className={`whitespace-nowrap relative pb-2 text-[10px] uppercase tracking-[0.3em] transition-all duration-300 ${
                filter === cat.id
                  ? "text-yellow-500 font-bold"
                  : "text-gray-500"
              }`}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 w-full h-px bg-yellow-500"
                />
              )}
            </button>
          ))}
        </div>

        {/* Grid Animada */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <AnimatePresence mode="popLayout">
            {menuData
              .filter((item) => item.category === filter)
              .map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group p-4 rounded-lg bg-amber-400/5 md:border transition-colors md:border-transparent md:hover:border-amber-400/20"
                >
                  <div className="relative h-64 overflow-hidden mb-6 bg-white/5 border border-white/5">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-serif text-white">
                      {item.title}
                    </h3>
                    <span className="text-yellow-600 text-sm font-medium">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs font-light leading-relaxed uppercase tracking-wider italic">
                    {item.description}
                  </p>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
