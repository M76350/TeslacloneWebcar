import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

export default function ModelS() {
  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <HeroSection
        title="Model S"
        subtitle="Plaid and Long Range"
        backgroundImage="https://images.pexels.com/photos/28772164/pexels-photo-28772164.jpeg"
        primaryCTA="Order Now"
        secondaryCTA="Schedule Test Drive"
      />

      {/* Specs Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="tesla-hero-title mb-12">Performance</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">1.99s</div>
              <div className="text-xl text-muted-foreground">0-60 mph*</div>
              <div className="text-sm text-muted-foreground mt-1">
                *with rollout subtracted
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">200mph</div>
              <div className="text-xl text-muted-foreground">Top Speed†</div>
              <div className="text-sm text-muted-foreground mt-1">
                †when equipped with paid options
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">405mi</div>
              <div className="text-xl text-muted-foreground">
                Range (EPA est.)
              </div>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-8">Plaid</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Model S Plaid has the quickest acceleration of any vehicle in
            production. Updated battery architecture for all Model S delivers
            the longest range and fastest charging.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="tesla-button-primary min-w-[200px]">
              Order Now
            </button>
            <button className="tesla-button-secondary min-w-[200px]">
              Schedule Test Drive
            </button>
          </div>
        </div>
      </section>

      {/* Interior Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="tesla-hero-title mb-8">Interior of the Future</h2>
          <p className="text-lg text-white/80 mb-12">
            A 17" cinematic display with left-right tilt offers 2200 x 1300
            resolution, true colors and exceptional responsiveness for gaming,
            movies and more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Game from Anywhere</h3>
              <p className="text-white/70">
                Up to 10 teraflops of processing power enables in-car gaming
                on-par with today's newest consoles.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
              <p className="text-white/70">
                Multi-device Bluetooth, wireless and USB-C charging for every
                passenger, with enough power to fast-charge your tablets and
                laptop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
