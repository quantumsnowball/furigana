import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CONTENT } from '../../constants/content'
import { FuriganaItems, RomajiItems, SourceItems } from '../../types/content'


const contentSlice = createSlice({
  name: 'content',
  initialState: DEFAULT_CONTENT,
  reducers: {
    setSource: (s, a: PayloadAction<SourceItems>) => { s.source = a.payload },
    setFurigana: (s, a: PayloadAction<FuriganaItems>) => { s.furigana = a.payload },
    setRomaji: (s, a: PayloadAction<RomajiItems>) => { s.romaji = a.payload },
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer

