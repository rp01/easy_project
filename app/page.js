import React from 'react';
import { ArrowRight, Send, MessageCircle, FileText, Star, ChevronRight } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-green-100 py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bring Your Ideas to Life</h1>
            <p className="text-xl mb-6">Submit your innovative ideas and get expert solutions from our managers. Turn your vision into reality!</p>
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Submit Your Idea
            </button>
          </div>
          <div className="md:w-1/2">
            <img src="/api/placeholder/600/400" alt="People brainstorming" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            {[
              { icon: <Send />, title: "Submit your idea" },
              { icon: <MessageCircle />, title: "Managers review and provide solutions" },
              { icon: <ArrowRight />, title: "Engage and finalize the solution" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  {step.icon}
                </div>
                <p className="text-center font-semibold">{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Send />, title: "Easy idea submission", description: "Submit your ideas quickly and easily" },
              { icon: <MessageCircle />, title: "Real-time notifications", description: "Stay updated with instant notifications" },
              { icon: <ArrowRight />, title: "Threaded conversations", description: "Engage in organized discussions" },
              { icon: <FileText />, title: "Document management", description: "Upload and manage documents effortlessly" },
              { icon: <Star />, title: "Expert recommendations", description: "Get tailored solution recommendations" }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-blue-600 mb-4">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "John Doe", role: "Product Manager", quote: "This platform has revolutionized our idea management process. It's now easier than ever to collect and act on great ideas." },
              { name: "Jane Smith", role: "Innovation Lead", quote: "The expert solutions provided by managers have been invaluable. We've seen a 30% increase in successful idea implementations." }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img src={`/api/placeholder/50/50`} alt={testimonial.name} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8">Join our platform and start submitting your innovative ideas today!</p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300">
            Start Submitting Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <a href="#" className="mr-4 hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
            </div>
            <div className="flex space-x-4">
              {/* Add your social media icons here */}
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>Contact: info@ideaplatform.com</p>
            <p>&copy; 2024 Idea Management Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;