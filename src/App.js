import React, { useState } from "react";
import { Menu, X, GitHub, Mail, Linkedin, ExternalLink } from "lucide-react";

// Navigation Component
const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
  >
    {children}
  </a>
);

// Project Card Component
const ProjectCard = ({ title, description, tags, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <a
      href={link}
      className="inline-flex items-center text-blue-600 hover:text-blue-800"
    >
      View Project <ExternalLink className="ml-2 w-4 h-4" />
    </a>
  </div>
);

// Main Portfolio Component
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "Research Project 1",
      description:
        "An investigation into advanced machine learning techniques for natural language processing.",
      tags: ["Machine Learning", "NLP", "Python"],
      link: "#",
    },
    {
      title: "Research Project 2",
      description:
        "Development of novel algorithms for computational biology applications.",
      tags: ["Bioinformatics", "Algorithms", "R"],
      link: "#",
    },
    {
      title: "Research Project 3",
      description: "Statistical analysis of large-scale genomic data sets.",
      tags: ["Statistics", "Genomics", "Data Analysis"],
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-semibold text-gray-800">
              Your Name
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <NavLink href="#about">About</NavLink>
              <NavLink href="#research">Research</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                About
              </a>
              <a
                href="#research"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Research
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <img
              src="/api/placeholder/150/150"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Name</h1>
            <p className="text-xl text-gray-600 mb-8">
              Research Position • Institution
            </p>
            <p className="max-w-2xl mx-auto text-gray-600">
              Brief description of your research interests and expertise. Make
              it engaging and memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Research Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Research Area 1
              </h3>
              <p className="text-gray-600">
                Detailed description of your primary research focus,
                methodology, and key findings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Research Area 2
              </h3>
              <p className="text-gray-600">
                Description of another research interest, including its
                significance and potential impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Recent Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Get in Touch
          </h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <GitHub className="w-6 h-6" />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
