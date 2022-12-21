import { createSlice } from '@reduxjs/toolkit'
import { WordMode } from '../../types'


const layoutSlice = createSlice({
  name: 'layout',
  initialState: {
    menuThemeExpanded: false,
    menuSettingsExpanded: false,
    menuAboutExpanded: false,
    romajiOn: false,
    wordMode: WordMode.Original
  },
  reducers: {
    toggleMenuThemeExpanded: s => {
      s.menuThemeExpanded = !s.menuThemeExpanded
    },
    toggleMenuSettingsExpanded: s => {
      s.menuSettingsExpanded = !s.menuSettingsExpanded
    },
    toggleMenuAboutExpanded: s => {
      s.menuAboutExpanded = !s.menuAboutExpanded
    },
    toggleRomajiOn: s => {
      s.romajiOn = !s.romajiOn
    },
    toggleWordMode: s => {
      s.wordMode = s.wordMode === 2 ? 0 : s.wordMode + 1
    }
  }
})

export const layoutActions = layoutSlice.actions

export const layoutReducer = layoutSlice.reducer

