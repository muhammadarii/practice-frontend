import { CategoryBoxProps } from "@/types";
import React from "react";

const CategoryBox: React.FC<CategoryBoxProps> = ({
  selectedCountry,
  setSelectedCountry,
  regions: categories,
}) => {
  return (
    <>
      <select
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        className="border bg-black px-2 py-1 outline-none w-[150px]"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default CategoryBox;
