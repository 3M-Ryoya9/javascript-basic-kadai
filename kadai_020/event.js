const changeBtn = document.getElementById("btn");
const changeMessage = document.getElementById("text")

changeBtn.addEventListener("click",() => {
  changeMessage.textContent ="ボタンをクリックしました";
} );