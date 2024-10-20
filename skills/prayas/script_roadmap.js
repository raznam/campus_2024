document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuBar = document.getElementById('menu-bar');

    menuToggle.addEventListener('click', function(event) {
        event.stopPropagation();
        this.classList.toggle('open');
        menuBar.classList.toggle('open');
    });

    document.addEventListener('click', function(event) {
        if (!menuBar.contains(event.target) && !menuToggle.contains(event.target)) {
            menuToggle.classList.remove('open');
            menuBar.classList.remove('open');
        }
    });
});
