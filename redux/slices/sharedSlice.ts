import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const sharedSlice = createSlice({
  name: 'shared',
  initialState: {
    editorOpen: false
  },
  reducers: {
    setEditorOpen: (s, a: PayloadAction<boolean>) => {
      s.editorOpen = a.payload
    },
    toggleEditorOpen: s => {
      s.editorOpen = !s.editorOpen
    }
  }
})

export const sharedActions = sharedSlice.actions

export const sharedReducer = sharedSlice.reducer

