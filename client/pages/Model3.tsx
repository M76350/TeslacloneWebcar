import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function Model3() {
  return (
    <main className="relative">
      <Navigation />

      <HeroSection
        title="Model 3"
        subtitle="Starting at $38,990"
        backgroundImage="https://images.pexels.com/photos/10029873/pexels-photo-10029873.jpeg"
        primaryCTA="Order Now"
        secondaryCTA="Schedule Test Drive"
      />

      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="tesla-hero-title mb-8">Model 3 Details</h2>
          <p className="text-lg text-muted-foreground mb-8">
            More information about Model 3 coming soon...
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="tesla-button-primary min-w-[200px]">
              Order Now
            </button>
            <button className="tesla-button-secondary min-w-[200px]">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
