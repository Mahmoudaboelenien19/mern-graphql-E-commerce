import { createSlice } from "@reduxjs/toolkit";

const initialState: { user: { createdAt: string }[] } = {
  user: [],
};

const userSlice = createSlice({
  name: "user-slice",
  initialState,
  reducers: {
    addToUserRedux(state, action) {
      if (Array.isArray(action.payload)) {
        state.user = [...action.payload, ...state.user];
      } else {
        state.user = [action.payload, ...state.user];
      }
    },

    removeFromUserRedux(state, action) {
      const arr = action.payload;
      for (const el of arr) {
        state.user = state.user.filter((st: any) => st._id !== el);
      }
    },

    updateUserRedux(state, action) {
      state.user = state.user.map((user: any) =>
        action.payload._id === user._id
          ? {
              ...user,
              role: action.payload.role,
            }
          : user
      );
    },
  },
});

export const { addToUserRedux, removeFromUserRedux, updateUserRedux } =
  userSlice.actions;
export default userSlice.reducer;
