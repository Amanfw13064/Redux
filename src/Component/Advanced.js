const x={
    first:"Masai",
    middle:"Coding",
    last:"School",
}
// let Obj=new Proxy(x,{
//     get:(target,prop)=>{
//        console.log(target,prop) {first:'Masai', middle:"Coding",last:'School'}
//        return prop.split('_').map(e=>target[e].join(" "))
//     }
// })

// console.log(obj.first_last)

// const x = {
//     first: "Masai",
//     middle: "Coding",
//     last: "School"
// };

const obj = new Proxy(x, {
    get: (target, prop) => {
        console.log(target, prop)
        return prop.split("_").map(e => target[e]).join(' ')
    },
    set: ()=> {
        // 
    }
})



console.log(obj.first_last)
console.log(obj.last_first)
console.log(obj.last_middle_first)
console.log(obj.last_last_last_last_last_last_last_)