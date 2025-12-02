import { Phone, MapPin, Clock, Star, CheckCircle, Shield, Users, Languages } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">L&S Auto Glass</h1>
            <div className="flex items-center space-x-1 text-sm text-gray-300">
              <Languages className="h-4 w-4" />
              <span>English & Spanish</span>
            </div>
          </div>
          <a
            href="tel:9095204817"
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 transition-all duration-200 shadow-lg"
          >
            <Phone className="h-5 w-5" />
            <span>(909) 520-4817</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              <span className="text-yellow-400 font-semibold text-lg">4.9 Stars • 130 Reviews on Yelp</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Expert Auto Glass Replacement in San Bernardino
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Professional windshield repair and replacement services. Fast, reliable, and affordable solutions for all vehicle types.
            </p>
            <div className="flex items-center space-x-2 mb-8 text-gray-300">
              <Languages className="h-6 w-6" />
              <span className="text-lg font-semibold">Se Habla Español • English & Spanish Services</span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:9095204817"
                className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl inline-flex items-center space-x-2"
              >
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
              <a
                href="#contact"
                className="bg-transparent hover:bg-white hover:text-black border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-xl"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Work</h2>
            <p className="text-xl text-gray-700">Quality auto glass services you can trust</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/Screenshot 2025-12-01 182524.png"
                alt="Damaged windshield requiring replacement"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/Screenshot 2025-12-01 182541.png"
                alt="Cracked windshield repair service"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/Screenshot 2025-12-01 182607.png"
                alt="Classic car windshield replacement"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Services</h2>
            <p className="text-xl text-gray-700">Professional auto glass solutions for every need</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Windshield Replacement',
                description: 'Complete windshield replacement using OEM-quality glass and materials',
                icon: Shield
              },
              {
                title: 'Chip & Crack Repair',
                description: 'Quick and effective repairs to prevent further damage and save you money',
                icon: CheckCircle
              },
              {
                title: 'Bilingual Service',
                description: 'English and Spanish speaking staff ready to assist you',
                icon: Languages
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 border border-gray-200">
                <service.icon className="h-12 w-12 text-black mb-4" />
                <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Why Choose L&S Auto Glass?</h2>
            <p className="text-xl text-gray-700">Trusted by San Bernardino drivers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '130+', label: 'Yelp Reviews', icon: Star },
              { number: '4.9', label: 'Star Rating', icon: Star },
              { number: '15+', label: 'Years Experience', icon: Shield },
              { number: '100%', label: 'Satisfaction Guaranteed', icon: CheckCircle }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200">
                <stat.icon className="h-10 w-10 text-black mx-auto mb-4" />
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
              <p className="text-xl text-gray-300">Get your auto glass repaired or replaced by experts</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Address */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800">
                <MapPin className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="text-gray-300">
                  1150 W Belleview St<br />
                  San Bernardino, CA 92410
                </p>
                <a
                  href="https://maps.google.com/?q=1150+W+Belleview+St+San+Bernardino+CA+92410"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 mt-4 inline-block font-medium"
                >
                  Get Directions →
                </a>
              </div>

              {/* Phone */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800">
                <Phone className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3">Phone</h3>
                <a
                  href="tel:9095204817"
                  className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
                >
                  (909) 520-4817
                </a>
                <p className="text-gray-300 mt-4">Call for a free quote</p>
              </div>

              {/* Hours */}
              <div className="bg-gray-900 p-8 rounded-xl shadow-xl border border-gray-800">
                <Clock className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold mb-3">Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">8:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-8 border-t border-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="text-xl font-bold">L&S Auto Glass</span>
          </div>
          <p className="text-gray-400">
            Professional Auto Glass Services in San Bernardino, CA
          </p>
          <div className="flex items-center justify-center space-x-2 mt-2 text-gray-300">
            <Languages className="h-5 w-5" />
            <span>Se Habla Español</span>
          </div>
          <p className="text-gray-500 mt-4">
            © 2025 L&S Auto Glass. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
