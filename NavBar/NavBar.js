// Toggle search input display
const searchContainer = document.querySelector('.search-container');
const searchToggle = document.querySelector('.search-toggle');

searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});

// Toggle light/dark mode
const modeToggle = document.querySelector('.mode-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Change the icon based on mode
    if (document.body.classList.contains('dark-mode')) {
        modeToggle.innerHTML = '&#9790;'; // Moon icon
    } else {
        modeToggle.innerHTML = '&#9728;'; // Sun icon
    }
});
