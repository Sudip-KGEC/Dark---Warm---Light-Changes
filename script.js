let container = document.querySelector(".container");
 let btn = document.querySelector("#btn");


  
 btn.addEventListener("click" , function () {
  if (btn.innerText == "Light") {
    container.style.backgroundColor = "#F8CC7A"
    btn.innerText= "Warm"
    btn.style.backgroundColor = "#EDB351"
  } else if (btn.innerText == "Warm"){
   container.style.backgroundColor = "black"
    btn.innerText = "Dark"
     btn.style.backgroundColor = "#323232";
       btn.style.color = "white"
  } else {
       btn.innerText= "Light"
       container.style.backgroundColor = "white";
       btn.style.backgroundColor = "#C0C0C0";
       btn.style.color = "black";
      
  }
 })