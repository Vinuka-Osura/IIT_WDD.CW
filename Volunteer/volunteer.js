document.addEventListener("DOMContentLoaded", function () {
    fetch('../NavBar/index.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;

            // Load navbar CSS dynamically
            let link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = "../NavBar/navbar.css"; // Ensure correct path
            document.head.appendChild(link);
        })

        
        .catch(error => console.error('Error loading navbar:', error));
});
