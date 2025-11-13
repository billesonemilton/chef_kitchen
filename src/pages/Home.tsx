import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroDish from "@/assets/hero-dish.png";
import chefCooking from "@/assets/chef-cooking.png";
import chefFlames from "@/assets/chef-flames.png";
import kitchenTeam from "@/assets/kitchen-team.png";
import cateringEvent from "@/assets/catering-event.png";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const heroSlides = [
    {
      title: "ENJOY A GOURMET MEAL PREPARED IN YOUR",
      highlight: "HOME OR VENUE",
      subtitle: "Best In Town",
    },
    {
      title: "FULL-SERVICE FOR WEDDINGS, BIRTHDAYS",
      highlight: "AND MORE",
      subtitle: "Chef in Action",
    },
  ];

  const events = [
    {
      title: "Wedding Catering",
      description: "Make your special day unforgettable with our exquisite menu",
      image: cateringEvent,
    },
    {
      title: "Private Dinners",
      description: "Intimate dining experiences crafted just for you",
      image: chefFlames,
    },
    {
      title: "Family Gatherings",
      description: "Bring families together with delicious homemade meals",
      image: kitchenTeam,
    },
    {
      title: "Corporate Events",
      description: "Impress your clients with professional catering services",
      image: cateringEvent,
    },
  ];

  const testimonials = [
    {
      name: "Bernadette R. Martin",
      text: "Amazing service! Chef Herry made our wedding unforgettable. The food was absolutely incredible and all our guests were asking about the catering. Will definitely book again!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Carousel */}
      <section className="relative bg-chef-ash text-foreground min-h-[600px] flex items-center transition-all duration-500">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="animate-fade-in">
              <p className="text-chef-gold text-lg mb-4 italic">
                {heroSlides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-chef-brown-Gray">
                {heroSlides[currentSlide].title}{" "}
                <span className="text-chef-gold italic">
                  {heroSlides[currentSlide].highlight}
                </span>
              </h1>
              <Button
                className="bg-chef-brown hover:bg-chef-brown-dark  hover:text-white rounded-full px-8 py-6 text-lg"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Us Now
                </Link>
              </Button>
            </div>
            <div className="relative">
              <img
                key={currentSlide}
                src={currentSlide === 0 ? heroDish : chefFlames}
                alt="Gourmet Dish"
                className="rounded-full w-full max-w-md mx-auto shadow-2xl animate-fade-in"
              />
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === index
                    ? "bg-chef-gold w-8"
                    : "bg-chef-brown/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Chef Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={chefCooking}
                alt="Chef at Work"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-chef-gold font-semibold mb-2">Your Expert</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ABOUT THE CHEF
              </h2>
              <p className="text-muted-foreground mb-6">
                I am George Herry, a passionate private chef with over 15 years
                of experience. I bring restaurant-quality dining directly to
                your home or event venue, creating unforgettable culinary
                experiences.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-2">
                  <span className="text-chef-gold">★</span>
                  <p>
                    <strong>Event Catering:</strong> Chefs, butlers and
                    personalized menus for all occasions
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-chef-gold">★</span>
                  <p>
                    <strong>Chef's Specials:</strong> Fusion cuisine, diet
                    specific and modern creativity
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-chef-gold">★</span>
                  <p>
                    <strong>Private Dining:</strong> Savor a restaurant-like
                    dining experience in your home
                  </p>
                </div>
              </div>
              <Button
                className="bg-chef-brown hover:bg-chef-brown-dark text-white hover:text-white rounded-full px-6"
                asChild
              >
                <Link to="/contact">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Us Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-chef-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-chef-gold italic mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From private dinners to grand celebrations,{" "}
              <span className="text-chef-gold italic">I bring taste, texture, and creativity</span>{" "}
              to every table.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {events.map((event, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 bg-background">
                  <h3 className="font-bold text-lg mb-2 text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {event.description}
                  </p>
                  <Button
                    variant="link"
                    className="text-chef-brown p-0"
                    asChild
                  >
                    <Link to="/gallery">View Event →</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              className="bg-chef-brown hover:bg-chef-brown-dark  hover:text-white rounded-full px-8"
              asChild
            >
              <Link to="/gallery">View All Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-chef-gold font-semibold mb-2">
              CLIENT STORIES & EVENT HIGHLIGHTS
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Moments That Tell the Story
            </h2>
            <p className="text-muted-foreground mt-4">
              Every event has its own flavor. Here's a glimpse of some special
              occasions I had the honor to cater and share unforgettable moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img
                src={kitchenTeam}
                alt="Wedding Video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-chef-brown fill-chef-brown" />
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
              <img
                src={cateringEvent}
                alt="Event Video"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                  <Play className="h-8 w-8 text-chef-brown fill-chef-brown" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-chef-gold font-semibold mb-2">Testimonial</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Reviews from our guests
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-chef-gold text-2xl">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-bold">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
