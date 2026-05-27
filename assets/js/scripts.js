(function() {
   
    const sliders = document.querySelectorAll('.slider');

    sliders.forEach(slider => {
        slider.value = 0;
        slider.addEventListener('input', () => {

            document.querySelector(`.index--${slider.dataset.target}`).innerHTML = slider.value;

            document.documentElement.style.setProperty(`--${slider.dataset.target}`, slider.value);

            
        });
    });

})();