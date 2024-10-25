// modal.js

// Function to open modal with selected offer details
function openModal(offerId) {
    const modal = document.getElementById('transactionModal');
    modal.style.display = 'flex';
    const offer = dummyOffers.find(o => o.id === offerId);
    document.getElementById('transactionDetails').innerHTML = `
        <p><strong>Offer Type:</strong> ${offer.type === 'buy' ? 'Buy' : 'Sell'}</p>
        <p><strong>Currency:</strong> ${offer.currency}</p>
        <p><strong>Amount:</strong> ${offer.amount}</p>
        <p><strong>Rate:</strong> ${offer.rate}</p>
        <p><strong>User:</strong> ${offer.user} (${offer.rating}★)</p>
        <p><strong>Payment Method:</strong> ${offer.paymentMethod}</p>
    `;
}

// Function to close modal
function closeModal() {
    document.getElementById('transactionModal').style.display = 'none';
}

// Function to confirm transaction
function confirmTransaction() {
    alert('Transaction confirmed! Redirecting to payment...');
    closeModal();
}
