import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { CarI } from '@/app/types/cars';

export interface CarReviewsState {
  reviews: CarI[];
  loading: boolean;
  error: string | null;
}

const initialState: CarReviewsState = {
  reviews: [],
  loading: false,
  error: null,
};

export const fetchCarReviews = createAsyncThunk<CarI[]>(
  'carReviews/fetchCarReviews',
  async () => {
    const res = await fetch('/api/car-reviews');
    if (!res.ok) throw new Error('Failed to fetch car reviews');
    return res.json();
  }
);

const carReviewsSlice = createSlice({
  name: 'carReviews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCarReviews.fulfilled, (state, action: PayloadAction<CarI[]>) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchCarReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch car reviews';
      });
  },
});

export default carReviewsSlice.reducer;
