import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
// import themeReducer from "./features/themeSlice";
import { appApiSlice } from "./services/app.api";
import userSlice from "./features/userSlice";
//  slaw law pyawa
export const store = configureStore({
  reducer: {
    user: userSlice,
    [appApiSlice.reducerPath]: appApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApiSlice.middleware),
});

setupListeners(store.dispatch);
