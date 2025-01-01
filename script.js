// Select the navigation icon and dropdown menu
const navIcon = document.getElementById('nav-icon');
const dropdownMenu = document.getElementById('dropdown-menu');

// Toggle the dropdown menu on icon click
navIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show-menu');
});

// Optional: Close the dropdown when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = dropdownMenu.contains(e.target);
    const isClickOnIcon = navIcon.contains(e.target);

    if (!isClickInsideMenu && !isClickOnIcon) {
        dropdownMenu.classList.remove('show-menu');
    }
});
