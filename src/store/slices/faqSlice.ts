import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface FAQ {
  q: string;
  a: string;
}

interface FAQState {
  faqs: FAQ[];
  loading: boolean;
  error: string | null;
  openIndex: number | null;
}

const initialState: FAQState = {
  faqs: [],
  loading: false,
  error: null,
  openIndex: null,
};

export const fetchFaqs = createAsyncThunk(
  'faq/fetchFaqs',
  async () => {
    const response = await fetch('/api/faqs');
    if (!response.ok) throw new Error('Failed to fetch FAQs');
    return await response.json();
  }
);

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  reducers: {
    setOpenIndex(state, action: PayloadAction<number | null>) {
      state.openIndex = action.payload;
    },
    toggleOpenIndex(state, action: PayloadAction<number>) {
      state.openIndex = state.openIndex === action.payload ? null : action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaqs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFaqs.fulfilled, (state, action: PayloadAction<FAQ[]>) => {
        state.loading = false;
        state.faqs = action.payload;
      })
      .addCase(fetchFaqs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      });
  },
});

export const { setOpenIndex, toggleOpenIndex } = faqSlice.actions;
export default faqSlice.reducer;
