import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ISMLogo from "@/assets/img/incubadoraLogos/ISM_Logo1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Programas", href: "#programas" },
    { label: "Startups", href: "#startups" },
    { label: "FAQ", href: "#FAQ" },
    { label: "Notícias", href: "#noticias" },
    {
      /* label: "Histórico", href: "#historico"*/
    },
    {
      /* label: "Equipe", href: "#equipe" */
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <a href="https://www.sertaomaker.com.br/">
                <img
                  src={ISMLogo}
                  alt="Sertão Maker Logo"
                  className="h-10 w-auto"
                />
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button
              onClick={() =>
                window.open(
                  "https://chat.whatsapp.com/Db4BlZX087kEM3wPYhsRsj?mode=ems_share_c"
                )
              }
              variant="cta"
              size="sm"
            >
              Entrar na Comunidade
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2">
                <Button
                  onClick={() =>
                    window.open(
                      "https://chat.whatsapp.com/Db4BlZX087kEM3wPYhsRsj?mode=ems_share_c"
                    )
                  }
                  variant="cta"
                  size="sm"
                >
                  Entrar na Comunidade
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
