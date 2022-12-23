import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Content } from '../../types/content'
import { FavoriteItems } from '../../types/favorite'


const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: {} as FavoriteItems
  },
  reducers: {
    setItems: (s, a: PayloadAction<FavoriteItems>) => {
      s.items = a.payload
    },
    setItem: (s, a: PayloadAction<Content>) => {
      s.items[a.payload.title] = a.payload
    },
    removeItem: (s, a: PayloadAction<string>) => {
      delete s.items[a.payload]
    }
  }
})

export const favoriteActions = favoriteSlice.actions

export const favoriteReducer = favoriteSlice.reducer

