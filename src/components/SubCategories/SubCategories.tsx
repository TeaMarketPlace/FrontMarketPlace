import React from "react";
interface Brend {
  id: string;
  name: string;
}

interface Categories {
  id: string;
  name: string;
  brend?: Brend[];
}

interface SubCategoriesProps {
  subCategories: Categories[];
}

const SubCategories: React.FC<SubCategoriesProps> = ({ subCategories }) => {
  return (
    <div
      className="bg-secondary absolute w-[555px] top-0 
    rounded-[5px] right-[-550px] pl-[19px] pr-[19px] pt-[22px] pb-[22px] flex"
    >
      <svg width={24} height={24} className="mr-6 fill-secondary-foreground">
        <use xlinkHref="./icon-sprite.svg#vector" />
      </svg>
      <ul className="flex gap-x-[34px] gap-y-[20px] flex-wrap justify-end flex-row-reverse">
        {subCategories.map(({ id, name, brend }) => (
          <li key={id}>
            <span className="text-[16px] font-bold leading-[18px] mb-[3px]">
              {name}
            </span>
            <ul>
              {brend !== undefined &&
                brend.map(({ id, name }) => (
                  <li className="mb-[3px] last:mb-0" key={id}>
                    {name}
                  </li>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategories;
