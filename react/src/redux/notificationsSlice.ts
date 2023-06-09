import { createSlice } from "@reduxjs/toolkit";
import { cartInitialState } from "../interfaces/user";

export interface notificationInterface {
  isRead: boolean;
  content: string;
  createdAt: string;
  _id: string;
}

interface notificationStateInterface {
  count: number;
  notificatins: notificationInterface[];
}
const initialState: notificationStateInterface = {
  count: 0,
  notificatins: [],
};

const notificatinsSlice = createSlice({
  name: "notificatins-slice",
  initialState,
  reducers: {
    addToNotificatinsRedux(state, action) {
      if (Array.isArray(action.payload)) {
        state.notificatins = [...action.payload, ...state.notificatins];
      } else {
        state.notificatins = [action.payload, ...state.notificatins];
      }
    },

    changeNotificationCount(state, action) {
      console.log(action.payload);

      state.count = action.payload;
    },

    removeFromNotificatinsRedux(state, action) {
      state.notificatins = state.notificatins.filter((ob) => {
        return ob._id !== action.payload;
      });
    },
    clearNotificationRedux(state) {
      state.notificatins = [];
    },

    toggleReadNotificatinsRedux(state, action) {
      console.log({ action: action.payload });
      state.notificatins = state.notificatins.map((e) => {
        return e._id === action.payload.id
          ? { ...e, isRead: action.payload.isRead }
          : e;
      });
    },
    MarkAllAsReadNotificationRedux(state) {
      state.notificatins = state.notificatins.map((e) => ({
        ...e,
        isRead: true,
      }));
    },
  },
});

export const {
  addToNotificatinsRedux,
  removeFromNotificatinsRedux,
  toggleReadNotificatinsRedux,
  changeNotificationCount,
  clearNotificationRedux,
  MarkAllAsReadNotificationRedux,
} = notificatinsSlice.actions;
export default notificatinsSlice.reducer;
