import React from "react";
import { Mail, Linkedin, Github, Youtube, ExternalLink } from "lucide-react";

const FOOTER_SECTIONS = [
  {
    title: "Research",
    links: [
      { name: "Publications", href: "#publications" },
      { name: "Featured Projects", href: "#projects" },
      { name: "Cubic Halo Bias", href: "#research" },
      { name: "Bayesian Networks", href: "#networks" },
    ],
  },
  {
    title: "Education",
    links: [
      { name: "CamEdVenture", href: "https://www.camedventure.com" },
      { name: "ML Tutorials", href: "#tutorials" },
      { name: "Free Resources", href: "#resources" },
      { name: "YouTube Channel", href: "#youtube" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Newsletter", href: "#newsletter" },
      { name: "About Me", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "AI Consulting", href: "#consulting" },
    ],
  },
];

const SOCIALS = [
  { icon: Mail, href: "mailto:your@email.com", label: "Email" },
  { icon: Linkedin, href: "https://linkedin.com/in/yourid", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/yourid", label: "GitHub" },
  { icon: Youtube, href: "https://youtube.com/@yourchannel", label: "YouTube" },
];

const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-2 text-gray-600 hover:text-[#553772] transition-colors duration-300"
    aria-label={label}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="inline-flex items-center text-gray-600 hover:text-[#553772] transition-colors duration-300 group"
    >
      {children}
      <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="bg-[#faf9f7] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-gray-900">
                Dr. Muntazir Abidi
              </h3>
              <p className="text-gray-600 text-sm max-w-xs">
                Bridging research and innovation in cosmology, machine learning,
                and quantitative analysis.
              </p>
              <div className="flex space-x-4">
                {SOCIALS.map((social) => (
                  <SocialLink key={social.href} {...social} />
                ))}
              </div>
            </div>

            {/* Footer Sections */}
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="font-semibold text-gray-900">{section.title}</h4>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link) => (
                    <FooterLink key={link.name} href={link.href}>
                      {link.name}
                    </FooterLink>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <div>
              © {new Date().getFullYear()} Dr. Muntazir Abidi. All rights
              reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="#privacy"
                className="hover:text-[#553772] transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="hover:text-[#553772] transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
