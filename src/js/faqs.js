document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('faq-is-active');
        this.classList.toggle('clicked');
    });
});