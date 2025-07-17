import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import brandGridReducer from './slices/brandGridSlice';
import popularCarsReducer from './slices/popularCarsSlice';
import faqReducer from './slices/faqSlice';
import headerReducer from './slices/headerSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    brandGrid: brandGridReducer,
    popularCars: popularCarsReducer,
    faq: faqReducer,
    header: headerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
