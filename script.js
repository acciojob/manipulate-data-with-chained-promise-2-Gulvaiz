
const output = document.getElementById("output")
const arr = [1,2,3,4]

function delay(arr,time){
    return new Promise((resolve) => {
     setTimeout( () => {
           resolve (arr)
     }, time)
    })
}

delay(arr, 3000)
.then((arr) => {
     arr.filter(ele/2 === 0)
     output.innerHTML = `${arr}`//
}, 1000)
.then((arr) => {
     
     arr.map((ele) => { ele * 2})
     
     output.innerText = `${arr}`
}, 2000) 
.catch( (e) => {
     output.innerText = `Error: ${e}`
} )