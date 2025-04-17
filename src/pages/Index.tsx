
import React from 'react';
import Button from '@/components/Button';
import PricingCard from '@/components/PricingCard';
import Testimonial from '@/components/Testimonial';
import FeatureCard from '@/components/FeatureCard';
import PartnerGrid from '@/components/PartnerGrid';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { FeatureIcons, CompanyLogos, SocialIcons, ContactIcons } from '@/components/icons';

const Index = () => {
  // Testimonial data
  const testimonials = [
    {
      quote: "Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.",
      image: "/lovable-uploads/77ec9ce3-d00f-4242-bb6f-3edcb1402f87.png", // Replace with actual image
      name: "John Doe",
      title: "UI designer"
    }
  ];

  // Partner data
  const partners = [
    { name: "Google", logo: CompanyLogos.Google },
    { name: "Amazon", logo: CompanyLogos.Amazon },
    { name: "Microsoft", logo: CompanyLogos.Microsoft },
    { name: "Uber", logo: CompanyLogos.Uber },
    { name: "Dropbox", logo: CompanyLogos.Dropbox },
    { name: "Google", logo: CompanyLogos.Google },
    { name: "Uber", logo: CompanyLogos.Uber },
    { name: "Amazon", logo: CompanyLogos.Amazon },
  ];

  // Features
  const features = [
    {
      icon: FeatureIcons.TypeFeature,
      title: "OpenType features Variable fonts",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: FeatureIcons.DesignData,
      title: "Design with real data",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      icon: FeatureIcons.FastAction,
      title: "Fastest way to take action",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-gray-900 -z-10">
          <img 
            src="/placeholder.svg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 pt-16 pb-40">
          <header className="flex justify-between items-center py-4 mb-16">
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-blue-300">Home</a>
              <a href="#" className="hover:text-blue-300">Product</a>
              <a href="#" className="hover:text-blue-300">Pricing</a>
              <a href="#" className="hover:text-blue-300">About</a>
              <a href="#" className="hover:text-blue-300">Contact</a>
            </nav>
            
            <div className="flex-grow md:flex-grow-0 text-center">
              <h1 className="text-2xl font-bold text-white">FIGMA LAND</h1>
            </div>
            
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-300">{SocialIcons.Twitter}</a>
              <a href="#" className="hover:text-blue-300">{SocialIcons.Facebook}</a>
              <a href="#" className="hover:text-blue-300">{SocialIcons.LinkedIn}</a>
            </div>
          </header>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">The best products start with Figma</h1>
            <p className="text-xl mb-8">
              Most calendars are designed for teams. Slate is designed for freelancers
            </p>
            <Button size="lg">Try For Free</Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="absolute bottom-0">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,192L1440,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
          <p className="text-center text-gray-600 mx-auto max-w-2xl mb-16">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/77ec9ce3-d00f-4242-bb6f-3edcb1402f87.png" 
              alt="Feature preview" 
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="transform transition-transform hover:scale-110">
                {FeatureIcons.PlayButton}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Organize Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Fastest way to organize</h2>
              <p className="text-gray-600 mb-8">
                Most calendars are designed for teams.<br />
                Slate is designed for freelancers
              </p>
              <Button>Try For Free</Button>
            </div>
            
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Dashboard preview" 
                className="w-full shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/lovable-uploads/77ec9ce3-d00f-4242-bb6f-3edcb1402f87.png" 
                alt="Newsletter illustration" 
                className="w-full"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <p className="text-gray-600 mb-1">At your fingertips</p>
              <h2 className="text-4xl font-bold mb-6">Lightning fast prototyping</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Subscribe to our Newsletter</h3>
                <p className="text-gray-600">Available exclusivery on Figmaland</p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="flex-grow px-4 py-3 rounded-full bg-gray-100 border-0"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Partners</h2>
          <p className="text-center text-gray-600 mx-auto max-w-2xl mb-16">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
          
          <div className="max-w-5xl mx-auto mb-16">
            <PartnerGrid partners={partners} />
          </div>
          
          <div className="text-center">
            <Button>Try For Free</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonial 
        testimonials={testimonials} 
        companyLogo={CompanyLogos.IBM}
      />

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Pricing</h2>
          <p className="text-center mx-auto max-w-2xl mb-16">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard 
              title="FREE" 
              price="0" 
              description="Organize across all apps by hand"
              features={[
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature"
              ]}
            />
            
            <PricingCard 
              title="STANDARD" 
              price="10" 
              description="Organize across all apps by hand"
              features={[
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature"
              ]}
              isPopular={true}
              buttonVariant="white"
            />
            
            <PricingCard 
              title="BUSINESS" 
              price="99" 
              description="Organize across all apps by hand"
              features={[
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature",
                "Pricing Feature"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
          <p className="text-center text-gray-600 mx-auto max-w-2xl mb-16">
            Most calendars are designed for teams.<br />
            Slate is designed for freelancers
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <ContactForm />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center text-gray-700 mb-4">
                <span className="text-blue-500 mr-4">{ContactIcons.Location}</span>
                <span>6386 Spring St undefined Anchorage, Georgia 12473 United States</span>
              </div>
              
              <div className="flex items-center text-gray-700 mb-4">
                <span className="text-blue-500 mr-4">{ContactIcons.Phone}</span>
                <span>(843) 555-0130</span>
              </div>
              
              <div className="flex items-center text-gray-700 mb-4">
                <span className="text-blue-500 mr-4">{ContactIcons.Email}</span>
                <span>willie.jennings@example.com</span>
              </div>
              
              <div className="mt-8">
                <img 
                  src={CompanyLogos.Map} 
                  alt="Map" 
                  className="w-full rounded-lg border border-gray-200"
                />
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-blue-500 hover:text-blue-700">{SocialIcons.Twitter}</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">{SocialIcons.Facebook}</a>
                <a href="#" className="text-blue-500 hover:text-blue-700">{SocialIcons.LinkedIn}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
