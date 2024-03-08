/**
 * This Sidebar component dynamically displays categories from a JSON data file.
 * Clicking a category toggles its open state, revealing sub-categories if available.
 * Additionally, it implements a semi-transparent Backdrop that captures
 * click and "Escape" key events for closing the open category.
 */
import React from "react";
import { useState } from "react";
import category from "./categoryData.json";
import SubCategories from "../SubCategories/SubCategories";
import Backdrop from "../Backdrop/Backdrop";

const Sidebar = () => {
  const [openCategory, setOpenCategory] = useState<string>("");

  const toggleCategory = (id: string) => {
    setOpenCategory(id);
  };

  const handleBackdrop = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "backdrop") {
      setOpenCategory("");
    }
  };

  const handleKeyboard = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setOpenCategory("");
    }
  };

  const styleBar: string =
    "pt-[17px] pb-[17px] pl-[24px] pr-[40px] flex gap-8 items-center rounded-[5px] relative cursor-pointer hover:bg-secondary hover:text-secondary-foreground hover:fill-secondary-foreground";

  const openStyleBar: string =
    "bg-secondary text-secondary-foreground fill-secondary-foreground";

  return (
    <div className="z-10">
      {openCategory && (
        <Backdrop
          handleBackdrop={handleBackdrop}
          handleKeyboard={handleKeyboard}
        />
      )}
      <ul className="w-84 text-left">
        {category.map(({ id, name, img, subCategories }) => (
          <li
            className={`${
              openCategory === id ? openStyleBar : "fill-foreground"
            } ${styleBar}`}
            key={id}
            onClick={() => {
              subCategories.length !== 0 && toggleCategory(id);
            }}
          >
            <svg width={30} height={30} className="">
              <use xlinkHref={img} />
            </svg>
            <span className="fs-base">{name}</span>
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
