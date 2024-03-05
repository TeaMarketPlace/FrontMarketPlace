import React from "react";

interface Categories {
  id: string;
  name: string;
}

interface SubCategoriesProps {
  subCategories: Categories[];
}

const SubCategories: React.FC<SubCategoriesProps> = ({ subCategories }) => {
  return (
    <ul className="absolute top-0 right-0">
      {subCategories.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default SubCategories;
