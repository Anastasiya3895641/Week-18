 const input =document.querySelector(".enterNotion");
 const form =document.querySelector("form");
 const list =document.querySelector(".list");

 let array = [];


 let createLi = (note) => {
    let li = document.createElement('li');
    li.textContent = note;
    list.append(li);
 };

 form.addEventListener('submit',function(event){
    event.preventDefault();
    array.push(input.value);
    localStorage.setItem(Math.random(), array);
    createLi(input.value)
    input.value = "";
 });



 array.forEach(element =>
    {
        createLi(element);
    });