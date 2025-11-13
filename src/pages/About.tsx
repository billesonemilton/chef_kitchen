import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import chefCooking from "@/assets/chef-cooking.png";
import kitchenTeam from "@/assets/kitchen-team.png";

const About = () => {
  const stats = [
    { number: "10+", label: "Birthday party" },
    { number: "7890+", label: "Satisfied Clients" },
    { number: "A+", label: "TOTAL EVALUATION" },
  ];

  const values = [
    {
      icon: "🍳",
      title: "Passion in Every Dish",
      description:
        "Each dish is a reflection of my deep love for cooking and creating memorable dining experiences.",
    },
    {
      icon: "🌿",
      title: "Authentic Flavors",
      description:
        "Using fresh, high-quality ingredients to bring authentic taste and texture to every plate.",
    },
    {
      icon: "⏰",
      title: "Shared Moments",
      description:
        "Food brings people together. I strive to create dishes that foster connection and joy.",
    },
  ];

  const services = [
    { name: "Birthday Party", description: "Celebrate with custom menus" },
    { name: "Wedding Party", description: "Make your day unforgettable" },
  ];

  const team = [
    { name: "Brad Adams", role: "Head Chef", image: chefCooking },
    { name: "Jhon Khan", role: "Sous Chef", image: kitchenTeam },
    { name: "Jessica Bell", role: "Pastry Chef", image: chefCooking },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-64 bg-chef-brown-dark flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">About Chef</h1>
          <p className="text-lg">
            Read our story, we served and about the team
          </p>
        </div>
      </section>

      {/* Who I Am */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <p className="text-chef-gold font-semibold mb-2">See</p>
            <h2 className="text-3xl md:text-4xl font-bold">WHO I AM</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <img
                src={chefCooking}
                alt="Chef George Herry"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-chef-gold text-2xl">📚</span>
                  <h3 className="text-xl font-bold text-chef-gold">
                    A Journey Through Taste and Culture
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  My culinary journey began over a decade ago, inspired by the
                  rich traditions and the thrill of creating something special.
                  I bring authentic flavors, deep passion for the art of food,
                  and creativity to every event.
                </p>
              </div>

              <p className="text-muted-foreground mb-6">
                From small family gatherings to grand celebrations, I've had the
                privilege to share delicious moments that bring people together.
                I believe the cooking goes beyond recipes; it's about connection,
                creativity, and care in each dish.
              </p>

              <p className="text-right font-bold italic">
                — Chef Sone Milton
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* My Cooking Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-chef-gold font-semibold mb-2">
              My Culinary Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">
              MY COOKING VALUES
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="font-bold text-lg mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-chef-brown-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-chef-gold">
              Quelques-uns de nos faits marquants
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-chef-gold">
                  {stat.number}
                </div>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-muted-foreground mb-2">
              What Special services we are offering now
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">SPECIAL SERVICE</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="p-8 text-center">
                <h3 className="font-bold text-2xl mb-3">{service.name}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">OUR TEAM</h2>
            <p className="text-muted-foreground">
              For the love tiding ! Team behind the curtain
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-chef-brown-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to book your event?
          </h2>
          <p className="text-lg mb-8">
            Message me directly on WhatsApp or call me to discuss your event!
          </p>
          <Button
            className="bg-chef-brown hover:bg-chef-brown-dark text-white rounded-full px-8 py-6 text-lg"
            asChild
          >
            <a href="tel:+237679591261">
              <Calendar className="mr-2 h-5 w-5" />
              Book Us Now
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
