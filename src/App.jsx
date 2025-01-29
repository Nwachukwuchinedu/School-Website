import React, { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  ArrowDown,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import bhsBackgroundImg from "./assets/images/bhs.jpg";
import computerLab from "./assets/images/computer-lab.png"
import bhsLogo from "./assets/images/bhslogo.jpeg"

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
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
              <img src={bhsLogo} alt="BHS Logo" className="w-10 h-10" />
              <span className="text-xl font-bold">BHS</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-gray-600 hover:text-brown-900 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-brown-900 transition-colors"
              >
                Programs
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-brown-900 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-brown-900 transition-colors"
              >
                Contact
              </a>
              <button className="bg-green-900 hover:bg-green-1000 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105">
                Apply Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-brown-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
          style={{ top: "64px" }}
        >
          <div className="w-full px-12 py-6 space-y-6 inset-0 bg-white">
            <a
              href="#"
              className="block text-lg text-gray-600 hover:text-brown-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-lg text-gray-600 hover:text-brown-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </a>
            <a
              href="#"
              className="block text-lg text-gray-600 hover:text-brown-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="block text-lg text-gray-600 hover:text-brown-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <button
              className="w-full bg-green-900 hover:bg-green-1000 text-white px-4 py-2 rounded-full transition-all transform hover:scale-105"
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
          backgroundImage: 'url(" ' + bhsBackgroundImg + '")',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Excellence in Education
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Shaping Tomorrow's Leaders Today
          </p>
          <button className="bg-green-900 hover:bg-green-1000 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105">
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
              <GraduationCap className="mx-auto mb-4 text-brown-900" size={40} />
              <h3 className="text-xl font-semibold mb-2">Qualified Teachers</h3>
              <p className="text-gray-600">
                Learn from dedicated and experienced teachers who make learning
                exciting.
              </p>
            </div>
            <div className="fade-in p-6 text-center">
              <BookOpen className="mx-auto mb-4 text-green-900" size={40} />
              <h3 className="text-xl font-semibold mb-2">Modern Curriculum</h3>
              <p className="text-gray-600">
                Comprehensive programs designed for the future
              </p>
            </div>
            <div className="fade-in p-6 text-center">
              <Users className="mx-auto mb-4 text-brown-900" size={40} />
              <h3 className="text-xl font-semibold mb-2">Small Class Sizes</h3>
              <p className="text-gray-600">
                Personalized attention for every student
              </p>
            </div>
            <div className="fade-in p-6 text-center">
              <Calendar className="mx-auto mb-4 text-green-900" size={40} />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">
                Balance your studies with other commitments
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="fade-in h-[50vh] flex">
              <img
                src={computerLab}
                alt="Campus Life"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Baptist High School (BHS) is committed to fostering the personal
                and academic growth of its students while enhancing the school's
                infrastructure for a better learning environment. By leveraging
                the collective talents, skills, and resources of our community,
                we aim to create a thriving and engaged network dedicated to
                supporting current students.
              </p>
              <button className="bg-green-900 hover:bg-green-1000 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105">
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
              <Phone className="mx-auto mb-4 text-brown-900" size={32} />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <a href="tel:+2348138637470" className="text-gray-600">
                +234 813 863 7470
              </a>
            </div>
            <div className="fade-in text-center">
              <Mail className="mx-auto mb-4 text-brown-900" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <a href="mailto:bhsbenin@gmail.com" className="text-gray-600">
                bhsbenin@gmail.com
              </a>
            </div>
            <div className="fade-in text-center">
              <MapPin className="mx-auto mb-4 text-brown-900" size={32} />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <a
                href="https://maps.app.goo.gl/Nq1a4kzVzYxSrMHj7"
                className="text-gray-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baptist High School, 5 Tv Rd, Benin City 300102, Edo
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Baptist High School. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
