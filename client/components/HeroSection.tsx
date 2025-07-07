import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  showScrollIndicator?: boolean;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  primaryCTA = "Order Now",
  secondaryCTA = "Learn More",
  onPrimaryCTA,
  onSecondaryCTA,
  showScrollIndicator = true,
  className = "",
}: HeroSectionProps) {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`tesla-section relative ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="tesla-hero-title animate-fade-in text-white">{title}</h1>
        <p className="tesla-hero-subtitle animate-fade-in text-white/90">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <Button
            className="tesla-button-primary min-w-[200px]"
            onClick={onPrimaryCTA}
          >
            {primaryCTA}
          </Button>
          <Button
            variant="outline"
            className="tesla-button-secondary min-w-[200px] border-white text-white hover:bg-white hover:text-black"
            onClick={onSecondaryCTA}
          >
            {secondaryCTA}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <button
            onClick={handleScrollDown}
            className="text-white/80 hover:text-white transition-colors duration-200 animate-bounce"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      )}
    </section>
  );
}
