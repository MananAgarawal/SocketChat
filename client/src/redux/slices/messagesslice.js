import { createSlice } from '@reduxjs/toolkit'

const MessagesSlice = createSlice({
      name : 'MESSAGES',
      initialState : [],
      reducers : {
        AddSelfMessage : (curval , action) => {
            curval.push(action.payload)
        },
        AddAnonymusMsg : (cyrval , action) => {
        
        }
      }
})

export const { AddAnonymusMsg, AddSelfMessage } = MessagesSlice.actions;
export default MessagesSlice.reducer;