let Like = document.getElementById("like");
let checkB = document.getElementById("btnCheck");
let inputUrl = document.getElementById("inputUrl");
let addUrl = document.getElementById("addUrl");

// Like Function
function addLike() {
  if (Like.style.color == "white") {
    Like.style.color = "red";
  } else {
    Like.style.color = "white";
  }
}

//Check Function
checkB.addEventListener("click", () => {
  let url = inputUrl.value;

  if (url == "") {
    addUrl.innerHTML = "Please Enter a URL to Check!";
    addUrl.style.color = "red";
  }
});
