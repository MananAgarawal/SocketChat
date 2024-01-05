import { createSlice } from '@reduxjs/toolkit'

const MessagesSlice = createSlice({
      name : 'MESSAGES',
      initialState : [],
      reducers : {
        AddSelfMessage : (curval , action) => {
            curval.push(action.payload)
        },
        AddAnonymusMsg : (curval , action) => {
            curval.push(action.payload)
        }
      }
})

export const { AddAnonymusMsg, AddSelfMessage } = MessagesSlice.actions;
export default MessagesSlice.reducer;