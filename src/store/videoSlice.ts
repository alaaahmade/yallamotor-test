import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
  details: string;
}

interface VideoState {
  videos: Video[];
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
};

export const fetchVideos = createAsyncThunk('videos/fetchVideos', async () => {
  const response = await axios.get<Video[]>('/api/videos');
  return response.data;
});

const videoSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch videos';
      });
  },
});

export default videoSlice.reducer;
