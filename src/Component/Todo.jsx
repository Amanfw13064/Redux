import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddLoading, AddSuccess, AddTodo, GetLoading, GetSuccess } from "../Redux/Todo/action"
import axios from 'axios'

export const Todo=()=>{

    const [text,setText]=useState()
    const {loading,error,data}=useSelector((store)=>store.todo,function(prev,curr){
      if(prev.loading===curr.loading&&prev.error===curr.error){
          return true
      }else{
          return false
      }
    })
    const dispatch=useDispatch()
    useEffect(()=>{
      getData()
    },[])
    const getData=()=>{
        dispatch(GetLoading())
        axios.get("http://localhost:3001/Todo").then(({data})=>{
             dispatch(GetSuccess(data)) 
        })
    }

    return loading?"Loading...":<div>

       <input type="text" onChange={(e)=>{
           setText(e.target.value)
       }} />

       <button onClick={()=>{
           dispatch(AddLoading())
         axios.post("http://localhost:3001/Todo",{
             title:text,
             status:false,
         }).then(()=>{
             dispatch(AddSuccess())
             getData()
         }).catch(()=>{

         })
       }}>Add Todo</button>

       {data.map(e=>(
           <div>{e.title}</div>
       ))}

    </div>
}