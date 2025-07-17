import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface Brand {
  brand: string;
  image: string;
  name: string;
  logo: string;
  description: string;
}

interface BrandGridState {
  brands: Brand[];
  loading: boolean;
  error: string | null;
  showAll: boolean;
}

const initialState: BrandGridState = {
  brands: [],
  loading: false,
  error: null,
  showAll: false,
};

export const fetchBrands = createAsyncThunk(
  'brandGrid/fetchBrands',
  async () => {
    const response = await fetch('/api/brands');
    if (!response.ok) throw new Error('Failed to fetch brands');
    return await response.json();
  }
);

const brandGridSlice = createSlice({
  name: 'brandGrid',
  initialState,
  reducers: {
    setShowAll(state, action: PayloadAction<boolean>) {
      state.showAll = action.payload;
    },
    toggleShowAll(state) {
      state.showAll = !state.showAll;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action: PayloadAction<Brand[]>) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { setShowAll, toggleShowAll } = brandGridSlice.actions;
export default brandGridSlice.reducer;
