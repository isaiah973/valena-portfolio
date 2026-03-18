import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioSection() {
  const filters = ["All", "Weddings", "Canapés", "Mocktails", "Events"];

  const portfolioItems = [
    {
      id: 1,
      title: "Luxury Wedding Table",
      category: "Weddings",
      image: "/images/weddingtable.jpeg",
    },
    {
      id: 2,
      title: "Delicious Savoury Munchies",
      category: "Canapés",
      image: "/images/slide1.jpeg",
    },
    {
      id: 3,
      title: "Mocktail Presentation",
      category: "Mocktails",
      image: "/images/slide6.jpeg",
    },
    {
      id: 4,
      title: "Wedding Setup Details",
      category: "Weddings",
      image: "/images/weddingtable1.jpeg",
    },
    {
      id: 5,
      title: "Chef Behind The Scenes",
      category: "Events",
      image: "/images/portfolio-5.jpg",
    },
    {
      id: 6,
      title: "Plated Fine Dining",
      category: "Canapés",
      image: "/images/portfolio-6.jpg",
    },
    {
      id: 7,
      title: "Signature Mocktail Bar",
      category: "Mocktails",
      image: "/images/portfolio-7.jpg",
    },
    {
      id: 8,
      title: "Event Catering Setup",
      category: "Events",
      image: "/images/portfolio-8.jpg",
    },
    {
      id: 9,
      title: "Reception Table Styling",
      category: "Weddings",
      image: "/images/portfolio-9.jpg",
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="w-full bg-bg py-20 md:py-24 font-[Poppins]">
      <div className="px-5 sm:px-10 md:px-16 lg:px-14 xl:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-2xl mb-10 md:mb-14"
        >
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-gold mb-4">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-darkHeader mb-4">
            Crafted for elegant weddings, refined dining, and unforgettable
            celebrations
          </h2>

          <p className="text-sm sm:text-base text-lightText leading-7 max-w-xl">
            Explore a curated collection of wedding catering, canapés,
            mocktails, and event presentation designed with beauty, taste, and
            detail in mind.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-10"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-300 ${
                  isActive
                    ? "bg-green text-gold border-green shadow-sm"
                    : "bg-white text-darkHeader border-[#e8ddd1] hover:bg-[#faf6f1]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Organized Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.96 }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group rounded-[26px] overflow-hidden bg-[#F8F6F2] shadow-[0_12px_35px_rgba(0,0,0,0.06)]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] sm:h-[300px] object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-4 left-4">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-darkHeader backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-green mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-lightText leading-6">
                    Beautiful presentation styled with intention, elegance, and
                    a memorable guest experience in mind.
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
