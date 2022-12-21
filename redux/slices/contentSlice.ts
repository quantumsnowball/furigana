import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DEFAULT_CONTENT, DEFAULT_CONTENT_ITEMS } from '../../constants/content'
import { FuriganaItem, RomajiItem, SourceItem } from '../../types/content'


const contentSlice = createSlice({
  name: 'content',
  initialState: {
    items: DEFAULT_CONTENT_ITEMS
  },
  reducers: {
    addContent: (s, a: PayloadAction<{ uuid: string }>) => {
      s.items.push({ uuid: a.payload.uuid, ...DEFAULT_CONTENT })
    },
    clearContent: s => {
      s.items = []
    },
    setSource: (s, a: PayloadAction<SourceItem>) => {
      s.items[a.payload.i].source = a.payload.val
    },
    setFurigana: (s, a: PayloadAction<FuriganaItem>) => {
      s.items[a.payload.i].furigana = a.payload.val
    },
    setRomaji: (s, a: PayloadAction<RomajiItem>) => {
      s.items[a.payload.i].romaji = a.payload.val
    },
  }
})

export const contentActions = contentSlice.actions

export const contentReducer = contentSlice.reducer

