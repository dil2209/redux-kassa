import { createSlice } from '@reduxjs/toolkit'


export const kassaSlice = createSlice({
    name: 'kassaReducer',
    initialState:{
        kassa:[{
            id:1,
            kassa:"Kassa1"
            },
            {  id:2,
                kassa:"Kassa2" 
            }]
    },
    reducers:{
        addKassa:(state, action)=>{
            state.kassa.push(action.payload)
        },
       editKassa:(state, action)=>{
        state.kassa[action.payload.index] = action.payload.item
       },
       delKassa:(state, action)=>{
         state.kassa.splice(action.payload, 1)
       }
    
}})  
export const {addKassa,editKassa,delKassa} =  kassaSlice.actions
export default kassaSlice.reducer