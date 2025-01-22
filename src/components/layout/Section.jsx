import React from "react";
import { Container } from "../common";

const Section = ({ children, className = "", withContainer = true }) => {
  const content = withContainer ? <Container>{children}</Container> : children;

  return <section className={`py-20 ${className}`}>{content}</section>;
};

export default Section;
