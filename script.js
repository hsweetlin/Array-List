let click = document.getElementById('onclick');
let arr;
click.addEventListener('click', onclick);

 function onclick(){
    arr=[];
    fetch('https://jsonplaceholder.typicode.com/users')
 .then(response=>{
    return response.json()
 })
 .then (users=> {
    console.log(users);
    arr.push(...users);
    makeList();
 })
}

function makeList() {
    let listContainer = document.createElement('div');
    listContainer.className = 'container';
    let listElement = document.createElement('ol');
    let listItem = document.createElement('li');
    document.body.appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (let i = 0; i < arr.length; i++) {
        listItem.innerHTML = arr[i].username;
        listElement.appendChild(listItem);

        listItem = document.createElement('li');
        listItem.className = 'list';
    }
}

//  let div = document.createElement('div');
// let unOrder = document.createElement('ul');
// let listItem = document.createElement('li');
// document.body.appendChild(div);
// div.appendChild(unOrder);
// let arrVal = arr.length;

// //  let arrVal = arr.map((item)=>item);
//  console.log(arrVal.length);
//  for(let i=0; i<arrVal.length; ++i){
//     listItem.innerHTML = arrVal[i].name;
//     unOrder.appendChild(listItem);
//     listItem = document.createElementa('li');
//     //  document.write(`<li>${arrVal[i].name}</li><n/>`);
//     //  document.getElementById('arrayList').innerHTML = `<n/>`  
//     //  console.log(i);  
// }
     // //  console.log(arrayval);
    
//     // return console.log( arr.map((item)=>`<li>${item}</li>`));
    
//     // console.log(arrVal[0].name);
     
// }