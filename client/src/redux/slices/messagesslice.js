import { createSlice } from '@reduxjs/toolkit'

const MessagesSlice = createSlice({
      name : 'MESSAGES',
      initialState : [],
      reducers : {
        AddAnonymusMsg : (curval , action) => {
            curval.push(action.payload)
        },
        flushmessages : (curval, action) => {
            curval = [];
        }
      }
})

export const { AddAnonymusMsg , flushmessages} = MessagesSlice.actions;
export default MessagesSlice.reducer;