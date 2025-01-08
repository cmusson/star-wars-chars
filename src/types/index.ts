type CharacterBasic = {
  uid: string;
  name: string;
  url: string;
};

type CharacterDetailResponse = {
  message: string;
  result: {
    properties: {
      height: string;
      mass: string;
      hair_color: string;
      skin_color: string;
      eye_color: string;
      birth_year: string;
      gender: string;
      created: string;
      edited: string;
      name: string;
      homeworld: string;
      url: string;
    };
    description: string;
    _id: string;
    uid: string;
    __v: number;
  };
};

type CharacterDetail = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
  description: string;
  uid: string;
};

type HomeworldResponse = {
  message: string;
  result: {
    properties: {
      diameter: string;
      rotation_period: string;
      orbital_period: string;
      gravity: string;
      population: string;
      climate: string;
      terrain: string;
      surface_water: string;
      created: string;
      edited: string;
      name: string;
      url: string;
    };
    description: string;
    _id: string;
    uid: string;
    __v: number;
  };
};

type Homeworld = {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
  description: string;
  uid: string;
};

export type {
  CharacterBasic,
  CharacterDetailResponse,
  CharacterDetail,
  HomeworldResponse,
  Homeworld,
};
