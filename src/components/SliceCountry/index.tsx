"use client";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchCountries } from "@/redux/features/countrySlice";
import TableCountries from "../ui/Table";
import CategoryBox from "../ui/CategoryBox";
import SearchBox from "../ui/SearchBox";

const SliceCountry: React.FC = () => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("Semua");
  const { countries, status, error } = useAppSelector(
    (state) => state.countries
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCountries());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  // ✅ Pastikan `countries` bukan null/undefined sebelum `.map()`
  const regions = [
    "Semua",
    ...new Set(countries?.map((country) => country.region).filter(Boolean)),
  ];

  // ✅ Filter berdasarkan pencarian dan region
  const filteredCountries = countries
    ?.filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion =
        selectedCountry === "Semua" || country.region === selectedCountry;
      return matchesSearch && matchesRegion;
    })
    ?.sort((a, b) => a.name.common.localeCompare(b.name.common)); // ✅ Sorting A-Z

  return (
    <div>
      <div className="flex flex-row gap-2 my-2">
        <CategoryBox
          regions={regions}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <SearchBox search={search} setSearch={setSearch} />
      </div>
      <TableCountries Countries={filteredCountries} />
    </div>
  );
};

export default SliceCountry;
