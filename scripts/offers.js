// offers.js

// Sample data for offers
const dummyOffers = [
    { id: 1, type: 'sell', currency: 'USD', amount: 1000, rate: 83.25, user: 'John D.', rating: 4.8, paymentMethod: 'Bank Transfer', verified: true },
    { id: 2, type: 'buy', currency: 'EUR', amount: 500, rate: 90.15, user: 'Sarah M.', rating: 4.9, paymentMethod: 'UPI', verified: true },
    { id: 3, type: 'sell', currency: 'GBP', amount: 200, rate: 102.50, user: 'Michael B.', rating: 4.7, paymentMethod: 'Cash', verified: false },
];

// Function to render offers
function renderOffers(offers) {
    const container = document.getElementById('offersContainer');
    container.innerHTML = '';
    offers.forEach(offer => {
        const offerEl = document.createElement('div');
        offerEl.classList.add('offer-card');
        offerEl.innerHTML = `
            <div>
                <strong>${offer.type === 'buy' ? 'Buy' : 'Sell'} ${offer.currency}</strong><br>
                Amount: ${offer.amount}<br>
                Rate: ${offer.rate}<br>
                User: ${offer.user} (${offer.rating}★)
            </div>
            <button class="btn btn-icon" onclick="openModal(${offer.id})" aria-label="Trade ${offer.currency}">
                <i class="fas fa-exchange-alt"></i>
            </button>
        `;
        container.appendChild(offerEl);
    });
}

// Filter offers based on user input
function filterOffers() {
    const currency = document.getElementById('currencyFilter').value;
    const minAmount = document.getElementById('minAmount').value;
    const maxAmount = document.getElementById('maxAmount').value;
    const filteredOffers = dummyOffers.filter(offer => {
        return (!currency || offer.currency === currency) &&
               (!minAmount || offer.amount >= minAmount) &&
               (!maxAmount || offer.amount <= maxAmount);
    });
    renderOffers(filteredOffers);
}

// Initial rendering of offers
renderOffers(dummyOffers);
