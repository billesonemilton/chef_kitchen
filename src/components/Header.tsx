import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { Button } from "./ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Chef Herry Logo" className="h-16 w-16" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-chef-gold transition-colors font-medium border-b-2 border-chef-gold pb-1"
            >
              HOME
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-chef-gold transition-colors font-medium"
            >
              ABOUT
            </Link>
            <Link
              to="/gallery"
              className="text-foreground hover:text-chef-gold transition-colors font-medium"
            >
              GALLERY
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-chef-gold transition-colors font-medium"
            >
              CONTACT
            </Link>
          </nav>

          {/* Book Now Button */}
          <div className="flex items-center gap-2">
            <Button
              className="bg-chef-brown hover:bg-chef-brown-dark text-white rounded-full px-6"
              asChild
            >
              <Link to="/contact">
                <Calendar className="mr-2 h-4 w-4" />
                Book Us Now
              </Link>
            </Button>
            <div className="hidden lg:block text-sm">
               <Button
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/+237679591261">WhatsApp Us</a>
            </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
