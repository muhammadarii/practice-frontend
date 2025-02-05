import { SearchProps } from "@/types";
import React from "react";

const SearchBox: React.FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border bg-transparent px-2 py-1 outline-none w-full"
        placeholder="Search..."
      />
    </>
  );
};

export default SearchBox;
