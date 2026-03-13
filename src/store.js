import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDosSlice = createSlice({
  name: "toDos",
  initialState: [],
  reducers: {
    addToDo: (state, action) => {
      state.push({
        text: action.payload,
        id: Date.now(),
      });
    },
    deleteToDo: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

export const { addToDo, deleteToDo } = toDosSlice.actions;

const store = configureStore({
  reducer: toDosSlice.reducer,
});

export default store;
