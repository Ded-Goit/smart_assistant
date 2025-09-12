import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NoteEvent {
  title: string;
  date: string;
}

interface NotesState {
  events: NoteEvent[];
}

const initialState: NotesState = {
  events: [],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<NoteEvent>) => {
      state.events.push(action.payload);
    },
    removeNote: (
      state,
      action: PayloadAction<{ title: string; date: string }>
    ) => {
      state.events = state.events.filter(
        (e) =>
          !(e.title === action.payload.title && e.date === action.payload.date)
      );
    },
    editNote: (
      state,
      action: PayloadAction<{
        old: { title: string; date: string };
        updated: NoteEvent;
      }>
    ) => {
      const index = state.events.findIndex(
        (e) =>
          e.title === action.payload.old.title &&
          e.date === action.payload.old.date
      );
      if (index !== -1) {
        state.events[index] = action.payload.updated;
      }
    },
  },
});

export const { addNote, removeNote, editNote } = notesSlice.actions;
export default notesSlice.reducer;
