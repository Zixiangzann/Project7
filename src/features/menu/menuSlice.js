import { createSlice } from '@reduxjs/toolkit'

export const menuSlice = createSlice({
  name: 'menu',
  initialState: {
    open: false
  },
  reducers: {
    setMenuStatus: (state) => {
      state.open = !state.open
    }
  },
})

export const { setMenuStatus} = menuSlice.actions

export const getMenuStatus= (state) => state.menu.open

export default menuSlice.reducer
