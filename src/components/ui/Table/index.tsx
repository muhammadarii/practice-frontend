import { TableCountriesProps } from "@/types";
import Image from "next/image";
import React from "react";

const TableCountries: React.FC<TableCountriesProps> = ({ Countries }) => {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>No</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Flag</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Capital</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Currencies
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Languages
          </th>

          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Population
          </th>
        </tr>
      </thead>
      <tbody className="">
        {Countries?.map((country, index: number) => (
          <tr key={index}>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {index + 1}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <Image
                src={country.flags.svg}
                alt={country.name.common}
                width={50}
                height={50}
              />
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {country.name.common}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {country.capital}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(", ")
                : "N/A"}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "N/A"}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {country.population.toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCountries;
