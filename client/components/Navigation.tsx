import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Model S", href: "/model-s" },
    { name: "Model 3", href: "/model-3" },
    { name: "Model X", href: "/model-x" },
    { name: "Model Y", href: "/model-y" },
    { name: "Solar Roof", href: "/solar" },
    { name: "Solar Panels", href: "/solar" },
  ];

  const rightNavItems = [
    { name: "Shop", href: "/shop" },
    { name: "Account", href: "#account" },
    { name: "Menu", href: "#menu" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
        className,
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
            >
              TESLA
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} to={item.href} className="tesla-nav-item">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Items */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {rightNavItems.map((item) => (
              <a key={item.name} href={item.href} className="tesla-nav-item">
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="space-y-2 px-4 py-6 bg-white">
              {[...navItems, ...rightNavItems].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block tesla-nav-item py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
