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


//id selector from html file
const content=document.querySelector('#content')


//loading the page
window.addEventListener('load', () => {

    getUsers()


})

//function to get all users

function getUsers(){

    //declaring empty variable
    let html = ""

    //api from other sites
    fetch('https://api.sampleapis.com/codingresources/codingResources',{mode:'cors'}) 
        //{mode:'cors'} cross origin request - if in different URL or domain
       
   
    .then(response => {
        //getting the response from the api
        console.log(response)

        //return the format of the response as json
        return response.json()


        //returning the data
    }).then(data => {
        //returning the log data
        console.log(data)
        //displaying in DOM Document Object Model
        //access to the element
        data.forEach(element => {
            //specific element like first_name only
            //console.log(element); //all records
           //console.log(element.first_name);
           
           
            //storing the elements to variable html
            html+=`<li>${element.description} ${element.url}</li>`


        })


        //grab the content id
        content.innerHTML=html

        //to catch the error if there is a problem
       }).catch(error => {

            console.log(error)

       })


}
