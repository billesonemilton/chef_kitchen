import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chefFlames from "@/assets/chef-flames.png";
import kitchenTeam from "@/assets/kitchen-team.png";
import cateringEvent from "@/assets/catering-event.png";
import chefCooking from "@/assets/chef-cooking.png";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Weddings",
    "Corporate Gala",
    "Festivals",
    "Private Dinners",
    "Videos",
  ];

  const galleryItems = [
    {
      image: cateringEvent,
      category: "Weddings",
      type: "image",
    },
    {
      image: kitchenTeam,
      category: "Corporate Gala",
      type: "image",
    },
    {
      image: chefFlames,
      category: "Private Dinners",
      type: "image",
    },
    {
      image: cateringEvent,
      category: "Festivals",
      type: "image",
    },
    {
      image: chefCooking,
      category: "Weddings",
      type: "image",
    },
    {
      image: kitchenTeam,
      category: "Corporate Gala",
      type: "image",
    },
    {
      image: chefFlames,
      category: "Private Dinners",
      type: "image",
    },
    {
      image: cateringEvent,
      category: "Festivals",
      type: "image",
    },
  ];

  const videos = [
    {
      thumbnail: kitchenTeam,
      title: "Wedding in TOWN | March 2023",
      description:
        "Provided an unforgettable wedding catering experience for over 150 guests...",
    },
    {
      thumbnail: cateringEvent,
      title: "Corporate Gala Event",
      description: "Professional catering for a high-profile corporate event...",
    },
    {
      thumbnail: chefFlames,
      title: "Private Chef Experience",
      description: "Intimate dining experience for a special celebration...",
    },
    {
      thumbnail: kitchenTeam,
      title: "Festival Catering",
      description: "Large-scale catering for community festival...",
    },
  ];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-64 bg-gradient-to-r from-chef-brown-dark to-chef-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold">GALLERY</h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-chef-gold font-semibold mb-2">
              My Areas of Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              SOME MEMORABLE EVENTS
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? "bg-chef-brown hover:bg-chef-brown-dark text-white"
                    : "border-chef-brown text-chef-brown hover:bg-chef-beige"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
              >
                <img
                  src={item.image}
                  alt={item.category}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <p className="text-chef-gold font-semibold mb-2">
                BEHIND THE SCENE
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Moments That Tell the Story
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Every event has its own flavor. Here's a glimpse of some special
                occasions I had the honor to cater and share unforgettable
                moments
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                    <div className="bg-white rounded-full p-4 group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 text-chef-brown fill-chef-brown" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-bold text-lg mb-2">{video.title}</h3>
                    <p className="text-sm opacity-90">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-muted p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
              Let's create something unforgettable together
            </h2>
            <p className="text-muted-foreground mb-6">
              Want to bring this experience to your next event? Make your
              relative at your event Happier
            </p>
            <Button
              className="bg-chef-brown hover:bg-chef-brown-dark text-white rounded-full px-8"
              asChild
            >
              <a href="/contact">Book Us Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
