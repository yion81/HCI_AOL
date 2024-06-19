// JavaScript to toggle dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    const menuBurger = document.querySelector('.MenuBurger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuBurger.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        const isClickInside = menuBurger.contains(event.target);
        const isDropdownVisible = dropdownMenu.classList.contains('show');

        if (!isClickInside && isDropdownVisible) {
            dropdownMenu.classList.remove('show');
        }
    });
});
