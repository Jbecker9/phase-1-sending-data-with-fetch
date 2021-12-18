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

function submitData(name, email){
    const objConfig = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
    body: JSON.stringify({
        name,
        email
    })};

    fetch("http://localhost:3000/users", objConfig)
    .then((resp) => resp.json())
    .then(obj => {
        console.log(obj)
        appendId(obj)})
    .catch(error => {
        console.log(error.message)
        document.body.innerHTML = error.message})
    // .catch(obj => console.log("HERE;;; " + obj.message))
}

function appendId(obj){
    document.body.innerHTML = obj["id"]
}
