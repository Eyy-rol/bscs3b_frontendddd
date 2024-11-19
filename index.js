// console.log(fetch('https://chevrolet.com.ph/wp-content/uploads/2024/04/What-Makes-a-Car-a-%E2%80%98Sports-Car.png'))

// .then(response=>{

//     console.log(response)
//     return response.blob()
// })

// .then(blob=>{
//     console.log(blob)
//     document.querySelector('#myImage').src=URL.createObjectURL(blob)
// })

// .catch(error=>{
//     console.log
// })


const content = document.querySelector("#content")

window.addEventListener("load"),()=>{
    getUsers();
}

function getUsers(){

let html =""

    fetch("http://localhost:6003/juandelacruzAPI/",{mode:"cors"}) //cross orginal

.then((response)=>{
    console.log(response)
    return response.json();
})

.then((data) => { data.forEach((element)=>{
html += `<li> ${element.first_name} ${element.last_name}</li>`
    })
content.innerHTML = html
})

.catch((error)=>{

    console.log(error)
    })

}
