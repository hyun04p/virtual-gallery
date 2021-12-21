import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { data } from './data';

interface Tile {
  width: number;
  height: number;
  data: string;
  type: string;
}
// Define a type for the slice state
interface WebContent {
  categories: string[];
  images_by_category: {
    [key: string]: Tile[];
  };
}

// Define the initial state using that type
const initialState: WebContent = data;

export const webContentSlice = createSlice({
  name: 'WebContent',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = [...action.payload];
    },
    setImagesByCategory: (
      state,
      action: PayloadAction<{ [key: string]: Tile[] }>
    ) => {
      state.images_by_category = JSON.parse(JSON.stringify(action.payload));
    },
  },
});

const LOAD = 'webcontent/load';
export const loadWebContent = createAction(LOAD);

export const { setCategories, setImagesByCategory } = webContentSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCategories = () => (state: RootState) =>
  state.webContent.categories;
export const selectImagesByCategory =
  (category: string) => (state: RootState) =>
    state.webContent.images_by_category[category];
export const selectAllImagesByCategories = (state: RootState) =>
  state.webContent.images_by_category;

export default webContentSlice.reducer;
