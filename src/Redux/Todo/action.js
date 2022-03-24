import { Add_Loading, Add_Success, Add_Todo, Get_Loading, Get_Success, Inc_Count } from "./actionType.js";



export const AddTodo=(payload)=>({
    type:Add_Todo,payload
})

export const AddLoading=()=>({
    type:Add_Loading
})

export const AddSuccess=()=>({
    type:Add_Success
})

export const GetLoading=()=>({
    type:Get_Loading
})

export const GetSuccess=(payload)=>({
    type:Get_Success,payload
})