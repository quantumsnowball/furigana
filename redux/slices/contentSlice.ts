import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const contentSlice = createSlice({
  name: 'content',
  initialState: {
    source: [''],
    furigana: [''],
    romaji: [''],
  },
  reducers: {
    setSource: (s, a: PayloadAction<string[]>) => { s.source = a.payload },
    setFurigana: (s, a: PayloadAction<string[]>) => { s.furigana = a.payload },
    setRomaji: (s, a: PayloadAction<string[]>) => { s.romaji = a.payload },
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer

