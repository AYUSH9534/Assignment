document.addEventListener('DOMContentLoaded', function () {
    fetch('https://fakestoreapi.com/products/categories')
        .then(response => response.json())
        .then(categories => {
            const categoryList = document.getElementById('category-list');
            categories.forEach(category => {
                const li = document.createElement('li');
                li.textContent = category;
                categoryList.appendChild(li);
            });
        })
        .catch(error => console.error(error));

    // Form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields.');
        } else {
            // You can submit the form here or perform other actions
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
});
