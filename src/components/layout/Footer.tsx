import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-10 md:py-12 bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
            <span className="font-display text-lg sm:text-xl font-semibold text-gradient-gold">
              Lumière
            </span>
            <span className="font-display text-xs sm:text-sm text-muted-foreground hidden xs:inline">
              Studios
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="#home"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground">
            <span>© {currentYear}</span>
            <span className="hidden xs:inline">Made with</span>
            <Heart className="w-3 h-3 fill-primary text-primary" />
            <span className="hidden xs:inline">Lumière Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
