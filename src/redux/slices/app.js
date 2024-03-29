import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
const initialState = {
  user: {},
  sideBar: {
    open: false,
    type: "CONTACT", // can be CONTACT, STARRED, SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // Toggle Sidebar
    toggleSideBar(state) {
      state.sideBar.open = !state.sideBar.open;
    },
    updateSideBarType(state, action) {
      state.sideBar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;
export function ToggleSideBar() {
  return async () => {
    dispatch(slice.actions.toggleSideBar());
  };
}
export function UpdateSideBarType(type) {
  return async () => {
    dispatch(slice.actions.updateSideBarType({ type }));
  };
}
