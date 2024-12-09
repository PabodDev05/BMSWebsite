window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const text = document.querySelector('.text');
    setTimeout(() => {
        text.style.opacity = 1;
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 1000); // Adjust delay for text display
    }, 1000); // Adjust delay for loader animation
});
