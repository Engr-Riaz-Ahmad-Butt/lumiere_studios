import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-semibold text-gradient-gold">
              Lumière
            </span>
            <span className="font-display text-sm text-muted-foreground">
              Studios
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            <a
              href="#home"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#portfolio"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="w-3 h-3 fill-primary text-primary" />
            <span>by Lumière Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
