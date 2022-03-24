import { Add_Loading, Add_Success, Add_Todo, Get_Loading, Get_Success, Inc_Count } from "./actionType.js"

const init={
        loading:false,
        error:false,
        data:[],
}
export const TodoReducer=(store=init,{type,payload})=>{
      switch(type){
              case Add_Todo:
                  return {...store,todo:[...store.todo,payload]}
                  case Add_Loading:
                      return {...store,loading:true}
                      case Add_Success:
                          return {...store,loading:false}
                          case Get_Loading:
                              return {...store,loading:true}
                              case Get_Success:
                                  return {...store,loading:false,data:payload}
                          
              default:
                  return store
      }
}