window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 500);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

document.getElementById("btnExplore1").addEventListener("click", function() {
    window.location.href = "vfx_sfx_video_fonts.html";
});

document.getElementById("btnExplore2").addEventListener("click", function() {
    window.location.href = "fonts_video_templates.html";
});

document.getElementById("btnExplore3").addEventListener("click", function() {
    window.location.href = "modified_apps.html";
});
