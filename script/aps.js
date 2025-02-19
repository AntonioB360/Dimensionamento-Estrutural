document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.hidden');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        elements.forEach(element => {
            const positionFromTop = element.getBoundingClientRect().bottom;

            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('show');
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);

    checkPosition();
});