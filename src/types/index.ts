export interface Country {
  name: {
    common: string;
  };
  capital: string[];
  population: number;
  flags: {
    svg: string;
  };
  currencies: {
    [key: string]: {
      symbol: string;
      name: string;
    };
  };
  languages: {
    [key: string]: {
      name: string;
    };
  };
  region: string;
  id: string;
  subregion: string;
}

export interface CountriesState {
  countries: Country[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface TableCountriesProps {
  Countries: Country[];
}

export interface CategoryBoxProps {
  selectedCountry: string;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
  regions: string[];
}

export interface SearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
