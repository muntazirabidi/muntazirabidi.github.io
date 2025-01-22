import React from "react";
import {
  Mail,
  Linkedin,
  Globe,
  FileText,
  Download,
  ExternalLink,
} from "lucide-react";

// Custom button component with hover effect
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`
      px-6 py-3 rounded-full font-medium
      transition-all duration-300 ease-in-out
      transform hover:scale-105 hover:shadow-lg
      ${className}
    `}
    {...props}
  >
    {children}
  </button>
);

// Card component with hover effect
const Card = ({ children, className = "" }) => (
  <div
    className={`
      bg-white rounded-xl p-8
      transition-all duration-300 ease-in-out
      hover:shadow-xl hover:transform hover:-translate-y-1
      ${className}
    `}
  >
    {children}
  </div>
);

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Dr. Muntazir Abidi
              </span>
            </div>
            <div className="flex space-x-6 items-center">
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                My Research
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Free Resources
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
              >
                Publications
              </a>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative group">
                <div
                  className="absolute -top-6 -left-6 w-72 h-72 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full 
                  transition-transform duration-500 group-hover:scale-105"
                ></div>
                <img
                  src="/api/placeholder/300/300"
                  alt="Dr. Muntazir Abidi"
                  className="relative w-64 h-64 rounded-full object-cover ring-4 ring-white shadow-xl
                    transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="md:w-1/2 text-left">
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Hey Friends!
              </h1>
              <p className="text-xl mb-6 text-gray-700">
                I'm Muntazir. I'm a Quantitative Researcher turned AI
                Consultant, YouTuber, and a Global Talent Visa holder endorsed
                by the Royal Society.
              </p>
              <p className="text-gray-600 mb-8">
                I share insights about AI, machine learning, and quantitative
                research, helping bridge the gap between academic research and
                practical applications.
              </p>
              <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 inline-flex items-center">
                Join my newsletter
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Can I Help You Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            How Can I Help You?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Research Papers Card */}
            <Card className="border border-gray-100">
              <div
                className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-6
                transition-colors duration-300 group-hover:from-indigo-200 group-hover:to-purple-200"
              >
                <FileText className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Research Papers
              </h3>
              <p className="text-gray-600 mb-4">
                Explore my published work in cosmology, machine learning, and
                statistical analysis.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 inline-flex items-center group"
              >
                Read papers
                <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Card>

            {/* AI Consulting Card */}
            <Card className="border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                AI Consulting
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how I help companies implement AI solutions and improve
                their data analysis.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 inline-flex items-center group"
              >
                Learn more
                <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Card>

            {/* Free Resources Card */}
            <Card className="border border-gray-100">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Free Resources
              </h3>
              <p className="text-gray-600 mb-4">
                Access tutorials, code samples, and guides about machine
                learning and data analysis.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 inline-flex items-center group"
              >
                Get resources
                <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Featured Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Work cards with gradient borders */}
            <Card className="group border-2 border-transparent bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-indigo-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Quantitative Research
              </h3>
              <p className="text-gray-600 mb-4">
                My work on statistical methodologies for complex systems
                analysis, achieving 7% precision in cosmological parameter
                estimation.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 group-hover:underline"
              >
                View publications →
              </a>
            </Card>

            <Card className="group border-2 border-transparent bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-indigo-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Machine Learning & AI
              </h3>
              <p className="text-gray-600 mb-4">
                Development of innovative AI solutions with BERT embeddings and
                LLMs, improving model accuracy by 85%.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 group-hover:underline"
              >
                View projects →
              </a>
            </Card>

            <Card className="group border-2 border-transparent bg-gradient-to-r from-indigo-50 to-purple-50 hover:border-indigo-200">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Technical Writing
              </h3>
              <p className="text-gray-600 mb-4">
                Articles and guides about AI, machine learning, and data
                analysis for both technical and non-technical audiences.
              </p>
              <a
                href="#"
                className="text-indigo-600 hover:text-indigo-700 group-hover:underline"
              >
                Read articles →
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section with gradient background */}
      <section
        id="newsletter"
        className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            Subscribe to My Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get updates about AI, machine learning, and quantitative research
            delivered straight to your inbox.
          </p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg border border-r-0 border-gray-300 
                focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
            <Button className="rounded-l-none bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer with gradient sections */}
      <footer className="py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                Dr. Muntazir Abidi
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
                >
                  <Globe className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Footer navigation columns */}
            {[
              {
                title: "Work",
                links: [
                  { name: "Research Papers", href: "#research" },
                  { name: "AI Projects", href: "#projects" },
                  { name: "Publications", href: "#publications" },
                ],
              },
              {
                title: "Resources",
                links: [
                  { name: "Free Guides", href: "#guides" },
                  { name: "Newsletter", href: "#newsletter" },
                  { name: "Tutorial Videos", href: "#tutorials" },
                ],
              },
              {
                title: "Contact",
                links: [
                  { name: "About Me", href: "#about" },
                  { name: "Get in Touch", href: "#contact" },
                  { name: "Support", href: "#support" },
                ],
              },
            ].map((column, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-gray-800">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 flex items-center group"
                      >
                        {link.name}
                        <ExternalLink className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
            © {new Date().getFullYear()} Dr. Muntazir Abidi. All rights
            reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
