import { createSlice } from '@reduxjs/toolkit';

interface HeaderState {
  mobileMenuOpen: boolean;
}

const initialState: HeaderState = {
  mobileMenuOpen: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setMobileMenuOpen(state, action) {
      state.mobileMenuOpen = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});

export const { setMobileMenuOpen, toggleMobileMenu } = headerSlice.actions;
export default headerSlice.reducer;
