const searchBar = document.getElementById("searchBar");
const searchTarget = document.querySelector("#searchBlank");

searchTarget.classList.remove("on");

searchBar.addEventListener("click", () => {
  searchTarget.classList.toggle("on");
});
