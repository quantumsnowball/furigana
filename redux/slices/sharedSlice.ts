import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const sharedSlice = createSlice({
  name: 'shared',
  initialState: {
    menuOpen: false,
    editorOpen: false,
    editTitleOpen: false,
    successAlert: {
      open: false,
      message: '',
    },
    resetAlertOpen: false,
    overwriteAlertOpen: false,
    titleErrorAlertOpen: false,
  },
  reducers: {
    setMenuOpen: (s, a: PayloadAction<boolean>) => {
      s.menuOpen = a.payload
    },
    setEditorOpen: (s, a: PayloadAction<boolean>) => {
      s.editorOpen = a.payload
    },
    setEditTitleOpen: (s, a: PayloadAction<boolean>) => {
      s.editTitleOpen = a.payload
    },
    showSuccessAlert: (s, a: PayloadAction<string>) => {
      s.successAlert.open = true
      s.successAlert.message = a.payload
    },
    hideSuccessAlert: s => {
      s.successAlert.open = false
    },
    setResetAlertOpen: (s, a: PayloadAction<boolean>) => {
      s.resetAlertOpen = a.payload
    },
    setOverwriteAlertOpen: (s, a: PayloadAction<boolean>) => {
      s.overwriteAlertOpen = a.payload
    },
    setTitleErrorAlertOpen: (s, a: PayloadAction<boolean>) => {
      s.titleErrorAlertOpen = a.payload
    },
  }
})

export const sharedActions = sharedSlice.actions

export const sharedReducer = sharedSlice.reducer

