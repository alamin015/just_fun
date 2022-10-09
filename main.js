const btn = document.getElementById('submit');
const pass = document.getElementById('pass');






btn.addEventListener('mouseover',() => {
    const pass = document.getElementById('pass').value;
    const cls = btn.className;

    if(pass == "123"){
        btn.value = "now you can click";
    }else{
        if(cls == "move"){
            btn.classList.remove("move")
        }else{
            btn.classList.add("move")
    }
    }
    
})


pass.addEventListener('keyup',() =>{
    const p = pass.value;
    if(p == "123"){
        btn.classList.remove("move");
        btn.value = "now you can click";
    }else{
        btn.value = "Submit";
    }
})









// fetch('https://jsonplaceholder.typicode.com/posts/1',{
//     method: 'PATCH',
//     body: JSON.stringify({

//         title: "wow i am able to make api",
//         // userId: 1,
//         // body: "hello kemon aco sobai: valo ni?",
        
//     }),
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// .then(res => res.json())
// .then(res => console.log(res.title))


// async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/post/');
//     if(response.ok){
//         const data = await response.json();
//         return data;
//     }else{
//         throw new Error("sorry this is erorr")
//     }
    
// }


// function myFunction(){
//     getData()
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
// }

// myFunction()

// const getData = async (url,config) => {
//     const response = await fetch(url,config)
//     const data = response.json();
//     return data;
// }



// const myFunction = () => {
//     getData('https://jsonplaceholder.typicode.com/posts/')
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

// myFunction()

// const tmrFunction = () => {
//     getData('https://jsonplaceholder.typicode.com/posts/',{
//         method: 'POST',
//         body: JSON.stringify({
//             id: 1,
//             body: "Bangladesh",
//             title: "hello bangladesh",
//             userId: 204,
//         }),
//         headers: {
//             'Content-type' : 'application/json; charset=UTF-8'
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }

// tmrFunction()