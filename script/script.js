document.getElementById("menuButton").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("open");
    document.querySelector("main").classList.add("open");
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
    document.querySelector("main").classList.remove("open");
});