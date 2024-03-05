// import React from 'react'
import { useState } from "react";
import category from "./categoryData.json";
import SubCategories from "../SubCategories/SubCategories";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string>("");

  const toggleCategory = (id: string) => {
    if (openCategory === id) {
      setOpenCategory("");
    } else {
      setOpenCategory(id);
    }
  };

  return (
    <div>
      <ul className="text-left">
        {category.map(({ id, name, img, subCategories }) => (
          <li
            className="pt-[17px] pb-[17px] pl-[24px] pr-[40px] flex gap-8 
            items-center rounded-[5px] relative cursor-pointer
            hover:bg-black hover:text-white hover:stroke-white"
            key={id}
          >
            <svg width={30} height={30} className="">
              <use xlinkHref={img} />
            </svg>
            <span
              className="fs-base"
              onClick={() => {
                subCategories.length !== 0 && toggleCategory(id);
              }}
            >
              {name}
            </span>
            {id === openCategory && (
              <SubCategories subCategories={subCategories} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
