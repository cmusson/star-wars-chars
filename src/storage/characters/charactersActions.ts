import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { extractPageNumber } from "../../utils/extractPageNumber";
import {
  CharacterBasic,
  CharacterDetailResponse,
  Homeworld,
  HomeworldResponse,
} from "../../types";

// Initial URL to fetch characters
const BASE_URL = "https://www.swapi.tech/api/people/";

// T H U N K S

// Fetch characters of a particlar url (in goups of 10 bt default)
const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (url: string = BASE_URL) => {
    const response = await axios.get(url);
    const res = response.data;
    const currentPage = extractPageNumber(url);
    return {
      characters: res.results,
      next: res.next,
      previous: res.previous,
      totalPages: res.total_pages,
      currentPage,
    };
  }
);

// Fetch individual character
const fetchIndividualCharacter = createAsyncThunk(
  "characters/fetchCharacter",
  async (uid: string, { dispatch }) => {
    // Fetch the character first
    const response = await axios.get(
      `https://www.swapi.tech/api/people/${uid}`
    );
    const res: CharacterDetailResponse = response.data;

    const characterData = {
      ...res.result.properties,
      description: res.result.description,
      uid: res.result.uid,
    };

    dispatch(fetchHomeworld(characterData.homeworld));

    return characterData;
  }
);

// Fetch homeworld separately and store it in state
const fetchHomeworld = createAsyncThunk(
  "characters/fetchHomeworld",
  async (homeworldUrl: string) => {
    const response = await axios.get(homeworldUrl);
    const res: HomeworldResponse = response.data;

    const homeworldData: Homeworld = {
      ...res.result.properties,
      description: res.result.description,
      uid: res.result.uid,
    };

    return homeworldData;
  }
);

// Fetch search results of a string in character names
const fetchSearchResults = createAsyncThunk(
  "characters/fetchSearchResults",
  async (searchTerm: string) => {
    const response = await axios.get(
      `https://www.swapi.tech/api/people/?name=${searchTerm}`
    );
    return response.data.results;
  }
);

// Fetch all characters
const fetchAllCharacters = createAsyncThunk(
  "characters/fetchAllCharacters",
  async () => {
    let allCharacters: CharacterBasic[] = [];
    let url: string | null = BASE_URL;
    // while there is a next page url keep fetching and adding to the array
    while (url) {
      const response: {
        data: { results: CharacterBasic[]; next?: string };
      } = await axios.get(url);

      const res = response.data;
      allCharacters = [...allCharacters, ...res.results];

      // Ensure next page exists, explicitly check if it's undefined
      url = res.next ?? null;
    }

    return allCharacters;
  }
);

export {
  BASE_URL,
  fetchCharacters,
  fetchIndividualCharacter,
  fetchHomeworld,
  fetchSearchResults,
  fetchAllCharacters,
};
