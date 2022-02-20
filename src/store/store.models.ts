export type Cartoon = {
  title: string;
  year: number;
  creator: string[];
  rating: string;
  genre: string[];
  episodes: number;
  image: string;
  id: number;
};

export type CartoonsStore = {
  data: Cartoon[];
  isLoading: boolean;
  errorMessage: string;
  searchValue: string;
  filter: {
    creator: string;
    genre: string;
    rating: string;
  };
  sortBy: "title" | "year" | null;
};

export type WatchlistStore = {
  cartoons: Cartoon[];
};

export type ThemeStore = {
  darkMode: boolean;
};
