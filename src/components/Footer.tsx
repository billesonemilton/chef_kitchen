import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-chef-brown-dark text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-2xl md:text-3xl mb-6">Ready to book your event?</h2>
          <div className="mb-8">
            <p className="text-lg mb-2">Sent Us a Test</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <Link to="/" className="hover:text-chef-gold transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-chef-gold transition-colors">
            About
          </Link>
          <Link to="/gallery" className="hover:text-chef-gold transition-colors">
            Gallery
          </Link>
          <Link to="/contact" className="hover:text-chef-gold transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-chef-gold transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-chef-gold transition-colors">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-chef-gold transition-colors">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-chef-gold transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm opacity-80">
          © 2025 SONE MILTON. All rights reserved.
        </div>
      
    </footer>
  );
};

export default Footer;
