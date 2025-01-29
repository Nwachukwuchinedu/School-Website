import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, BookOpen, Users, Calendar, ArrowDown, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrolled * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  return (
    <div className="overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <GraduationCap className="text-blue-600" size={32} />
              <span className="text-xl font-bold">Academia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Programs</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
          style={{ top: '64px' }}
        >
          <div className="container mx-auto px-4 py-6 space-y-6">
            <a 
              href="#" 
              className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#" 
              className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a 
              href="#" 
              className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#" 
              className="block text-lg text-gray-600 hover:text-blue-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105"
              onClick={() => setIsMenuOpen(false)}
            >
              Apply Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Excellence in Education</h1>
          <p className="text-xl md:text-2xl mb-8">Shaping Tomorrow's Leaders Today</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
            Apply Now
          </button>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ArrowDown size={32} />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="fade-in p-6 text-center">
              <GraduationCap className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-2">Expert Faculty</h3>
              <p className="text-gray-600">Learn from industry professionals and experienced educators</p>
            </div>
            <div className="fade-in p-6 text-center">
              <BookOpen className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
              <p className="text-gray-600">Comprehensive programs designed for the future</p>
            </div>
            <div className="fade-in p-6 text-center">
              <Users className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">Personalized attention for every student</p>
            </div>
            <div className="fade-in p-6 text-center">
              <Calendar className="mx-auto mb-4 text-blue-600" size={40} />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Balance your studies with other commitments</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80"
                alt="Campus Life"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We are committed to providing a transformative educational experience that empowers students to achieve their full potential. Through innovative teaching methods and a supportive learning environment, we prepare our students for success in their chosen fields.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in text-center">
              <Phone className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="fade-in text-center">
              <Mail className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">info@school.edu</p>
            </div>
            <div className="fade-in text-center">
              <MapPin className="mx-auto mb-4 text-blue-600" size={32} />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Education Ave, Learning City</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 School Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;