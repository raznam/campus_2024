function toggleTheme() {
    var body = document.body;
    var themeButton = document.getElementById('theme-button');

    body.classList.toggle('dark-theme');

    if (body.classList.contains('dark-theme')) {
        themeButton.style.backgroundColor = '#f1c30a'; 
        themeButton.style.color = '#333'; 
    } else {
        themeButton.style.backgroundColor = '#333'; 
        themeButton.style.color = '#f1c30a'; 
    }
}
function openPage(url) {
    window.open(url, '_blank');
}
