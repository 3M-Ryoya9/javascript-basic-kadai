const changeBtn = document.getElementById("btn");
let changeMessage = document.getElementById("text")

changeBtn.addEventListener("click",() => {
  changeMessage.textContent ="ボタンをクリックしました";
} );