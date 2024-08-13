export type Character = {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: Location;
  name: string;
  origin: Origin;
  species: string;
  status: string;
  type: string;
  url: string;
};

export type Origin = {
  name: string;
  url: string;
};

export type Location = {
  name: string;
  url: string;
};
