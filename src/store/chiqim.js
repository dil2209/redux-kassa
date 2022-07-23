import { createSlice } from '@reduxjs/toolkit'


export const chiqimSlice = createSlice({
    name: 'chiqimReducer',
    initialState:{
        chiqim:[{
            id:1,
            foydalanuvchi:"Mark",
            miqdori:2000,
            kassa:"Kassa1",
            vaqti:"2022-02-02"
        },
        {  id:2,
           foydalanuvchi:"Jacob",
           miqdori:3000,
           kassa:"Kassa2",
           vaqti:"2022-01-02"        
        },
        {  id:3,
           foydalanuvchi:"Larry",
           miqdori:2000,
           kassa:"Kassa1",
           vaqti:"2022-01-06"
        }, {
            id:4,
            foydalanuvchi:"Mark",
            miqdori:1000,
            kassa:"Kassa2",
            vaqti:"2022-01-06"
        }
        
    ]
    },
    reducers:{
        addChiqim:(state, action)=>{
            state.chiqim.push(action.payload)
        },
       editChiqim:(state, action)=>{
        state.chiqim[action.payload.index] = action.payload.item
       },
       delChiqim:(state, action)=>{
         state.chiqim.splice(action.payload, 1)
       }
    
}})  
export const {addChiqim,editChiqim,delChiqim} =  chiqimSlice.actions
export default chiqimSlice.reducer