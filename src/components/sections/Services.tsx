import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Camera, Film, Heart, Users, Sparkles, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Wedding Photography",
    description:
      "Full-day coverage of your special day, from preparation to the last dance. Every emotion, every detail, beautifully preserved.",
    features: ["8-12 hours coverage", "500+ edited photos", "Online gallery", "Print rights"],
  },
  {
    icon: Film,
    title: "Wedding Cinematography",
    description:
      "Cinematic films that tell your love story with breathtaking visuals and emotional storytelling.",
    features: ["4K filming", "Highlight reel", "Full ceremony edit", "Drone footage"],
  },
  {
    icon: Camera,
    title: "Portrait Sessions",
    description:
      "From engagement shoots to family portraits, we create stunning images that celebrate your connections.",
    features: ["2-hour sessions", "Multiple locations", "50+ edited images", "Outfit changes"],
  },
  {
    icon: Users,
    title: "Event Coverage",
    description:
      "Corporate events, galas, and celebrations captured with the same attention to detail and artistry.",
    features: ["Flexible packages", "Quick turnaround", "Team of photographers", "Live editing"],
  },
  {
    icon: Sparkles,
    title: "Boudoir Photography",
    description:
      "Intimate and empowering sessions in our private studio, celebrating confidence and beauty.",
    features: ["Private studio", "Hair & makeup", "Luxury albums", "Discreet service"],
  },
  {
    icon: Image,
    title: "Fine Art Prints",
    description:
      "Transform your favorite images into museum-quality prints and handcrafted albums.",
    features: ["Gallery prints", "Custom framing", "Italian leather albums", "Wall art design"],
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm">
            Our Services
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mt-3 sm:mt-4 mb-4 sm:mb-6">
            Tailored to Your
            <br />
            <span className="text-gradient-gold italic">Vision</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            Every love story is unique. Our comprehensive services are designed
            to capture yours in the most authentic and beautiful way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-card border border-border rounded-lg p-5 sm:p-6 md:p-8 hover:border-primary/30 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-10 sm:mt-12"
        >
          <Button variant="hero" size="lg">
            View All Packages
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
