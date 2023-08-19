let Like = document.getElementById("like");
let checkB = document.getElementById("btnCheck");
let inputUrl = document.getElementById("inputUrl");
let addUrl = document.getElementById("addUrl");
let choose1 = document.getElementById("choose1");
let choose2 = document.getElementById("choose2");
let choose3 = document.getElementById("choose3");
let choose4 = document.getElementById("choose4");

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
addUrl.value = "";

choose1.addEventListener("click", function () {
  window.open(inputUrl.value, "_blank", "width=375,height=812");
});

choose2.addEventListener("click", function () {
  window.open(inputUrl.value, "_blank", "width=412,height=869");
});

choose3.addEventListener("click", function () {
  window.open(inputUrl.value, "_blank", "width=1024,height=1366");
});

choose4.addEventListener("click", function () {
  window.open(inputUrl.value, "_blank", "width=1920,height=1080");
});
