import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CharacterBasic, CharacterDetail, Homeworld } from "../../types";
import {
  fetchAllCharacters,
  fetchCharacters,
  fetchHomeworld,
  fetchIndividualCharacter,
} from "./charactersActions";

interface CharactersState {
  characters: CharacterBasic[];
  allCharacters: CharacterBasic[];
  next: string | null;
  previous: string | null;
  totalPages: number | null;
  currentPage: number;
  loading: boolean;
  error: string | null;
  charSelected: CharacterDetail | null;
  homeworld: Homeworld | null;
  searchTerm: string;
}

const initialState: CharactersState = {
  characters: [],
  allCharacters: [],
  next: null,
  previous: null,
  totalPages: null,
  currentPage: 1,
  loading: false,
  error: null,
  charSelected: null,
  homeworld: null,
  searchTerm: "",
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    setPageNumber: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCharSelected: (state, action: PayloadAction<CharacterDetail | null>) => {
      state.charSelected = action.payload;
      state.homeworld = null;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.characters;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ??
          "Failed to fetch characters, please reload the page.";
      })
      .addCase(fetchAllCharacters.fulfilled, (state, action) => {
        state.allCharacters = action.payload;
      })
      .addCase(fetchIndividualCharacter.fulfilled, (state, action) => {
        state.charSelected = action.payload;
      })
      .addCase(fetchIndividualCharacter.rejected, (state, action) => {
        state.error =
          action.error.message ??
          "Failed to find character, please reload the page.";
      })
      .addCase(fetchHomeworld.fulfilled, (state, action) => {
        state.homeworld = action.payload;
      })
      .addCase(fetchHomeworld.rejected, (state, action) => {
        state.error =
          action.error.message ??
          "Failed to fetch homeworld, please reload the page.";
      });
  },
});

export const { setCharSelected, setPageNumber, setSearchTerm } =
  charactersSlice.actions;

export default charactersSlice.reducer;
