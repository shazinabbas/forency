document.addEventListener('DOMContentLoaded', function () {
    const providers = [
        {
            name: 'RBI Authorized Exchange House',
            rate: 85044,
            usdRate: 84.69,
            bankCharges: 354,
            paymentMethods: ['Payment Gateway', 'NEFT/RTGS'],
            supports: ['Flywire', 'Convera', 'PayMyTuition']
        },
        {
            name: 'ICICI Bank',
            rate: 85430,
            usdRate: 84.84,
            bankCharges: 590,
            paymentMethods: ['NEFT/RTGS'],
            branchVisit: true
        }
    ];

    const providerSelection = document.getElementById('providerSelection');
    const continueButton = document.getElementById('continueButton');
    let selectedProvider = null;

    providers.forEach((provider, index) => {
        const providerCard = document.createElement('div');
        providerCard.className = 'flex items-start space-x-4 mb-4';

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'provider';
        radioInput.id = `provider-${index}`;
        radioInput.value = provider.name;

        radioInput.addEventListener('change', function () {
            selectedProvider = provider.name;
            continueButton.disabled = !selectedProvider;
        });

        const label = document.createElement('label');
        label.htmlFor = `provider-${index}`;
        label.className = 'flex-grow cursor-pointer';

        label.innerHTML = `
            <div class="card">
                <div class="card-content pt-6">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <h3 class="font-semibold text-lg">${provider.name}</h3>
                            <p class="text-sm text-gray-500">
                                USD @ ${provider.usdRate} | Bank Charges: ₹${provider.bankCharges}
                            </p>
                        </div>
                        <div class="text-right">
                            <p class="text-2xl font-bold text-primary">₹ ${provider.rate.toLocaleString()}</p>
                            <p class="text-sm text-gray-500">Total (incl. charges)</p>
                        </div>
                    </div>
                    <div class="space-y-2">
                        <div class="flex items-center space-x-2">
                            <span class="icon-dollar-sign"></span>
                            <span class="text-sm">Payment: ${provider.paymentMethods.join(', ')}</span>
                        </div>
                        ${provider.supports ? `
                        <div class="flex items-center space-x-2">
                            <span class="icon-building"></span>
                            <span class="text-sm">Supports: ${provider.supports.join(', ')}</span>
                        </div>` : ''}
                        ${provider.branchVisit ? `
                        <div class="flex items-center space-x-2">
                            <span class="icon-map-pin"></span>
                            <span class="text-sm">Branch visit required</span>
                        </div>` : ''}
                    </div>
                </div>
            </div>
        `;

        providerCard.appendChild(radioInput);
        providerCard.appendChild(label);
        providerSelection.appendChild(providerCard);
    });
});
