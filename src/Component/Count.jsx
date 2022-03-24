import { useSelector,useDispatch } from "react-redux"
import { IncCount } from "../Redux/Counter/action"

export const Count=()=>{
    const count=useSelector((store)=>store.counter.count)
    const dispatch=useDispatch()
    return <div>
         <h1>Count:{count}</h1>
         <button onClick={()=>{
             dispatch(IncCount(1))
         }}>Add</button>
    </div>
}