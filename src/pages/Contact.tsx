import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-64 bg-gradient-to-r from-chef-brown-dark to-chef-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">CONTACT US</h1>
          <p className="text-lg">Let's discuss your event</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                Ready to create an unforgettable culinary experience? Fill out
                the form or reach out directly. I'd love to hear about your
                event!
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-chef-gold/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-chef-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                     <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/+237679591261">WhatsApp Us</a>
            </Button>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-chef-gold/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-chef-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      
                    </p>
                    <p className="text-sm text-muted-foreground">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-chef-gold/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-chef-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Service Area</h3>
                    <p className="text-muted-foreground">
                      Available for events throughout the region
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Travel to your venue
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Name@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+237679591261"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Event Type
                  </label>
                  <Input
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    placeholder="Wedding, Birthday, Corporate, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, number of guests, date, and any special requirements..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-chef-brown hover:bg-chef-brown-dark text-white"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-chef-brown-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prefer to Talk Directly?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Give us a call or send a WhatsApp message for immediate assistance.
            We're here to make your event planning as smooth as possible!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/+237679591261">WhatsApp Us</a>
            </Button>
            <Button
              className="bg-white text-chef-brown hover:bg-chef-beige rounded-full px-8"
              asChild
            >
              <a href="tel:+96567726252">Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
