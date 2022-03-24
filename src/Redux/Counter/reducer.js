import { Inc_Count } from "./actionType";

export const CounterReducer=(store={count:0},{type,payload})=>{
      switch(type){
          case Inc_Count:
              return {...store,count:store.count+payload}
              default:
                  return store
      }
}