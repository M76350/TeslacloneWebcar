import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "./ImageSlider";

export default function ModelY() {
  return (
    <main className="relative">
      <Navigation />

      <HeroSection
        title="Model Y"
        subtitle="Starting at $47,740"
        backgroundImage="https://images.pexels.com/photos/18509922/pexels-photo-18509922.jpeg"
        primaryCTA="Order Now"
        secondaryCTA="Schedule Test Drive"
      />

      <section className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="tesla-hero-title mb-8">Model Y Details</h2>
          <p className="text-lg text-muted-foreground mb-8">
            More information about Model Y coming soon...
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

      <div className="border w-full h-screen ">
        <video controls autoPlay loop className="w-full h-full object-cover " width={1000} height={1000} src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto:best/Cybertruck-Redefining-Mobile-v2.mp4"></video>
      {/* <ImageSlider /> */}
      </div>
      
    </main>
  );
}
