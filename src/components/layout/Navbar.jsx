// src/components/layout/Navbar.jsx
import React from "react";
import { Button, NavLink, Container, GradientText } from "../common";

const NAV_LINKS = [
  { href: "#research", text: "My Research" },
  { href: "#resources", text: "Free Resources" },
  { href: "#youtube", text: "YouTube" },
  { href: "#publications", text: "Publications" },
];

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <Container>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <GradientText className="text-2xl font-bold">
              Dr. Muntazir Abidi
            </GradientText>
          </div>

          <div className="flex space-x-6 items-center">
            {NAV_LINKS.map(({ href, text }) => (
              <NavLink key={href} href={href}>
                {text}
              </NavLink>
            ))}
            <Button variant="primary">Contact Me</Button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
