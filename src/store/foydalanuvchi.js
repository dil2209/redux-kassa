import {createSlice} from "@reduxjs/toolkit";


const foydalanuvchiSlice = createSlice({
    name:'foydalanuvchiReducer',
    initialState:{
        foydalanuvchi:[{
            id:1,
            nomi:'Mark',
            tel:1231231,
           },
            { id:2,
            nomi:'Jacob',
            tel:1231231,
            },
            { id:3,
            nomi:'Larry',
             tel:1231231,
            }
           
        ]
    },
    reducers:{
        addFoydalanuvchi:(state, action)=>{
            state.foydalanuvchi.push(action.payload)
        },
       editFoydalanuvchi:(state, action)=>{
        state.foydalanuvchi[action.payload.index] = action.payload.item
       },
       delFoydalanuvchi:(state, action)=>{
         state.foydalanuvchi.splice(action.payload, 1)
       }
    }
})

export const {addFoydalanuvchi,editFoydalanuvchi,delFoydalanuvchi} = foydalanuvchiSlice.actions
export default foydalanuvchiSlice.reducer