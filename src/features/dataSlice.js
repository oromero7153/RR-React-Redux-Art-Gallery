import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    objectId: 5700,
    apiData: {} 
}

export const dataSlice = createSlice({
name: 'data',
initialState,
reducers:{
    setData: (state, action) => ({...state, apiData: action.payload}),
    incrementId: (state, action) => ({...state, objectId: state.objectId + 1}),
    decrementId: (state, action) => ({...state, obejctId: state.objectId - 1}),
    inputId:(state, action)=>({... state, objectId: action.payload}), 
    clearData: (state, action) => (initialState)
}
})

export const fetchData=() => {
    const dataThunk = async (dispatch, getState) => {
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${getState().data.objectId}`)
        const resData = await response.json()
        console.log(resData)
        dispatch(setData(resData))
    }
    return dataThunk
}

export const{ setData, incrementId, decrementId, inputId, clearData} = dataSlice.actions

export default dataSlice.reducer