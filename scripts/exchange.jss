// exchange.js

function switchTab(tab) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
}

function updateRate() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const rates = {
        'USD - US Dollar': 84.69,
        'EUR - Euro': 91.25,
        'GBP - British Pound': 106.80
    };
    
    const rate = rates[currency];
    const result = (amount * rate).toLocaleString('en-IN', {
        maximumFractionDigits: 0
    });
    
    document.getElementById('result').textContent = `${result} INR approx`;
}
