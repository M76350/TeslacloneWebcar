import { Button } from "./ui/button";

interface ProductShowcaseProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  features?: string[];
  primaryCTA?: string;
  secondaryCTA?: string;
  onPrimaryCTA?: () => void;
  onSecondaryCTA?: () => void;
  imagePosition?: "left" | "right" | "center";
  className?: string;
}

export default function ProductShowcase({
  title,
  subtitle,
  backgroundImage,
  features = [],
  primaryCTA = "Order Now",
  secondaryCTA = "Learn More",
  onPrimaryCTA,
  onSecondaryCTA,
  imagePosition = "center",
  className = "",
}: ProductShowcaseProps) {
  return (
    <section
      className={`tesla-section relative ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: imagePosition,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <h2 className="tesla-hero-title text-white mb-4">{title}</h2>
        <p className="tesla-hero-subtitle text-white/90 mb-8">{subtitle}</p>

        {/* Features */}
        {features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 w-full">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-white text-lg font-medium">{feature}</div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
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
    </section>
  );
}
