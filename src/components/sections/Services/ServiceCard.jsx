import React from "react";
import { Card } from "../../common";

const ServiceCard = ({ icon, title, description, link, linkText }) => {
  return (
    <Card
      icon={icon}
      title={title}
      description={description}
      link={link}
      linkText={linkText}
      className="border border-gray-100"
    />
  );
};

export default ServiceCard;
