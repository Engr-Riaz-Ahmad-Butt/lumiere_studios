import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["All", "Weddings", "Portraits", "Events", "Couples"];

const portfolioItems = [
  {
    id: 1,
    image: portfolio1,
    title: "The Bridal Glow",
    category: "Portraits",
    location: "Tuscany, Italy",
  },
  {
    id: 2,
    image: portfolio2,
    title: "Garden of Love",
    category: "Weddings",
    location: "Napa Valley, CA",
  },
  {
    id: 3,
    image: portfolio3,
    title: "First Dance Magic",
    category: "Weddings",
    location: "Paris, France",
  },
  {
    id: 4,
    image: portfolio4,
    title: "Eternal Promise",
    category: "Weddings",
    location: "Santorini, Greece",
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-16 sm:py-24 md:py-32 bg-charcoal-light">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
            Our Work
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Stories We've
            <br />
            <span className="text-gradient-gold italic">Told</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            A curated collection of our most cherished moments. Each image
            represents a unique love story we've had the honor to capture.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="text-xs text-primary uppercase tracking-widest mb-1 sm:mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-2xl font-semibold mb-0.5 sm:mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {item.location}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-primary/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100">
                  <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10 sm:mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-gold-light transition-colors group"
          >
            View Full Portfolio
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
