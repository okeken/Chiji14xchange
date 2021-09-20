import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const getUserAsync = createAsyncThunk(
    'userSlice/fetchUser',
    async ()=>{
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    return (response.data)

    }
)

export const userSlice = createSlice({
    name:'userSlice',
    initialState:{
        data:[],
        status:null,
        error:null
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
        .addCase(getUserAsync.pending, (state) => {
         state.status ='pending'
        })
        .addCase(getUserAsync.fulfilled, (state, {payload}) => {
       
           state.data=[...payload]
           state.status = 'fulfilled'
        })
        .addCase(getUserAsync.rejected, (state) => {
            state.status = 'rejected'    
        })
    }

})

export default userSlice.reducer;