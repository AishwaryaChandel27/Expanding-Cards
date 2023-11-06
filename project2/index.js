const panals = document.querySelectorAll('.panal');

panals.forEach(panal => {
    panal.addEventListener('click', () => {
        removeActiveClasses();
        panals.forEach(p => {
            p.classList.remove('active');
        });
        panal.classList.add('active');
    });
});

function removeActiveClasses() {
    panals.forEach(panal => {
        panal.classList.remove('active');
    });
}
