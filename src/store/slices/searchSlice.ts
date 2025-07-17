import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  showPrice: boolean;
  minValue: string;
  maxValue: string;
  minRadio: string;
  maxRadio: string;
}

const initialState: SearchState = {
  showPrice: false,
  minValue: '',
  maxValue: '',
  minRadio: '',
  maxRadio: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setShowPrice(state, action: PayloadAction<boolean>) {
      state.showPrice = action.payload;
    },
    setMinValue(state, action: PayloadAction<string>) {
      state.minValue = action.payload;
      state.minRadio = '';
    },
    setMaxValue(state, action: PayloadAction<string>) {
      state.maxValue = action.payload;
      state.maxRadio = '';
    },
    setMinRadio(state, action: PayloadAction<string>) {
      state.minRadio = action.payload;
      state.minValue = action.payload;
    },
    setMaxRadio(state, action: PayloadAction<string>) {
      state.maxRadio = action.payload;
      state.maxValue = action.payload;
    },
    resetPriceRange(state) {
      state.minValue = '';
      state.maxValue = '';
      state.minRadio = '';
      state.maxRadio = '';
    },
    donePriceRange(state) {
      state.showPrice = false;
      // Optionally: trigger search or save values here
    },
  },
});

export const {
  setShowPrice,
  setMinValue,
  setMaxValue,
  setMinRadio,
  setMaxRadio,
  resetPriceRange,
  donePriceRange,
} = searchSlice.actions;

export default searchSlice.reducer;
