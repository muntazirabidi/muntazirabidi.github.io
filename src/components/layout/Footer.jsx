import React from "react";
import { Container, GradientText } from "../common";
import { Mail, Linkedin, Globe, ExternalLink } from "lucide-react";

const FOOTER_SECTIONS = [
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
];

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a
      href={href}
      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 flex items-center group"
    >
      {children}
      <ExternalLink className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  </li>
);

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-gray-100">
      <Container>
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand and Social Links */}
          <div>
            <GradientText className="font-bold mb-4">
              Dr. Muntazir Abidi
            </GradientText>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={Mail} />
              <SocialLink href="#" icon={Linkedin} />
              <SocialLink href="#" icon={Globe} />
            </div>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-gray-800">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <FooterLink key={link.href} href={link.href}>
                    {link.name}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-600">
          © {new Date().getFullYear()} Dr. Muntazir Abidi. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
