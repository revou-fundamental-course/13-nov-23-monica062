document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner-slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.opacity = i === index ? 1 : 0;
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);

    const form = document.querySelector('.message-us form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const package = document.getElementById('package').value;

        if (name.trim() === '' || email.trim() === '' || package === '') {
            showAlert('Please fill in all fields', 'error');
            return;
        }
        showAlert('Form submitted successfully!', 'success');
        form.reset();
    });

    function showAlert(message, type) {
        const alertDiv = document.createElement('div');
        alertDiv.textContent = message;

        if (type === 'error') {
            alertDiv.style.backgroundColor = '#FFBABA';
            alertDiv.style.color = '#D8000C';
        } else if (type === 'success') {
            alertDiv.style.backgroundColor = '#DFF2BF';
            alertDiv.style.color = '#4F8A10';
        }

        alertDiv.style.padding = '10px';
        alertDiv.style.marginBottom = '10px';
        alertDiv.style.borderRadius = '4px';
        alertDiv.style.fontWeight = 'bold';

        form.parentNode.insertBefore(alertDiv, form);

        setTimeout(function () {
            alertDiv.remove();
        }, 3000);
    }
});
