// form.js

// Form submission event listener
document.getElementById('newOfferForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('New offer created successfully!');
    this.reset();
});
