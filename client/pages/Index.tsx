import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";

export default function Index() {
  const handleOrderNow = (model: string) => {
    console.log(`Order ${model} clicked`);
    // In a real app, this would navigate to the order page
  };

  const handleLearnMore = (model: string) => {
    console.log(`Learn more about ${model} clicked`);
    // In a real app, this would navigate to the product details page
  };

  return (
    <main className="relative">
      <Navigation />

      {/* Main Hero Section */}
      <HeroSection
        title="Experience Tesla"
        subtitle="Schedule a Demo Drive Today"
        backgroundImage="https://images.pexels.com/photos/17395382/pexels-photo-17395382.jpeg"
        primaryCTA="Schedule Now"
        secondaryCTA="Demo Drive"
        onPrimaryCTA={() => handleOrderNow("Demo")}
        onSecondaryCTA={() => handleLearnMore("Demo")}
      />

      {/* Model Y Section */}
      <ProductShowcase
        title="Model Y"
        subtitle="Starting at $47,740*"
        backgroundImage="https://images.pexels.com/photos/18509922/pexels-photo-18509922.jpeg"
        features={["326 mi Range", "AWD", "5.8s 0-60 mph"]}
        onPrimaryCTA={() => handleOrderNow("Model Y")}
        onSecondaryCTA={() => handleLearnMore("Model Y")}
      />

      {/* Model 3 Section */}
      <ProductShowcase
        title="Model 3"
        subtitle="Starting at $38,990*"
        backgroundImage="https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg"
        features={["272 mi Range", "AWD", "4.2s 0-60 mph"]}
        onPrimaryCTA={() => handleOrderNow("Model 3")}
        onSecondaryCTA={() => handleLearnMore("Model 3")}
      />

      {/* Model X Section */}
      <ProductShowcase
        title="Model X"
        subtitle="Starting at $79,990*"
        backgroundImage="https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg"
        features={["348 mi Range", "AWD", "3.8s 0-60 mph"]}
        onPrimaryCTA={() => handleOrderNow("Model X")}
        onSecondaryCTA={() => handleLearnMore("Model X")}
      />

      {/* Model S Section */}
      <ProductShowcase
        title="Model S"
        subtitle="Starting at $74,990*"
        backgroundImage="https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg"
        features={["405 mi Range", "AWD", "3.1s 0-60 mph"]}
        onPrimaryCTA={() => handleOrderNow("Model S")}
        onSecondaryCTA={() => handleLearnMore("Model S")}
      />

      {/* Solar Roof Section */}
      <ProductShowcase
        title="Solar Roof"
        subtitle="Produce Clean Energy From Your Roof"
        backgroundImage="https://images.pexels.com/photos/28468163/pexels-photo-28468163.jpeg"
        features={["Durable", "Weather Resistant", "25-Year Warranty"]}
        primaryCTA="Order Now"
        secondaryCTA="Learn More"
        onPrimaryCTA={() => handleOrderNow("Solar Roof")}
        onSecondaryCTA={() => handleLearnMore("Solar Roof")}
      />

      {/* Accessories Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="tesla-hero-title mb-4">Accessories</h2>
          <p className="tesla-hero-subtitle text-muted-foreground mb-8">
            Premium Tesla accessories to enhance your experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="tesla-button-primary min-w-[200px]">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Vehicles</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model S
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Model Y
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cybertruck
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Energy</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Solar Panels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Solar Roof
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Powerwall
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Megapack
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Charging</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Charging
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Supercharger
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Destination Charging
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Find Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Tesla, Inc. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">
                Privacy & Legal
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Vehicle Recalls
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-white transition-colors">
                News
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
