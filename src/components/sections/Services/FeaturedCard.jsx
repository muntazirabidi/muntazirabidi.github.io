import React from "react";
import { Card } from "../../common";

const FeaturedCard = ({ title, description, link, variant }) => {
  return (
    <Card
      title={title}
      description={description}
      link={link}
      linkText="View project →"
      variant={variant}
      className="group"
    />
  );
};

export default FeaturedCard;
