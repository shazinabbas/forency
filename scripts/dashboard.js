// dashboard.js

// Event Listener for Refresh Button
document.getElementById('refreshBtn').addEventListener('click', function() {
    // Logic to refresh data or reload parts of the dashboard
    alert("Refreshing data...");
});

// You can dynamically populate the comparison table using JS
const comparisonData = [
    { provider: 'Wise', rate: '83.25', spread: '0.20%', fee: '₹100', delivery: '1-2 days', rating: '4.8/5', features: 'Home Delivery, P2P' },
    { provider: 'XE', rate: '83.45', spread: '0.35%', fee: '₹150', delivery: '2-3 days', rating: '4.5/5', features: 'P2P' },
    { provider: 'Remitly', rate: '83.50', spread: '0.50%', fee: '₹200', delivery: '1-3 days', rating: '4.0/5', features: 'Home Delivery' }
];

const tableBody = document.getElementById('comparisonTable');
comparisonData.forEach(data => {
    const row = `<tr>
        <td>${data.provider}</td>
        <td>${data.rate} <span class="badge badge-success">Best Rate</span></td>
        <td>${data.spread}</td>
        <td>${data.fee}</td>
        <td>${data.delivery}</td>
        <td>${data.rating}</td>
        <td>${data.features}</td>
    </tr>`;
    tableBody.innerHTML += row;
});
