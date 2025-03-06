
        function loadComponent(id, file) {
            fetch(file)
                .then(response => response.text())
                .then(data => document.getElementById(id).innerHTML = data)
                .catch(error => console.error(`Error loading ${file}:`, error));
                }
        

        // Load Navbar and Footer
        loadComponent("navbar-container", "../NavBar/navbar.html");
        loadComponent("footer-container", "../Footer/footer.html");