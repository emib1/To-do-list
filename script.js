const submitBtn = document.querySelector('.submit');
const  taskList = document.querySelector(".container ul");
const input = document.querySelector(".container input");

taskList.innerHTML = "";

submitBtn.addEventListener("click", function(){
    inputVal = input.value;
    const liElement = document.createElement("li");
    if (inputVal === ""){
        alert("please write a task!")
    }
    else{
        liElement.innerText = inputVal;
        const btnElement = document.createElement("button");
        btnElement.innerText = "Delete"
        btnElement.classList.add("del")
        liElement.appendChild(btnElement);
        taskList.appendChild(liElement);
    }

    const delBtns = document.querySelectorAll(".del");

    delBtns.forEach( delBtn => {
        delBtn.addEventListener("click", function(){
            liElement.innerHTML = "";
        });
    });
 
 });


