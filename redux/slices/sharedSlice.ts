import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const sharedSlice = createSlice({
  name: 'shared',
  initialState: {
    menuOpen: false,
    editorOpen: false
  },
  reducers: {
    setMenuOpen: (s, a: PayloadAction<boolean>) => {
      s.menuOpen = a.payload
    },
    setEditorOpen: (s, a: PayloadAction<boolean>) => {
      s.editorOpen = a.payload
    },
  }
})

export const sharedActions = sharedSlice.actions

export const sharedReducer = sharedSlice.reducer

