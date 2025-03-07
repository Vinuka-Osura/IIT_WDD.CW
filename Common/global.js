fetch("../NavBar/navbar.html")
    .then(response => response.text())
    .then(data => {
        // Put navbar.html into the header placeholder
        document.getElementById("header-placeholder").innerHTML = data;

        // Set active nav item based on the current page url
        const currentPage = window.location.pathname.split("/").pop();
        document.querySelectorAll('.navbar-item a').forEach(link => {
            const linkPage = link.getAttribute('href').split("/").pop();
            if (currentPage === linkPage) {
                link.parentElement.classList.add('active');
            }
        });

        // Load the navbar.js script if not loaded
        const script = document.createElement("script");
        script.src = "../NavBar/navbar.js";
        script.defer = true;
        document.body.appendChild(script);

        // Call the initializer to attach event listeners
        initNavbar();
    })
    .catch(error => console.error("Error loading the header:", error));

fetch("../Footer/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(error => console.error("Error loading the footer:", error));

/*  
Read me - What to do

here you have the header and footer calling javascript code.
please add place holders in your page body and call this js file in head 
*/