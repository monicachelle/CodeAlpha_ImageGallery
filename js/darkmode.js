

const themeToggle = document.getElementById("themeToggle");



function setTheme(theme){

    document.documentElement.setAttribute("data-theme", theme);

    localStorage.setItem("monicaverse-theme", theme);

    updateThemeIcon(theme);

}



function updateThemeIcon(theme){

    if(!themeToggle) return;

    const icon = themeToggle.querySelector("i");

    if(theme === "light"){

        icon.className = "ri-sun-line";

    }else{

        icon.className = "ri-moon-line";

    }

}



function toggleTheme(){

    const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";

    const newTheme =
        currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);

}



function loadTheme(){

    const savedTheme =
        localStorage.getItem("monicaverse-theme") || "dark";

    setTheme(savedTheme);

}



if(themeToggle){

    themeToggle.addEventListener("click", toggleTheme);

}

if (document.readyState !== "loading") {
    loadTheme();
} else {
    document.addEventListener("DOMContentLoaded", loadTheme);
}
