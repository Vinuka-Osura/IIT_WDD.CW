fetch("../NavBar/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-placeholder").innerHTML = data;

        // ✅ Manually load the navbar.js script
        const script = document.createElement("script");
        script.src = "../NavBar/navbar.js";  // Ensure this path is correct
        script.defer = true;  // Ensures it loads after the DOM is updated
        document.body.appendChild(script);
    })
    .catch(error => console.error("Error loading the header:", error));

fetch("../Footer/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading the footer:", error));
