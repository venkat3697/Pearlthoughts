// store.js
import create from "zustand";

export const useDateStore = create((set) => ({
  startDate: null,
  endDate: null,
  recurrenceType: "none",
  recurrenceOptions: {},
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
  setRecurrenceType: (type) => set({ recurrenceType: type }),
  setRecurrenceOptions: (options) => set({ recurrenceOptions: options }),
}));
