
document.addEventListener("DOMContentLoaded", function() {
    
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }

    
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.innerText = "Ark w Ryley";
    themeToggleBtn.style.position = "fixed";
    themeToggleBtn.style.bottom = "20px";
    themeToggleBtn.style.right = "20px";
    themeToggleBtn.style.padding = "10px 20px";
    themeToggleBtn.style.fontSize = "16px";
    themeToggleBtn.style.backgroundColor = "#4caf50";
    themeToggleBtn.style.color = "white";
    themeToggleBtn.style.border = "none";
    themeToggleBtn.style.cursor = "pointer";
    themeToggleBtn.style.borderRadius = "5px";
    themeToggleBtn.style.transition = "background-color 0.3s ease";

    themeToggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-theme");
        
        // Save the theme to localStorage
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark-theme");
        } else {
            localStorage.setItem("theme", "light-theme");
        }
    });

   
    document.body.appendChild(themeToggleBtn);
});


function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}


function updateAboutSection(name, age, birthday, city, hobbies, food) {
    const aboutSection = document.querySelector("#about p");
    aboutSection.innerHTML = `
        <strong>${name}</strong><br>
        Age: ${age}<br>
        Born on: ${birthday}<br>
        From: ${city}<br>
        Hobbies: ${hobbies}<br>
        Favorite Food: ${food}
    `;
}


updateAboutSection(
    "Jynsbhil Ryley Gragasin", 
    19, 
    "August 13, 2005", 
    "Valdefuente, Cabanatuan City N.E", 
    "Online Games, Basketball, Volleyball, Watching Anime", 
    "Butter Garlic Shrimp"
);
