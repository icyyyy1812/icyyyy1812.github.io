document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetPage = this.getAttribute('data-target');
            window.location.href = targetPage;
        });
    });
});