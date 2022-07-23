import {createSlice} from '@reduxjs/toolkit'

export const kirimSlice = createSlice({
    name: 'kirimReducer',
    initialState:{
        kirim:[{
            id:1,
            foydalanuvchi:"Mark",
            miqdori:8000,
            kassa:"Kassa1",
            vaqti:"2022-01-02"
        },
        {  id:2,
           foydalanuvchi:"Jacob",
           miqdori:10000,
           kassa:"Kassa2",
           vaqti:"2022-02-02"        
        },
        {  id:3,
           foydalanuvchi:"Larry",
           miqdori:30000,
           kassa:"Kassa1",
           vaqti:"2022-03-03"
        },
        {
            id:4,
            foydalanuvchi:"Larry",
            miqdori:2000,
            kassa:"Kassa2",
            vaqti:"2022-01-06"
        }
       
    ]
    },
    reducers:{
        addKirim:(state, action)=>{
            state.kirim.push(action.payload)
        },
       editKirim:(state, action)=>{
        state.kirim[action.payload.index] = action.payload.item
       },
       delKirim:(state, action)=>{
         state.kirim.splice(action.payload, 1)
       }
    
}})  
export const {addKirim,editKirim,delKirim} = kirimSlice.actions
export default kirimSlice.reducer