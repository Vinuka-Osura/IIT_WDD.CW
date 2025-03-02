document.addEventListener('DOMContentLoaded', function () {
    const searchContainer = document.querySelector('.search-container');
    const searchToggle = document.querySelector('.search-toggle');
    const searchInput = searchContainer.querySelector('input');
    const searchReset = document.querySelector('.search-reset');

    // Toggle the search box on the icon click
    searchToggle.addEventListener('click', function (e) {
        e.stopPropagation(); // Prevent the click from propagating to document
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        } else {
            searchInput.value = '';
        }
    });

    // Reset the search box when reset button is clicked
    searchReset.addEventListener('click', function (e) {
        e.stopPropagation();
        searchContainer.classList.remove('active');
        searchInput.value = '';
    });

    // Hide the search box when clicking outside the search container
    document.addEventListener('click', function (e) {
        if (!searchContainer.contains(e.target)) {
            searchContainer.classList.remove('active');
            searchInput.value = '';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.querySelector('.mode-toggle');
    
    modeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update the toggle button icon based on the current mode
        if (document.body.classList.contains('dark-mode')) {
            modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
});
