// Add your code here
// 


// const fromData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// };
// // const configurationObject = {
// //     method: "POST",
// //     headers: {
// //         "Content-Type": "application/json",
// //         Accept: "applecation/json",
// //     },
// //     body: JSON.stringify({formData}),
// };

// fetch ("http://localhost:3000/dogs", configurationObject)
    // .then((resp) => resp.json()).then(function(object){
    //     console.log(object);
    // });

function submitData(){
    const objConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"
    })};

    fetch("http://localhost:3000/users", objConfig)
    .then((resp) => resp.json())
    .then(obj => console.log(obj))
    .then(
}
