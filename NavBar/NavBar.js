function initNavbar() {
    // Search functionality
    const searchContainer = document.querySelector('.search-container');
    if (searchContainer) {
        const searchToggle = document.querySelector('.search-toggle');
        const searchInput = searchContainer.querySelector('input');
        const searchReset = document.querySelector('.search-reset');

        searchToggle.addEventListener('click', function (e) {
            e.stopPropagation();
            searchContainer.classList.toggle('active');
            if (searchContainer.classList.contains('active')) {
                searchInput.focus();
            } else {
                searchInput.value = '';
            }
        });

        searchReset.addEventListener('click', function (e) {
            e.stopPropagation();
            searchContainer.classList.remove('active');
            searchInput.value = '';
        });

        document.addEventListener('click', function (e) {
            if (!searchContainer.contains(e.target)) {
                searchContainer.classList.remove('active');
                searchInput.value = '';
            }
        });
    }

    // Dark/Light mode toggle
    const modeToggle = document.querySelector('.mode-toggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            } else {
                modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        });
    }
}

// If the document is already loaded, call initNavbar immediately.
if (document.readyState !== 'loading') {
    initNavbar();
} else {
    document.addEventListener('DOMContentLoaded', initNavbar);
}
