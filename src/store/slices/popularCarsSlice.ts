import { CarI } from '@/app/types/cars';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';



interface PopularCarsState {
  cars: CarI[];
  loading: boolean;
  error: string | null;
  currentSlide: number;
}

const initialState: PopularCarsState = {
  cars: [],
  loading: false,
  error: null,
  currentSlide: 0,
};

export const fetchPopularCars = createAsyncThunk(
  'popularCars/fetchPopularCars',
  async () => {
    const response = await fetch('/api/popular-cars');
    if (!response.ok) throw new Error('Failed to fetch popular cars');
    return await response.json();
  }
);

const popularCarsSlice = createSlice({
  name: 'popularCars',
  initialState,
  reducers: {
    setCurrentSlide(state, action: PayloadAction<number>) {
      state.currentSlide = action.payload;
    },
    nextSlide(state, action: PayloadAction<number>) {
      state.currentSlide = Math.min(state.currentSlide + 1, action.payload); // action.payload = maxSlides
    },
    prevSlide(state) {
      state.currentSlide = Math.max(state.currentSlide - 1, 0);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularCars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPopularCars.fulfilled, (state, action: PayloadAction<CarI[]>) => {
        state.loading = false;
        state.cars = action.payload;
      })
      .addCase(fetchPopularCars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { setCurrentSlide, nextSlide, prevSlide } = popularCarsSlice.actions;
export default popularCarsSlice.reducer;
